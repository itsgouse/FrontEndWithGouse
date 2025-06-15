import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, Play, ArrowLeft, Download, RefreshCw, Globe, Code2, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
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
  
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [playground, setPlayground] = useState<WebPlaygroundData>({
    title: 'Name of Playground',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Playground</title>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>Start building your web page here.</p>
        <button id="myButton" class="btn">Click me!</button>
        <div id="output"></div>
    </div>
</body>
</html>`,
    css: `/* Modern CSS Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #fff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.btn {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    border: none;
    color: white;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn:active {
    transform: translateY(0);
}

#output {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    min-height: 50px;
    font-weight: bold;
}`,
    js: `// Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');
    let clickCount = 0;
    
    // Button click handler
    button.addEventListener('click', function() {
        clickCount++;
        
        // Update button text and output
        if (clickCount === 1) {
            button.textContent = 'Clicked once! 🎉';
            output.innerHTML = '<p>Great! You clicked the button!</p>';
        } else if (clickCount === 5) {
            button.textContent = 'Wow! 5 clicks! 🚀';
            output.innerHTML = '<p>You\\'re getting the hang of this!</p>';
        } else if (clickCount === 10) {
            button.textContent = 'Click Master! 👑';
            output.innerHTML = '<p>You\\'ve mastered the art of clicking!</p>';
        } else {
            button.textContent = \`Clicked \${clickCount} times! 💫\`;
            output.innerHTML = \`<p>Click count: <strong>\${clickCount}</strong></p>\`;
        }
        
        // Add animation effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
        
        // Change background color slightly
        const hue = (clickCount * 30) % 360;
        document.body.style.background = \`linear-gradient(135deg, hsl(\${hue}, 70%, 60%) 0%, hsl(\${hue + 60}, 70%, 50%) 100%)\`;
    });
    
    // Add some initial animation
    setTimeout(() => {
        output.innerHTML = '<p>Ready to start coding! Click the button above.</p>';
    }, 1000);
    
    console.log('Web playground loaded successfully! 🎯');
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
      setPlayground(prev => ({
        ...prev,
        html: '<h1>Hello World!</h1>\n<p>Start building your web page here.</p>',
        css: 'body {\n    font-family: Arial, sans-serif;\n    padding: 20px;\n}',
        js: 'console.log("Hello from JavaScript!");'
      }));
    }
  };

  const runCode = () => {
    generateOutput();
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'html': return <Globe className="w-4 h-4" />;
      case 'css': return <Palette className="w-4 h-4" />;
      case 'js': return <Code2 className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const getTabColor = (tab: string) => {
    switch (tab) {
      case 'html': return 'border-orange-500 text-orange-600 dark:text-orange-400';
      case 'css': return 'border-blue-500 text-blue-600 dark:text-blue-400';
      case 'js': return 'border-yellow-500 text-yellow-600 dark:text-yellow-400';
      default: return 'border-gray-500 text-gray-600 dark:text-gray-400';
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
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <button
              onClick={() => navigate('/playgrounds')}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex-shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <input
              type="text"
              value={playground.title}
              onChange={(e) => setPlayground(prev => ({ ...prev, title: e.target.value }))}
              className="text-lg font-semibold bg-transparent text-gray-900 dark:text-white border-none outline-none focus:bg-gray-50 dark:focus:bg-gray-700 px-2 py-1 rounded min-w-0 flex-1"
              placeholder="Playground title..."
            />
            
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded flex items-center flex-shrink-0">
              <Globe className="w-3 h-3 mr-1" />
              Web
            </span>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="flex space-x-2 flex-1 sm:flex-initial">
              <button
                onClick={runCode}
                className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm flex-1 sm:flex-initial"
              >
                <Play className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Run</span>
              </button>
              
              <button
                onClick={resetPlayground}
                className="flex items-center justify-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm flex-1 sm:flex-initial"
              >
                <RefreshCw className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Reset</span>
              </button>
            </div>
            
            <div className="flex space-x-2 flex-1 sm:flex-initial">
              <button
                onClick={savePlayground}
                disabled={saving || !playground.title.trim()}
                className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm flex-1 sm:flex-initial"
              >
                <Save className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">{saving ? 'Saving...' : 'Save'}</span>
              </button>
              
              <button
                onClick={downloadCode}
                className="flex items-center justify-center px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex-1 sm:flex-initial"
              >
                <Download className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editor and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-[calc(100vh-73px)]">
        {/* Left Panel - Code Editors */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex flex-col bg-white dark:bg-gray-800"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            {(['html', 'css', 'js'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  activeTab === tab
                    ? `border-b-2 ${getTabColor(tab)} bg-white dark:bg-gray-800`
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {getTabIcon(tab)}
                <span className="uppercase">{tab}</span>
              </button>
            ))}
          </div>

          {/* Code Editor */}
          <div className="flex-1 relative">
            <textarea
              value={
                activeTab === 'html' ? playground.html :
                activeTab === 'css' ? playground.css :
                playground.js
              }
              onChange={(e) => setPlayground(prev => ({
                ...prev,
                [activeTab]: e.target.value
              }))}
              className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none border-none outline-none overflow-auto"
              placeholder={`Enter ${activeTab.toUpperCase()} code here...`}
              spellCheck={false}
              style={{
                tabSize: 2,
                fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace'
              }}
            />
          </div>
        </motion.div>

        {/* Right Panel - Preview */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          {/* Preview Header */}
          <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Live Preview
              </h3>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 bg-white dark:bg-gray-800 overflow-hidden">
            <iframe
              srcDoc={output}
              className="w-full h-full border-none"
              title="Live Preview"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebPlayground;