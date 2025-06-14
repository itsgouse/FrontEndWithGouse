import { Course } from '../courses';

const csFundamentals: Course = {
  id: 'cs-fundamentals',
  title: 'CS Fundamentals',
  description: 'Core computer science concepts and web fundamentals',
  icon: 'Monitor',
  color: 'bg-blue-500',
  estimatedHours: 8,
  totalLessons: 6,
  sections: [
    {
      id: 'basics',
      title: 'Section 1: Basics',
      level: 'basic',
      lessons: [
        {
          id: 'general-cs',
          title: 'General CS Concepts',
          duration: '45 min',
          content: `
# General CS Concepts

## What is a Computer?
A computer is an electronic device that processes data according to a set of instructions called a program. It consists of hardware (physical components) and software (programs and applications).

### Key Components:
- **CPU (Central Processing Unit)**: The brain of the computer
- **Memory (RAM)**: Temporary storage for active programs
- **Storage**: Permanent data storage (hard drives, SSDs)
- **Input/Output devices**: Keyboard, mouse, monitor, etc.

## What is the Internet?
The Internet is a global network of interconnected computers that communicate using standardized protocols. It's a network of networks that allows devices worldwide to share information.

### Key Facts:
- Started as ARPANET in the 1960s
- Uses TCP/IP protocol suite
- Connects billions of devices globally
- Enables services like email, web browsing, file sharing

## How the Web Works?
The World Wide Web (WWW) is a system of interlinked hypertext documents accessed via the Internet using web browsers.

### Web Components:
1. **Web Browsers**: Software that displays web pages (Chrome, Firefox, Safari)
2. **Web Servers**: Computers that store and serve web pages
3. **URLs**: Unique addresses for web resources
4. **HTTP/HTTPS**: Protocols for transferring web data

## Client vs Server
Understanding the client-server model is fundamental to web development.

### Client:
- Requests services or resources
- Usually a web browser or mobile app
- Initiates communication
- Displays user interface

### Server:
- Provides services or resources
- Responds to client requests
- Stores and processes data
- Runs server-side applications

## Lifecycle of an HTTP Request
When you visit a website, here's what happens:

1. **DNS Resolution**: Browser looks up the IP address of the domain
2. **TCP Connection**: Browser establishes connection with server
3. **HTTP Request**: Browser sends request for specific resource
4. **Server Processing**: Server processes the request
5. **HTTP Response**: Server sends back the requested data
6. **Rendering**: Browser displays the content to user

## Frontend vs Backend Overview

### Frontend (Client-side):
- What users see and interact with
- Technologies: HTML, CSS, JavaScript, React, Vue, Angular
- Runs in the user's browser
- Handles user interface and user experience

### Backend (Server-side):
- Server logic and database operations
- Technologies: Node.js, Python, Java, PHP, databases
- Runs on servers
- Handles data processing, authentication, business logic

Understanding these concepts provides the foundation for all web development work!
          `
        },
        {
          id: 'web-fundamentals',
          title: 'Web Fundamentals',
          duration: '50 min',
          content: `
# Web Fundamentals

## Browser Architecture & Rendering Engines

### Browser Components:
1. **User Interface**: Address bar, bookmarks, back/forward buttons
2. **Browser Engine**: Interface between UI and rendering engine
3. **Rendering Engine**: Displays requested content
4. **Networking**: Handles HTTP requests and responses
5. **JavaScript Engine**: Executes JavaScript code
6. **UI Backend**: Draws basic widgets
7. **Data Storage**: Manages cookies, localStorage, etc.

### Popular Rendering Engines:
- **Blink**: Used by Chrome, Edge, Opera
- **WebKit**: Used by Safari
- **Gecko**: Used by Firefox

## DNS, IP, and Domain Resolution

### Domain Name System (DNS):
DNS translates human-readable domain names into IP addresses that computers use to identify each other.

### Process:
1. User types www.example.com
2. Browser checks local DNS cache
3. If not found, queries DNS resolver
4. DNS resolver queries root nameservers
5. Root nameserver directs to TLD nameserver (.com)
6. TLD nameserver directs to authoritative nameserver
7. Authoritative nameserver returns IP address
8. Browser connects to the IP address

### IP Addresses:
- **IPv4**: 32-bit addresses (e.g., 192.168.1.1)
- **IPv6**: 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)

## URL Anatomy

A URL (Uniform Resource Locator) has several components:

\`\`\`
https://www.example.com:443/path/to/page?query=value&param=data#section
\`\`\`

### Components:
1. **Protocol**: https:// (how to access the resource)
2. **Subdomain**: www (optional)
3. **Domain**: example.com (identifies the website)
4. **Port**: :443 (optional, defaults based on protocol)
5. **Path**: /path/to/page (specific resource location)
6. **Query String**: ?query=value&param=data (parameters)
7. **Fragment**: #section (specific part of the page)

## HTTP vs HTTPS

### HTTP (HyperText Transfer Protocol):
- Unencrypted communication
- Default port: 80
- Data sent in plain text
- Vulnerable to eavesdropping

### HTTPS (HTTP Secure):
- Encrypted communication using SSL/TLS
- Default port: 443
- Data encrypted in transit
- Provides authentication and data integrity
- Required for modern web applications

### SSL/TLS Handshake:
1. Client hello (supported cipher suites)
2. Server hello (chosen cipher suite)
3. Server sends certificate
4. Key exchange
5. Encrypted communication begins

## Request-Response Cycle

### HTTP Request Structure:
\`\`\`
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0...
Accept: application/json
Authorization: Bearer token123
\`\`\`

### HTTP Response Structure:
\`\`\`
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234
Set-Cookie: sessionId=abc123

{"users": [...]}
\`\`\`

### Common HTTP Methods:
- **GET**: Retrieve data
- **POST**: Create new resource
- **PUT**: Update entire resource
- **PATCH**: Partial update
- **DELETE**: Remove resource
- **HEAD**: Get headers only
- **OPTIONS**: Get allowed methods

### HTTP Status Codes:
- **1xx**: Informational
- **2xx**: Success (200 OK, 201 Created)
- **3xx**: Redirection (301 Moved, 304 Not Modified)
- **4xx**: Client Error (400 Bad Request, 404 Not Found, 401 Unauthorized)
- **5xx**: Server Error (500 Internal Server Error, 503 Service Unavailable)

These fundamentals form the backbone of how the web operates and are essential for any web developer to understand!
          `
        }
      ],
      quiz: {
        id: 'basics-quiz',
        title: 'Web Fundamentals Quiz',
        questions: [
          {
            id: 'q1',
            question: 'What does DNS stand for?',
            options: [
              'Domain Name System',
              'Dynamic Network Service',
              'Digital Name Server',
              'Distributed Network System'
            ],
            correctAnswer: 0
          },
          {
            id: 'q2',
            question: 'Which HTTP status code indicates a successful request?',
            options: ['404', '500', '200', '301'],
            correctAnswer: 2
          },
          {
            id: 'q3',
            question: 'What is the default port for HTTPS?',
            options: ['80', '443', '8080', '3000'],
            correctAnswer: 1
          },
          {
            id: 'q4',
            question: 'Which rendering engine is used by Chrome?',
            options: ['WebKit', 'Gecko', 'Blink', 'Trident'],
            correctAnswer: 2
          },
          {
            id: 'q5',
            question: 'What does the client do in a client-server model?',
            options: [
              'Stores data permanently',
              'Requests services or resources',
              'Processes server logic',
              'Manages databases'
            ],
            correctAnswer: 1
          }
        ]
      }
    }
  ]
};

export default csFundamentals;