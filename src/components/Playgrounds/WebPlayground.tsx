import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, Play, ArrowLeft, Download, Share2, RefreshCw } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface WebPlaygroundData {
  id?: string;
  title: string;
  html: string;
  css: string;
  js: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const WebPlayground: React.FC = () => {
  const { snippetId } = useParams<{ snippetId?: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [playground, setPlayground] = useState<WebPlaygroundData>({
    title: 'New Web Playground',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Playground</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Start building your web page here.</p>
    <button id="myButton">Click me!</button>
</body>
</html>`,
    css: `body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
}

#myButton {
    background: rgba(255,255,255,0.2);
    border: 2px solid white;
    color: white;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#myButton:hover {
    background: white;
    color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    let clickCount = 0;
    
    button.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            button.textContent = 'Clicked once!';
            button.style.background = 'rgba(255,255,255,0.3)';
        } else if (clickCount === 2) {
            button.textContent = 'Double clicked!';
            button.style.background = 'rgba(255,255,255,0.4)';
        } else {
            button.textContent = \`Clicked \${clickCount} times!\`;
            button.style.background = 'rgba(255,255,255,0.5)';
        }
        
        // Add a fun animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
    
    console.log('Web playground loaded successfully!');
});`
  });
  
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (snippetId && snippetId !== 'new') {
      loadPlayground();
    } else {
      generateOutput();
    }
  }, [snippetId]);

  useEffect(() => {
    generateOutput();
  }, [playground.html, playground.css, playground.js]);

  const loadPlayground = async () => {
    if (!currentUser || !snippetId) return;

    try {
      setLoading(true);
      const docRef = doc(db, 'users', currentUser.uid, 'playgrounds', 'web', 'snippets', snippetId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setPlayground({
          id: snippetId,
          title: data.title || 'Untitled Playground',
          html: data.html || '',
          css: data.css || '',
          js: data.js || '',
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        });
      }
    } catch (error) {
      console.error('Error loading playground:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateOutput = () => {
    const htmlWithStyles = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Preview</title>
          <style>${playground.css}</style>
      </head>
      <body>
          ${playground.html.replace(/<html[^>]*>|<\/html>|<head[^>]*>[\s\S]*?<\/head>|<body[^>]*>|<\/body>/gi, '')}
          <script>${playground.js}</script>
      </body>
      </html>
    `;
    setOutput(htmlWithStyles);
  };

  const savePlayground = async () => {
    if (!currentUser || !playground.title.trim()) return;

    try {
      setSaving(true);
      const playgroundData = {
        title: playground.title.trim(),
        html: playground.html,
        css: playground.css,
        js: playground.js,
        updatedAt: new Date(),
        ...((!playground.id || playground.id === 'new') && { createdAt: new Date() })
      };

      if (!playground.id || playground.id === 'new') {
        const docRef = await addDoc(
          collection(db, 'users', currentUser.uid, 'playgrounds', 'web', 'snippets'),
          playgroundData
        );
        setPlayground(prev => ({ ...prev, id: docRef.id }));
        navigate(`/playgrounds/web/${docRef.id}`, { replace: true });
      } else {
        await updateDoc(
          doc(db, 'users', currentUser.uid, 'playgrounds', 'web', 'snippets', playground.id),
          playgroundData
        );
      }
    } catch (error) {
      console.error('Error saving playground:', error);
    } finally {
      setSaving(false);
    }
  };

  const downloadCode = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${playground.title}</title>
    <style>
${playground.css}
    </style>
</head>
<body>
${playground.html.replace(/<html[^>]*>|<\/html>|<head[^>]*>[\s\S]*?<\/head>|<body[^>]*>|<\/body>/gi, '')}
    <script>
${playground.js}
    </script>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${playground.title.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetPlayground = () => {
    if (window.confirm('Are you sure you want to reset the playground? This will clear all your code.')) {
      setPlayground({
        title: 'New Web Playground',
        html: '<h1>Hello World!</h1>\n<p>Start building your web page here.</p>',
        css: 'body {\n    font-family: Arial, sans-serif;\n    padding: 20px;\n}',
        js: 'console.log("Hello from JavaScript!");'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading playground...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/playgrounds')}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <input
              type="text"
              value={playground.title}
              onChange={(e) => setPlayground(prev => ({ ...prev, title: e.target.value }))}
              className="text-lg font-semibold bg-transparent text-gray-900 dark:text-white border-none outline-none focus:bg-gray-50 dark:focus:bg-gray-700 px-2 py-1 rounded"
              placeholder="Playground title..."
            />
            
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded">
              Web
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={resetPlayground}
              className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </button>
            
            <button
              onClick={savePlayground}
              disabled={saving || !playground.title.trim()}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
            
            <button
              onClick={downloadCode}
              className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Editors */}
        <div className="w-1/2 flex flex-col">
          {/* HTML Editor */}
          <div className="flex-1 flex flex-col border-b border-gray-200 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-medium text-orange-800 dark:text-orange-300">HTML</h3>
            </div>
            <textarea
              value={playground.html}
              onChange={(e) => setPlayground(prev => ({ ...prev, html: e.target.value }))}
              className="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-none border-none outline-none"
              placeholder="Enter HTML here..."
              spellCheck={false}
            />
          </div>

          {/* CSS Editor */}
          <div className="flex-1 flex flex-col border-b border-gray-200 dark:border-gray-700">
            <div className="bg-purple-100 dark:bg-purple-900/20 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-medium text-purple-800 dark:text-purple-300">CSS</h3>
            </div>
            <textarea
              value={playground.css}
              onChange={(e) => setPlayground(prev => ({ ...prev, css: e.target.value }))}
              className="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-none border-none outline-none"
              placeholder="Enter CSS here..."
              spellCheck={false}
            />
          </div>

          {/* JavaScript Editor */}
          <div className="flex-1 flex flex-col">
            <div className="bg-yellow-100 dark:bg-yellow-900/20 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">JavaScript</h3>
            </div>
            <textarea
              value={playground.js}
              onChange={(e) => setPlayground(prev => ({ ...prev, js: e.target.value }))}
              className="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-none border-none outline-none"
              placeholder="Enter JavaScript here..."
              spellCheck={false}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="w-1/2 flex flex-col border-l border-gray-200 dark:border-gray-700">
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Preview</h3>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800">
            <iframe
              srcDoc={output}
              className="w-full h-full border-none"
              title="Live Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPlayground;