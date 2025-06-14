import { Course } from '../courses';

const systemDesign: Course = {
  id: 'system-design',
  title: 'System Design (Frontend)',
  description: 'Learn to design scalable frontend architectures',
  icon: 'Network',
  color: 'bg-indigo-500',
  estimatedHours: 25,
  totalLessons: 20,
  sections: [
    {
      id: 'frontend-architecture',
      title: 'Frontend Architecture',
      level: 'advanced',
      lessons: [
        {
          id: 'architecture-intro',
          title: 'Introduction to Frontend System Design',
          duration: '60 min',
          content: `
# Introduction to Frontend System Design

## What is Frontend System Design?
Frontend system design involves architecting scalable, maintainable, and performant client-side applications that can handle large amounts of data and users.

## Key Principles

### 1. Scalability
Design systems that can grow with user demand and feature requirements.

### 2. Performance
Optimize for fast loading times, smooth interactions, and efficient resource usage.

### 3. Maintainability
Create code that's easy to understand, modify, and extend.

### 4. Reliability
Build robust systems that handle errors gracefully and provide consistent user experiences.

## Frontend Architecture Patterns

### Component-Based Architecture
\`\`\`javascript
// Atomic Design Pattern
// Atoms - Basic building blocks
const Button = ({ children, onClick, variant }) => (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
        {children}
    </button>
);

// Molecules - Groups of atoms
const SearchBox = ({ onSearch }) => (
    <div className="search-box">
        <input type="text" placeholder="Search..." />
        <Button variant="primary" onClick={onSearch}>
            Search
        </Button>
    </div>
);

// Organisms - Groups of molecules
const Header = ({ user, onSearch, onLogout }) => (
    <header className="header">
        <Logo />
        <SearchBox onSearch={onSearch} />
        <UserMenu user={user} onLogout={onLogout} />
    </header>
);
\`\`\`

### State Management Patterns
\`\`\`javascript
// Flux/Redux Pattern
const initialState = {
    users: [],
    loading: false,
    error: null
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USERS_START':
            return { ...state, loading: true };
        case 'FETCH_USERS_SUCCESS':
            return { ...state, users: action.payload, loading: false };
        case 'FETCH_USERS_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

// Context API for smaller applications
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await api.getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <UserContext.Provider value={{ users, loading, fetchUsers }}>
            {children}
        </UserContext.Provider>
    );
};
\`\`\`

## Performance Optimization

### Code Splitting
\`\`\`javascript
// Route-based code splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
\`\`\`

### Memoization
\`\`\`javascript
// React.memo for component memoization
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
    const processedData = useMemo(() => {
        return data.map(item => ({
            ...item,
            processed: expensiveCalculation(item)
        }));
    }, [data]);
    
    const handleClick = useCallback((id) => {
        onUpdate(id);
    }, [onUpdate]);
    
    return (
        <div>
            {processedData.map(item => (
                <Item 
                    key={item.id} 
                    data={item} 
                    onClick={handleClick}
                />
            ))}
        </div>
    );
});
\`\`\`

### Virtual Scrolling
\`\`\`javascript
// Virtual scrolling for large lists
const VirtualList = ({ items, itemHeight, containerHeight }) => {
    const [scrollTop, setScrollTop] = useState(0);
    
    const visibleStart = Math.floor(scrollTop / itemHeight);
    const visibleEnd = Math.min(
        visibleStart + Math.ceil(containerHeight / itemHeight),
        items.length
    );
    
    const visibleItems = items.slice(visibleStart, visibleEnd);
    
    return (
        <div 
            style={{ height: containerHeight, overflow: 'auto' }}
            onScroll={(e) => setScrollTop(e.target.scrollTop)}
        >
            <div style={{ height: items.length * itemHeight, position: 'relative' }}>
                {visibleItems.map((item, index) => (
                    <div
                        key={visibleStart + index}
                        style={{
                            position: 'absolute',
                            top: (visibleStart + index) * itemHeight,
                            height: itemHeight,
                            width: '100%'
                        }}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};
\`\`\`

## Caching Strategies

### Browser Caching
\`\`\`javascript
// Service Worker for caching
self.addEventListener('fetch', (event) => {
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.open('images').then(cache => {
                return cache.match(event.request).then(response => {
                    return response || fetch(event.request).then(fetchResponse => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            })
        );
    }
});
\`\`\`

### Application-Level Caching
\`\`\`javascript
// Simple cache implementation
class Cache {
    constructor(maxSize = 100) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }
    
    get(key) {
        if (this.cache.has(key)) {
            // Move to end (LRU)
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return null;
    }
    
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.maxSize) {
            // Remove oldest entry
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}
\`\`\`

Frontend system design is crucial for building applications that can scale and provide excellent user experiences!
          `
        }
      ]
    }
  ]
};

export default systemDesign;