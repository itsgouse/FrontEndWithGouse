import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, Play, ArrowLeft, Download, RefreshCw } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface ReactPlaygroundData {
  id?: string;
  title: string;
  code: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReactPlayground: React.FC = () => {
  const { snippetId } = useParams<{ snippetId?: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [playground, setPlayground] = useState<ReactPlaygroundData>({
    title: 'New React Playground',
    code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build awesome apps', completed: false }
  ]);

  const addTodo = () => {
    if (name.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: name,
        completed: false
      }]);
      setName('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        React Playground
      </h1>
      
      {/* Counter Section */}
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2>Counter Example</h2>
        <p style={{ fontSize: '24px', margin: '10px 0' }}>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Reset
        </button>
      </div>

      {/* Todo Section */}
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px'
      }}>
        <h2>Todo List</h2>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new todo..."
            style={{
              padding: '10px',
              marginRight: '10px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              width: '200px'
            }}
          />
          <button
            onClick={addTodo}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Add Todo
          </button>
        </div>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li 
              key={todo.id}
              style={{
                padding: '10px',
                margin: '5px 0',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: '10px' }}
              />
              <span style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.6 : 1
              }}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;`
  });
  
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (snippetId && snippetId !== 'new') {
      loadPlayground();
    }
  }, [snippetId]);

  const loadPlayground = async () => {
    if (!currentUser || !snippetId) return;

    try {
      setLoading(true);
      const docRef = doc(db, 'users', currentUser.uid, 'playgrounds', 'react', 'snippets', snippetId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setPlayground({
          id: snippetId,
          title: data.title || 'Untitled React Playground',
          code: data.code || '',
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        });
      }
    } catch (error) {
      console.error('Error loading playground:', error);
      setError('Failed to load playground');
    } finally {
      setLoading(false);
    }
  };

  const savePlayground = async () => {
    if (!currentUser || !playground.title.trim()) return;

    try {
      setSaving(true);
      const playgroundData = {
        title: playground.title.trim(),
        code: playground.code,
        updatedAt: new Date(),
        ...((!playground.id || playground.id === 'new') && { createdAt: new Date() })
      };

      if (!playground.id || playground.id === 'new') {
        const docRef = await addDoc(
          collection(db, 'users', currentUser.uid, 'playgrounds', 'react', 'snippets'),
          playgroundData
        );
        setPlayground(prev => ({ ...prev, id: docRef.id }));
        navigate(`/playgrounds/react/${docRef.id}`, { replace: true });
      } else {
        await updateDoc(
          doc(db, 'users', currentUser.uid, 'playgrounds', 'react', 'snippets', playground.id),
          playgroundData
        );
      }
    } catch (error) {
      console.error('Error saving playground:', error);
      setError('Failed to save playground');
    } finally {
      setSaving(false);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([playground.code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${playground.title.replace(/\s+/g, '_')}.jsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetPlayground = () => {
    if (window.confirm('Are you sure you want to reset the playground? This will clear all your code.')) {
      setPlayground(prev => ({
        ...prev,
        code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Playground</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;`
      }));
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
            
            <span className="px-2 py-1 text-xs bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded">
              React
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

      {error && (
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3">
          {error}
        </div>
      )}

      {/* Editor and Preview */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Code Editor */}
        <div className="w-1/2 flex flex-col">
          <div className="bg-cyan-100 dark:bg-cyan-900/20 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-sm font-medium text-cyan-800 dark:text-cyan-300">React Code (JSX)</h3>
          </div>
          <textarea
            value={playground.code}
            onChange={(e) => setPlayground(prev => ({ ...prev, code: e.target.value }))}
            className="flex-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-none border-none outline-none"
            placeholder="Enter React code here..."
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div className="w-1/2 flex flex-col border-l border-gray-200 dark:border-gray-700">
          <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</h3>
          </div>
          <div className="flex-1 p-4 bg-white dark:bg-gray-800 overflow-auto">
            <div className="text-center py-8">
              <Play className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                React Preview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                React code preview requires a proper React environment with compilation.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Download your code and run it in a React development environment to see the live preview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactPlayground;