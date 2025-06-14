import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, Play, ArrowLeft, Download, Share2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

const PlaygroundView: React.FC = () => {
  const { type, lessonId } = useParams<{ type: string; lessonId?: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isNewPlayground, setIsNewPlayground] = useState(true);

  useEffect(() => {
    if (lessonId && lessonId !== 'new') {
      loadPlayground();
    } else {
      setDefaultCode();
    }
  }, [type, lessonId]);

  const loadPlayground = async () => {
    if (!currentUser || !lessonId) return;

    try {
      setLoading(true);
      const docRef = doc(db, 'playgrounds', lessonId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCode(data.code || '');
        setTitle(data.title || '');
        setIsNewPlayground(false);
      } else {
        setDefaultCode();
      }
    } catch (error) {
      console.error('Error loading playground:', error);
    } finally {
      setLoading(false);
    }
  };

  const setDefaultCode = () => {
    const defaultCodes = {
      javascript: `// Welcome to JavaScript Playground
console.log('Hello, World!');

// Try some JavaScript code here
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Doubled numbers:', doubled);

// Function example
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Developer'));`,

      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Playground</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .highlight {
            background-color: #f0f8ff;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML Playground</h1>
    <p>This is a sample HTML document. Try editing the code!</p>
    
    <div class="highlight">
        <h2>Features to try:</h2>
        <ul>
            <li>Add more HTML elements</li>
            <li>Modify the CSS styles</li>
            <li>Create forms and interactive elements</li>
        </ul>
    </div>
    
    <button onclick="alert('Hello from HTML!')">Click me!</button>
</body>
</html>`,

      css: `/* Welcome to CSS Playground */
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 500px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5em;
}

.button {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
}

/* Try modifying these styles! */`,

      react: `import React, { useState } from 'react';

// Welcome to React Playground
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1>React Playground</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>

      <div>
        <h2>Input Example</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            padding: '10px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        {name && <p>Hello, {name}!</p>}
      </div>
    </div>
  );
}

export default App;`
    };

    setCode(defaultCodes[type as keyof typeof defaultCodes] || '// Start coding here...');
    setTitle(`New ${type?.charAt(0).toUpperCase()}${type?.slice(1)} Playground`);
  };

  const runCode = () => {
    if (type === 'javascript') {
      try {
        // Capture console.log output
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        };

        // Execute the code
        eval(code);
        
        // Restore console.log
        console.log = originalLog;
        
        setOutput(logs.join('\n') || 'Code executed successfully (no output)');
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
    } else if (type === 'html' || type === 'css') {
      setOutput(code);
    } else if (type === 'react') {
      setOutput('React code preview not available in this playground. Use a proper React environment.');
    }
  };

  const savePlayground = async () => {
    if (!currentUser || !title.trim()) return;

    try {
      setSaving(true);
      const playgroundData = {
        userId: currentUser.uid,
        type,
        title: title.trim(),
        code,
        updatedAt: new Date(),
        ...(isNewPlayground && { createdAt: new Date() })
      };

      if (isNewPlayground) {
        const docRef = await addDoc(collection(db, 'playgrounds'), playgroundData);
        navigate(`/playground/${type}/${docRef.id}`, { replace: true });
        setIsNewPlayground(false);
      } else if (lessonId) {
        await updateDoc(doc(db, 'playgrounds', lessonId), playgroundData);
      }
    } catch (error) {
      console.error('Error saving playground:', error);
    } finally {
      setSaving(false);
    }
  };

  const downloadCode = () => {
    const extensions = {
      javascript: 'js',
      html: 'html',
      css: 'css',
      react: 'jsx'
    };

    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/\s+/g, '_')}.${extensions[type as keyof typeof extensions]}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-semibold bg-transparent text-gray-900 dark:text-white border-none outline-none focus:bg-gray-50 dark:focus:bg-gray-700 px-2 py-1 rounded"
              placeholder="Playground title..."
            />
            
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded capitalize">
              {type}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={runCode}
              className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Play className="w-4 h-4 mr-2" />
              Run
            </button>
            
            <button
              onClick={savePlayground}
              disabled={saving || !title.trim()}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
            
            <button
              onClick={downloadCode}
              className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Editor and Output */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Code Editor</h3>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-none border-none outline-none"
            placeholder="Start coding here..."
            spellCheck={false}
          />
        </div>

        {/* Output Panel */}
        <div className="flex-1 flex flex-col border-l border-gray-200 dark:border-gray-700">
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Output</h3>
          </div>
          <div className="flex-1 p-4 bg-white dark:bg-gray-800 overflow-auto">
            {type === 'html' || type === 'css' ? (
              <iframe
                srcDoc={output}
                className="w-full h-full border-none"
                title="HTML/CSS Output"
              />
            ) : (
              <pre className="text-sm text-gray-900 dark:text-white font-mono whitespace-pre-wrap">
                {output || 'Click "Run" to see output...'}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundView;