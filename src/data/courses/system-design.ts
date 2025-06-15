import { Course } from '../courses'; // Assuming you have this interface

const frontEndSystemDesignCourse: Course = {
  id: 'front-end-system-design',
  title: 'Front-End System Design',
  description: 'A comprehensive curriculum for Front-End System Design, from foundational concepts to advanced architectural patterns and best practices.',
  icon: 'Code', // Example icon for tech/design
  color: 'bg-indigo-700', // A strong, professional color
  estimatedHours: 60, // Estimated based on content depth
  totalLessons: 31, // Total lessons across all sections
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: Basics (Foundational Concepts)',
      level: 'basic',
      lessons: [
        {
          id: 'lesson-1-intro',
          title: 'Introduction to Front-End System Design',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is Front-End System Design? Scope and Importance',
              description: 'Defining front-end system design and its unique considerations compared to backend or general system design.',
              codeLessons: []
            },
            {
              title: 'Differentiating Front-End System Design from Backend/General System Design',
              description: 'Understanding the specific challenges and focus areas for front-end architecture.',
              codeLessons: []
            },
            {
              title: 'Key Considerations: User Experience, Performance, Scalability, Maintainability, Security',
              description: 'An overview of the critical pillars of good front-end system design.',
              codeLessons: []
            },
            {
              title: 'The Role of a Front-End Architect/Lead Engineer',
              description: 'Exploring the responsibilities and impact of this crucial role.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-core-principles',
          title: 'Core Principles: Scalability, Maintainability, Performance, Security, Accessibility',
          duration: '60 min',
          subtopics: [
            {
              title: 'Scalability: Horizontal vs. Vertical scaling in FE context, component reusability',
              description: 'Understanding how to design front-end applications that can grow and handle increased load.',
              codeLessons: []
            },
            {
              title: 'Maintainability: Code organization, modularity, readability, documentation',
              description: 'Strategies for writing code that is easy to understand, modify, and extend.',
              codeLessons: []
            },
            {
              title: 'Performance: Perceived vs. Actual, loading speed, responsiveness',
              description: 'Techniques for ensuring fast and fluid user experiences.',
              codeLessons: []
            },
            {
              title: 'Security: Common FE vulnerabilities (XSS, CSRF, etc.) and mitigation',
              description: 'Protecting front-end applications from common attack vectors.',
              codeLessons: []
            },
            {
              title: 'Accessibility (A11y): WCAG principles, inclusive design from the start',
              description: 'Designing and building inclusive web experiences for all users.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-framework-choice',
          title: 'Choosing a Framework/Library',
          duration: '45 min',
          subtopics: [
            {
              title: 'Overview of major Front-End Frameworks/Libraries: React, Vue, Angular, Svelte',
              description: 'A brief look at the most popular choices in the front-end landscape.',
              codeLessons: []
            },
            {
              title: 'Factors influencing choice: Team expertise, ecosystem, community support, performance characteristics, bundle size, specific project needs',
              description: 'Key criteria to consider when making framework decisions.',
              codeLessons: []
            },
            {
              title: 'Understanding framework philosophies (e.g., declarative vs. imperative, opinionated vs. unopinionated)',
              description: 'Delving into the underlying design principles of different frameworks.',
              codeLessons: []
            },
            {
              title: 'Build tools and ecosystems associated with each',
              description: 'Exploring the tooling that accompanies various front-end frameworks.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-4-component-architecture',
          title: 'Component-Based Architecture',
          duration: '45 min',
          subtopics: [
            {
              title: 'Principles of Component-Based UI: Encapsulation, Reusability, Composition',
              description: 'The fundamental ideas behind building UIs with components.',
              codeLessons: []
            },
            {
              title: 'Atomic Design Methodology (Atoms, Molecules, Organisms, Templates, Pages)',
              description: 'A structured approach to designing and building UI components.',
              codeLessons: []
            },
            {
              title: 'Smart/Container vs. Dumb/Presentational Components',
              description: 'Distinguishing between components responsible for logic and those for presentation.',
              codeLessons: []
            },
            {
              title: 'Designing component APIs (Props, Events, Slots)',
              description: 'How to define clear interfaces for component interaction.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-5-state-management-fundamentals',
          title: 'State Management Fundamentals',
          duration: '45 min',
          subtopics: [
            {
              title: 'Local Component State (useState in React, data in Vue, component state in Angular)',
              description: 'Managing data within individual components.',
              codeLessons: []
            },
            {
              title: 'Global State vs. Component State',
              description: 'Deciding where to store and manage application data.',
              codeLessons: []
            },
            {
              title: 'Context API (React) / Provide/Inject (Vue) / Services (Angular) for simple global state',
              description: 'Built-in mechanisms for sharing state across components.',
              codeLessons: []
            },
            {
              title: 'When to use which approach',
              description: 'Guidance on selecting the appropriate state management strategy.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-6-data-flow-patterns',
          title: 'Data Flow Patterns',
          duration: '45 min',
          subtopics: [
            {
              title: 'Unidirectional Data Flow (e.g., React\'s philosophy, Flux/Redux pattern concepts)',
              description: 'Understanding data flow in a single direction for predictability.',
              codeLessons: []
            },
            {
              title: 'Bidirectional Data Flow (e.g., Two-way data binding in older Angular/Vue)',
              description: 'Exploring two-way data binding and its implications.',
              codeLessons: []
            },
            {
              title: 'Pros and Cons of each pattern for maintainability and debugging',
              description: 'Evaluating the benefits and drawbacks of different data flow approaches.',
              codeLessons: []
            },
            {
              title: 'Event Propagation and Handling in Data Flow',
              description: 'How events contribute to data flow within an application.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-7-module-bundling',
          title: 'Module Systems & Bundling',
          duration: '45 min',
          subtopics: [
            {
              title: 'Evolution of JavaScript Modules: IIFE, CommonJS, AMD, ES Modules (ESM)',
              description: 'A historical overview of JavaScript module systems.',
              codeLessons: []
            },
            {
              title: 'Role of a Bundler (Webpack, Rollup, Vite, Parcel): Dependency graph, tree-shaking, code splitting',
              description: 'Understanding how bundlers optimize and package code for the browser.',
              codeLessons: []
            },
            {
              title: 'Transpilers (Babel): Why they are needed (ES6+ to ES5 for browser compatibility)',
              description: 'The role of transpilers in enabling modern JavaScript syntax.',
              codeLessons: []
            },
            {
              title: 'Basic configuration concepts for a bundler (entry, output, loaders/plugins)',
              description: 'An introduction to setting up common bundler configurations.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-8-basic-performance',
          title: 'Basic Performance Metrics & Optimization',
          duration: '45 min',
          subtopics: [
            {
              title: 'Key Performance Metrics: FCP, LCP, TTI, TBT, CLS',
              description: 'Understanding essential metrics for measuring web performance.',
              codeLessons: []
            },
            {
              title: 'Optimizing Initial Load: Minification, Compression (Gzip/Brotli), Caching',
              description: 'Techniques to make your web pages load faster initially.',
              codeLessons: []
            },
            {
              title: 'Asset Delivery: CDNs (Content Delivery Networks) - conceptual role',
              description: 'The role of CDNs in efficient asset delivery.',
              codeLessons: []
            },
            {
              title: 'Image Optimization (Lazy loading, responsive images)',
              description: 'Strategies for serving optimized images.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-9-version-control',
          title: 'Version Control & Collaboration',
          duration: '45 min',
          subtopics: [
            {
              title: 'Git Fundamentals (Branching, Merging, Committing)',
              description: 'The core concepts of Git for version control.',
              codeLessons: []
            },
            {
              title: 'Git Workflow Strategies: GitFlow, GitHub Flow, GitLab Flow',
              description: 'Different approaches to managing code with Git in teams.',
              codeLessons: []
            },
            {
              title: 'Code Review Best Practices',
              description: 'Tips for effective code reviews to ensure quality and knowledge sharing.',
              codeLessons: []
            },
            {
              title: 'Importance of clear commit messages and PR descriptions',
              description: 'Writing descriptive commits and pull requests for better collaboration.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-1-quiz',
        title: 'Quiz: Foundational Concepts in Front-End System Design',
        questions: [
          {
            id: 's1q1',
            question: 'Which of the following is NOT a key consideration in Front-End System Design?',
            options: ['User Experience', 'Database Sharding Strategy', 'Performance', 'Maintainability'],
            correctAnswer: 1
          },
          {
            id: 's1q2',
            question: 'What is the primary benefit of component reusability in a front-end system?',
            options: ['Increased bundle size', 'Reduced development time', 'More complex state management', 'Slower initial load'],
            correctAnswer: 1
          },
          {
            id: 's1q3',
            question: 'Which tool is primarily responsible for converting modern JavaScript (ES6+) into backward-compatible JavaScript (ES5) for older browsers?',
            options: ['Webpack', 'Babel', 'ESLint', 'Prettier'],
            correctAnswer: 1
          },
        ]
      },
      projects: [
        {
          id: 'section-1-project-1',
          title: 'Project 1: Product Idea Considerations',
          description: 'Given a small product idea (e.g., a simple blog or a to-do app), list 3-5 key front-end system design considerations.',
          checkpoint: 'Articulate the core purpose and importance of front-end system design.'
        },
        {
          id: 'section-1-project-2',
          title: 'Project 2: User Profile Page Principles',
          description: 'For a "User Profile Page," list design decisions you\'d make to ensure it\'s performant, maintainable, and accessible.',
          checkpoint: 'Describe how each principle impacts the design and development of a front-end system.'
        },
        {
          id: 'section-1-project-3',
          title: 'Project 3: Justifying Framework Choice',
          description: 'Given a hypothetical project (e.g., a complex data dashboard vs. a simple marketing site), justify your choice of a front-end framework/library.',
          checkpoint: 'Provide a reasoned argument for framework selection based on project requirements.'
        },
        {
          id: 'section-1-project-4',
          title: 'Project 4: Atomic Design Breakdown',
          description: 'Break down a complex UI section (e.g., a product listing with filters and pagination) into a hierarchy of components using Atomic Design.',
          checkpoint: 'Components are logically organized and designed for reusability.'
        },
        {
          id: 'section-1-project-5',
          title: 'Project 5: Shopping Cart State Management',
          description: 'Design the state management for a "shopping cart" feature, outlining what data lives where (component vs. global/context).',
          checkpoint: 'Understand the different levels of state management and their appropriate use cases.'
        },
        {
          id: 'section-1-project-6',
          title: 'Project 6: User Authentication Data Flow',
          description: 'Sketch a data flow diagram for a user authentication process (login form -> API call -> update user state).',
          checkpoint: 'Articulate the chosen data flow pattern and its implications for complexity.'
        },
        {
          id: 'section-1-project-7',
          title: 'Project 7: Basic Bundler Configuration',
          description: '(Conceptual) Outline the basic webpack.config.js or vite.config.js for a simple React/Vue app, including an entry point, output, and a Babel loader.',
          checkpoint: 'Understand how source code is transformed and bundled for browser execution.'
        },
        {
          id: 'section-1-project-8',
          title: 'Project 8: Initial Load Optimization',
          description: 'Given a slow-loading webpage, propose 3-5 specific initial load optimization techniques.',
          checkpoint: 'Identify and propose basic solutions for improving front-end loading performance.'
        },
        {
          id: 'section-1-project-9',
          title: 'Project 9: Git Branching Strategy',
          description: '(Conceptual) Outline a Git branching strategy for a team of 5 front-end developers working on a new feature.',
          checkpoint: 'Understand and apply best practices for collaborative version control.'
        }
      ]
    },
    {
      id: 'section-2-medium',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 'lesson-2-1-advanced-state-management',
          title: 'Advanced State Management Strategies',
          duration: '60 min',
          subtopics: [
            {
              title: 'Dedicated State Management Libraries: Redux (Flux pattern), MobX (Reactive programming), Zustand, Vuex (for Vue)',
              description: 'Exploring popular and powerful libraries for managing complex application state.',
              codeLessons: []
            },
            {
              title: 'When to use a dedicated library vs. Context API',
              description: 'Making informed decisions on state management based on application scale.',
              codeLessons: []
            },
            {
              title: 'Asynchronous actions and middleware (Redux Thunk, Redux Saga concepts)',
              description: 'Handling asynchronous operations within state management.',
              codeLessons: []
            },
            {
              title: 'State normalization and denormalization strategies',
              description: 'Techniques for organizing data efficiently in the store.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-2-data-fetching-caching',
          title: 'Data Fetching and Caching Strategies',
          duration: '60 min',
          subtopics: [
            {
              title: 'REST API Design Principles (conceptual for consumption)',
              description: 'Understanding how REST APIs are structured from a consumer perspective.',
              codeLessons: []
            },
            {
              title: 'GraphQL: Queries, Mutations, Subscriptions (conceptual for consumption)',
              description: 'An introduction to GraphQL for flexible data fetching.',
              codeLessons: []
            },
            {
              title: 'Client-side Caching: HTTP caching, in-memory caching, specialized libraries (React Query, SWR, Apollo Client)',
              description: 'Strategies for efficiently managing data on the client side.',
              codeLessons: []
            },
            {
              title: 'Optimistic UI updates',
              description: 'Improving user experience by showing immediate feedback before server confirmation.',
              codeLessons: []
            },
            {
              title: 'Handling data invalidation and re-fetching',
              description: 'Ensuring data freshness and consistency.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-3-routing-architectures',
          title: 'Routing Architectures',
          duration: '45 min',
          subtopics: [
            {
              title: 'Client-Side Routing (CSR): react-router-dom, vue-router, Angular Router',
              description: 'Implementing routing entirely within the browser.',
              codeLessons: []
            },
            {
              title: 'Server-Side Routing (SSR): Frameworks like Next.js, Remix, Nuxt.js',
              description: 'Generating HTML on the server for initial page loads.',
              codeLessons: []
            },
            {
              title: 'Universal/Hybrid Routing: Combining CSR and SSR',
              description: 'Leveraging the best of both client-side and server-side routing.',
              codeLessons: []
            },
            {
              title: 'Dynamic Routing, Nested Routes, Protected Routes',
              description: 'Advanced routing patterns for complex applications.',
              codeLessons: []
            },
            {
              title: 'Code Splitting based on routes',
              description: 'Optimizing bundle size by loading code only when needed.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-4-testing-strategies',
          title: 'Testing Strategies',
          duration: '60 min',
          subtopics: [
            {
              title: 'Unit Testing: Jest, Vitest, Enzyme (React), Vue Test Utils (Vue), Karma/Jasmine (Angular)',
              description: 'Testing individual functions or components in isolation.',
              codeLessons: []
            },
            {
              title: 'Integration Testing: React Testing Library, Cypress (component testing)',
              description: 'Testing the interaction between multiple components or units.',
              codeLessons: []
            },
            {
              title: 'End-to-End (E2E) Testing: Cypress, Playwright, Selenium',
              description: 'Simulating user interactions across the entire application flow.',
              codeLessons: []
            },
            {
              title: 'Snapshot Testing',
              description: 'Capturing UI snapshots to detect unexpected changes.',
              codeLessons: []
            },
            {
              title: 'Test Pyramid vs. Testing Trophy',
              description: 'Different philosophies on balancing various test types.',
              codeLessons: []
            },
            {
              title: 'Mocking and Stubbing dependencies',
              description: 'Isolating tests by replacing external dependencies.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-5-i18n-l10n',
          title: 'Internationalization (i18n) and Localization (l10n)',
          duration: '45 min',
          subtopics: [
            {
              title: 'Concepts: Translation, pluralization, date/time formatting, currency formatting',
              description: 'The key elements of making an application adaptable to different languages and regions.',
              codeLessons: []
            },
            {
              title: 'Storing and managing translations (JSON files, Translation Management Systems - TMS)',
              description: 'Strategies for handling translation content.',
              codeLessons: []
            },
            {
              title: 'Framework-specific i18n libraries (react-i18next, vue-i18n, Angular i18n)',
              description: 'Tools for implementing i18n in popular frameworks.',
              codeLessons: []
            },
            {
              title: 'Right-to-Left (RTL) support and logical CSS properties',
              description: 'Designing for languages that read from right to left.',
              codeLessons: []
            },
            {
              title: 'Handling dynamic content translation',
              description: 'Translating content that changes or is user-generated.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-6-theming-styling',
          title: 'Theming and Styling Architectures',
          duration: '60 min',
          subtopics: [
            {
              title: 'CSS-in-JS (Styled Components, Emotion): Pros and Cons, runtime vs. build-time',
              description: 'Integrating CSS directly into JavaScript components.',
              codeLessons: []
            },
            {
              title: 'CSS Modules: Scoped CSS, local class names',
              description: 'Encapsulating styles to prevent conflicts.',
              codeLessons: []
            },
            {
              title: 'Utility-first CSS (Tailwind CSS): Atomic classes, rapid development, maintainability',
              description: 'Building UIs with low-level utility classes.',
              codeLessons: []
            },
            {
              title: 'Component-specific CSS (BEM, SMACSS)',
              description: 'Methodologies for organizing and naming CSS classes.',
              codeLessons: []
            },
            {
              title: 'Design Tokens: Abstracting design decisions (colors, spacing, typography)',
              description: 'A single source of truth for design properties.',
              codeLessons: []
            },
            {
              title: 'Dynamic theming and dark mode implementation',
              description: 'Allowing users to switch between different visual themes.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-7-build-ci-cd',
          title: 'Build Process & CI/CD for Front-End',
          duration: '60 min',
          subtopics: [
            {
              title: 'Linting (ESLint, Stylelint): Code quality and consistency',
              description: 'Automating code quality checks.',
              codeLessons: []
            },
            {
              title: 'Prettier: Code formatting',
              description: 'Ensuring consistent code style across a team.',
              codeLessons: []
            },
            {
              title: 'Pre-commit Hooks (Husky, lint-staged): Automating checks before commit',
              description: 'Running checks before code is committed to version control.',
              codeLessons: []
            },
            {
              title: 'Continuous Integration (CI): Automated testing, linting, building on code pushes',
              description: 'Automating the process of integrating code changes.',
              codeLessons: []
            },
            {
              title: 'Continuous Deployment (CD): Automating deployments to staging/production environments',
              description: 'Automating the release of software to various environments.',
              codeLessons: []
            },
            {
              title: 'Build Artifacts and Asset Hosting',
              description: 'Managing the output of the build process and serving assets.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-8-error-monitoring-logging',
          title: 'Error Monitoring & Logging',
          duration: '45 min',
          subtopics: [
            {
              title: 'Importance of Error Monitoring in production',
              description: 'Why tracking errors in live applications is crucial.',
              codeLessons: []
            },
            {
              title: 'Tools: Sentry, LogRocket, Datadog RUM, New Relic',
              description: 'Popular services for front-end error tracking and performance monitoring.',
              codeLessons: []
            },
            {
              title: 'Capturing client-side errors, network errors, and performance issues',
              description: 'What types of issues to monitor in a front-end application.',
              codeLessons: []
            },
            {
              title: 'Setting up alerts and dashboards',
              description: 'Configuring notifications and visualizations for monitored data.',
              codeLessons: []
            },
            {
              title: 'Logging strategies: Structured logging, contextual logging',
              description: 'Effective ways to log information for debugging and analysis.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-9-runtime-performance',
          title: 'Web Performance Optimization (Runtime Performance)',
          duration: '60 min',
          subtopics: [
            {
              title: 'JavaScript Execution Optimization: Debouncing, Throttling, requestAnimationFrame, Web Workers',
              description: 'Techniques for improving the efficiency of JavaScript execution.',
              codeLessons: []
            },
            {
              title: 'Rendering Optimization: Avoiding layout thrashing, will-change, CSS containment',
              description: 'Strategies for smooth and efficient rendering of UI.',
              codeLessons: []
            },
            {
              title: 'Memory Management: Avoiding memory leaks in JS applications',
              description: 'Preventing memory issues that can degrade application performance.',
              codeLessons: []
            },
            {
              title: 'Network Performance: HTTP/2, HTTP/3, preloading, prefetching, DNS pre-resolve',
              description: 'Optimizing network requests for faster content delivery.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-2-10-accessibility-deep-dive',
          title: 'Accessibility Deep Dive in System Design',
          duration: '60 min',
          subtopics: [
            {
              title: 'WCAG (Web Content Accessibility Guidelines) principles: Perceivable, Operable, Understandable, Robust',
              description: 'The foundational guidelines for web accessibility.',
              codeLessons: []
            },
            {
              title: 'ARIA (Accessible Rich Internet Applications) roles, states, and properties',
              description: 'Using ARIA to enhance the accessibility of dynamic content and UI components.',
              codeLessons: []
            },
            {
              title: 'Keyboard navigation and focus management',
              description: 'Ensuring all users can interact with the application using only a keyboard.',
              codeLessons: []
            },
            {
              title: 'Screen reader compatibility',
              description: 'Designing for users who rely on screen readers.',
              codeLessons: []
            },
            {
              title: 'Accessibility in design systems: A11y guidelines for components',
              description: 'Integrating accessibility into the design system for consistent compliance.',
              codeLessons: []
            },
            {
              title: 'Automated accessibility testing tools (e.g., Lighthouse, axe-core)',
              description: 'Tools for identifying and fixing accessibility issues.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-2-quiz',
        title: 'Quiz: Real-World Front-End System Design Topics',
        questions: [
          {
            id: 's2q1',
            question: 'Which dedicated state management library follows the Flux pattern, emphasizing a unidirectional data flow?',
            options: ['MobX', 'Zustand', 'Redux', 'Vuex (for React)'],
            correctAnswer: 2
          },
          {
            id: 's2q2',
            question: 'What is the main advantage of Server-Side Rendering (SSR) for initial page load compared to Client-Side Routing (CSR)?',
            options: ['Better client-side performance after initial load', 'Improved SEO and faster First Contentful Paint (FCP)', 'Simpler state management', 'Smaller bundle sizes'],
            correctAnswer: 1
          },
          {
            id: 's2q3',
            question: 'Which type of testing focuses on testing individual functions or components in isolation?',
            options: ['Integration Testing', 'End-to-End Testing', 'Unit Testing', 'Snapshot Testing'],
            correctAnswer: 2
          },
        ]
      },
      projects: [
        {
          id: 'section-2-project-1',
          title: 'Project 1: Complex Feature State Design',
          description: '(Conceptual) For a social media feed, diagram how state changes (e.g., liking a post, adding a comment) would flow through Redux/Zustand.',
          checkpoint: 'Justify the choice of an advanced state management solution for a given application complexity.'
        },
        {
          id: 'section-2-project-2',
          title: 'Project 2: Real-time Dashboard Data Fetching',
          description: 'Design a data fetching strategy for a real-time dashboard, considering initial load, updates, and caching.',
          checkpoint: 'Select appropriate data fetching and caching strategies for various application needs.'
        },
        {
          id: 'section-2-project-3',
          title: 'Project 3: Multi-User Application Routing',
          description: 'Design the routing structure for a multi-user application with public, authenticated, and admin sections.',
          checkpoint: 'Choose and design a routing architecture that meets application requirements.'
        },
        {
          id: 'section-2-project-4',
          title: 'Project 4: Comprehensive Testing Strategy',
          description: 'Outline a comprehensive testing strategy for a new feature, specifying types of tests and tools.',
          checkpoint: 'Design a robust testing strategy for a front-end application.'
        },
        {
          id: 'section-2-project-5',
          title: 'Project 5: Multi-Language E-commerce i18n Strategy',
          description: 'Design the i18n strategy for a multi-language e-commerce site, covering product descriptions, dates, and prices.',
          checkpoint: 'Ensure the application can support multiple languages and regions.'
        },
        {
          id: 'section-2-project-6',
          title: 'Project 6: Design System Styling Architecture',
          description: 'Propose a styling architecture for a design system that needs to support multiple themes (e.g., light/dark mode, brand colors).',
          checkpoint: 'Select and justify a styling architecture appropriate for project scale and complexity.'
        },
        {
          id: 'section-2-project-7',
          title: 'Project 7: Web Application CI/CD Pipeline',
          description: '(Conceptual) Design a CI/CD pipeline for a web application, including stages for testing, linting, building, and deploying.',
          checkpoint: 'Automate the build, test, and deployment process for front-end applications.'
        },
        {
          id: 'section-2-project-8',
          title: 'Project 8: E-commerce Error Reporting Strategy',
          description: '(Conceptual) Design an error reporting strategy for an e-commerce site, including what errors to track and how to alert the team.',
          checkpoint: 'Implement robust error monitoring and logging for production applications.'
        },
        {
          id: 'section-2-project-9',
          title: 'Project 9: Runtime Performance Refactoring',
          description: 'Given a common performance anti-pattern (e.g., large synchronous calculation, frequent DOM manipulation), refactor it for better runtime performance.',
          checkpoint: 'Optimize client-side runtime performance for smooth user experiences.'
        },
        {
          id: 'section-2-project-10',
          title: 'Project 10: Accessible Component Design',
          description: 'Design an accessible component (e.g., a custom dropdown or tabbed interface), specifying its semantic HTML, ARIA attributes, and keyboard interactions.',
          checkpoint: 'Ensure all interactive components meet accessibility standards.'
        }
      ]
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced (Enterprise & Future Trends)',
      level: 'advanced',
      lessons: [
        {
          id: 'lesson-3-1-monorepos-polyrepos',
          title: 'Monorepos vs. Polyrepos for Front-End Projects',
          duration: '60 min',
          subtopics: [
            {
              title: 'Definition and Characteristics of Monorepos (e.g., Lerna, Nx) vs. Polyrepos',
              description: 'Understanding the fundamental differences between these repository structures.',
              codeLessons: []
            },
            {
              title: 'Advantages of Monorepos: Code sharing, atomic changes, consistent tooling, simplified dependency management',
              description: 'The benefits of using a monorepo for large-scale development.',
              codeLessons: []
            },
            {
              title: 'Disadvantages: Steep learning curve, tooling complexity, potential for slower builds',
              description: 'The challenges and trade-offs of adopting a monorepo.',
              codeLessons: []
            },
            {
              title: 'Strategies for structuring large monorepos',
              description: 'Best practices for organizing projects within a monorepo.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-2-micro-frontends',
          title: 'Micro-Frontends Architecture',
          duration: '90 min',
          subtopics: [
            {
              title: 'Definition and Core Principles of Micro-Frontends',
              description: 'Breaking down monolithic front-ends into smaller, independently deployable units.',
              codeLessons: []
            },
            {
              title: 'Integration Strategies: Module Federation (Webpack 5), Iframes, Web Components, Server-Side Includes, Single-SPA',
              description: 'Different ways to combine micro-frontends into a cohesive application.',
              codeLessons: []
            },
            {
              title: 'Communication between Micro-Frontends (props, custom events, shared state libs, pub-sub)',
              description: 'How independent micro-frontends can interact with each other.',
              codeLessons: []
            },
            {
              title: 'Shared Dependencies and Styling Challenges',
              description: 'Addressing common hurdles in micro-frontend development.',
              codeLessons: []
            },
            {
              title: 'Organizational benefits and challenges',
              description: 'The impact of micro-frontends on team structure and workflows.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-3-design-system-implementation',
          title: 'Designing and Implementing a Design System',
          duration: '90 min',
          subtopics: [
            {
              title: 'What is a Design System? (Components, Design Tokens, Documentation, Guidelines)',
              description: 'Defining the scope and essential elements of a design system.',
              codeLessons: []
            },
            {
              title: 'Building a Component Library (Storybook for documentation, testing, and collaboration)',
              description: 'Creating a reusable collection of UI components.',
              codeLessons: []
            },
            {
              title: 'Versioning and publishing strategies for design system components',
              description: 'Managing updates and distribution of design system assets.',
              codeLessons: []
            },
            {
              title: 'Governance and Adoption strategies within an organization',
              description: 'Ensuring widespread and consistent use of the design system.',
              codeLessons: []
            },
            {
              title: 'Integrating with UI/UX tools (Figma, Sketch)',
              description: 'Connecting the design system with design tools for seamless workflows.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-4-ssr-ssg-architectures',
          title: 'Server-Side Rendering (SSR) & Static Site Generation (SSG) Architectures',
          duration: '60 min',
          subtopics: [
            {
              title: 'Deep Dive into SSR: Process, benefits (SEO, FCP), challenges (TTFB, server load, hydration)',
              description: 'A detailed look at Server-Side Rendering and its implications.',
              codeLessons: []
            },
            {
              title: 'Deep Dive into SSG: Process, benefits (performance, CDN caching, security), use cases (blogs, marketing sites)',
              description: 'Exploring Static Site Generation and its advantages.',
              codeLessons: []
            },
            {
              title: 'Hydration and re-hydration',
              description: 'Understanding how client-side JavaScript takes over from server-rendered HTML.',
              codeLessons: []
            },
            {
              title: 'Data fetching patterns in SSR/SSG (getServerSideProps, getStaticProps in Next.js)',
              description: 'How to fetch data effectively in SSR and SSG environments.',
              codeLessons: []
            },
            {
              title: 'Universal/Isomorphic applications',
              description: 'Applications that can run both on the server and in the browser.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-5-pwas-offline-first',
          title: 'Progressive Web Apps (PWAs) & Offline First Strategies',
          duration: '60 min',
          subtopics: [
            {
              title: 'PWA Core Concepts: Manifest, Service Workers, HTTPS, Installability, Responsiveness',
              description: 'The fundamental building blocks of Progressive Web Apps.',
              codeLessons: []
            },
            {
              title: 'Service Workers: Intercepting network requests, caching strategies (Cache-first, Network-first, Stale-while-revalidate)',
              description: 'The power of Service Workers for offline capabilities and performance.',
              codeLessons: []
            },
            {
              title: 'Push Notifications',
              description: 'Engaging users with push notifications in PWAs.',
              codeLessons: []
            },
            {
              title: 'Designing for offline capabilities and data synchronization',
              description: 'Strategies for building applications that work seamlessly offline.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-6-frontend-security-threat-models',
          title: 'Frontend Security Best Practices & Threat Models',
          duration: '60 min',
          subtopics: [
            {
              title: 'Deep Dive into XSS (Cross-Site Scripting) and various attack vectors (Stored, Reflected, DOM-based) and prevention (Content Security Policy, sanitization, encoding)',
              description: 'Understanding and mitigating XSS vulnerabilities.',
              codeLessons: []
            },
            {
              title: 'CSRF (Cross-Site Request Forgery) and prevention (CSRF tokens)',
              description: 'Protecting against CSRF attacks.',
              codeLessons: []
            },
            {
              title: 'Clickjacking',
              description: 'Defending against UI redressing attacks.',
              codeLessons: []
            },
            {
              title: 'Secure API Communication (HTTPS, authentication tokens, CORS policies)',
              description: 'Ensuring secure interactions with backend APIs.',
              codeLessons: []
            },
            {
              title: 'Input Validation and Sanitization on the client-side',
              description: 'Validating and cleaning user input for security.',
              codeLessons: []
            },
            {
              title: 'Threat Modeling for front-end applications',
              description: 'Proactively identifying and addressing security risks.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-7-ab-testing-feature-flagging',
          title: 'A/B Testing and Feature Flagging Architectures',
          duration: '60 min',
          subtopics: [
            {
              title: 'A/B Testing: Principles, experimental design, statistical significance (conceptual)',
              description: 'Running experiments to compare different versions of a UI.',
              codeLessons: []
            },
            {
              title: 'Feature Flagging: Definition, benefits (safe deployments, dark launches, gradual rollouts, personalized experiences)',
              description: 'Controlling feature visibility and rollout with flags.',
              codeLessons: []
            },
            {
              title: 'Implementing feature flags (client-side vs. server-side flag evaluation)',
              description: 'Technical considerations for integrating feature flags.',
              codeLessons: []
            },
            {
              title: 'Tools: LaunchDarkly, Split.io, internal solutions',
              description: 'Popular services and approaches for managing feature flags.',
              codeLessons: []
            },
            {
              title: 'Data collection and analysis for experiments',
              description: 'Measuring the impact of A/B tests and feature rollouts.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-8-advanced-build-performance',
          title: 'Build Performance Optimization (Advanced)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Webpack/Vite Advanced Configuration: Module bundling optimization, DLLPlugin, HardSourceWebpackPlugin',
              description: 'Deep diving into bundler configurations for maximum performance.',
              codeLessons: []
            },
            {
              title: 'Tree-Shaking Deep Dive (dead code elimination)',
              description: 'Effectively removing unused code from bundles.',
              codeLessons: []
            },
            {
              title: 'Code Splitting and Dynamic Imports (Route-based, component-based, vendor splitting)',
              description: 'Advanced techniques for breaking down bundles and loading code on demand.',
              codeLessons: []
            },
            {
              title: 'Build Caching: Faster subsequent builds',
              description: 'Optimizing build times through caching mechanisms.',
              codeLessons: []
            },
            {
              title: 'Bundle Analysis Tools (Webpack Bundle Analyzer)',
              description: 'Tools for understanding and optimizing bundle contents.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-9-advanced-dx-tooling',
          title: 'Advanced DX (Developer Experience) & Tooling',
          duration: '60 min',
          subtopics: [
            {
              title: 'Linting and Formatting Automation (ESLint, Prettier in depth)',
              description: 'Advanced usage of code quality and formatting tools.',
              codeLessons: []
            },
            {
              title: 'IDE Integrations and Extensions',
              description: 'Leveraging IDE features for improved productivity.',
              codeLessons: []
            },
            {
              title: 'Hot Module Replacement (HMR) / Fast Refresh',
              description: 'Speeding up development with instant code updates.',
              codeLessons: []
            },
            {
              title: 'Code Generation and Scaffolding Tools (e.g., Hygen, Plop)',
              description: 'Automating repetitive code generation tasks.',
              codeLessons: []
            },
            {
              title: 'Local Development Environments (Docker, dev containers for consistency)',
              description: 'Ensuring consistent development environments across teams.',
              codeLessons: []
            },
            {
              title: 'Documentation as Code (Storybook, Docsify, Docusaurus)',
              description: 'Maintaining documentation alongside code.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-10-webassembly-edge-computing',
          title: 'WebAssembly (Wasm) & Edge Computing in Front-End (Conceptual)',
          duration: '45 min',
          subtopics: [
            {
              title: 'Introduction to WebAssembly: What it is, use cases (game engines, video editing, heavy computation)',
              description: 'Understanding WebAssembly and its potential for high-performance web applications.',
              codeLessons: []
            },
            {
              title: 'Wasm\'s role in extending JavaScript capabilities',
              description: 'How WebAssembly complements and enhances JavaScript.',
              codeLessons: []
            },
            {
              title: 'Edge Computing for Front-End: CDN-level functions (e.g., Cloudflare Workers, Lambda@Edge)',
              description: 'Leveraging compute power at the edge of the network.',
              codeLessons: []
            },
            {
              title: 'Use cases for Edge functions: A/B testing, authentication, dynamic routing, content personalization',
              description: 'Practical applications of edge computing for front-end.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-11-scalability-reliability-beyond-browser',
          title: 'Scalability & Reliability Beyond the Browser',
          duration: '45 min',
          subtopics: [
            {
              title: 'CDN (Content Delivery Network) Strategy: Global caching, invalidation, edge logic',
              description: 'Designing for global content delivery and caching.',
              codeLessons: []
            },
            {
              title: 'Service Workers (revisited): Advanced caching patterns for application assets and data',
              description: 'Advanced use of Service Workers for offline and performance.',
              codeLessons: []
            },
            {
              title: 'Database scaling (conceptual, for read-heavy operations impacting FE)',
              description: 'Understanding how database scaling impacts front-end performance.',
              codeLessons: []
            },
            {
              title: 'API Gateway interaction (conceptual, for request routing, auth)',
              description: 'The role of API Gateways in managing API traffic.',
              codeLessons: []
            },
            {
              title: 'Redundancy and Failover for FE assets',
              description: 'Ensuring high availability of front-end resources.',
              codeLessons: []
            }
          ]
        },
        {
          id: 'lesson-3-12-adr-documentation',
          title: 'Architectural Decision Records (ADRs) and Documentation',
          duration: '45 min',
          subtopics: [
            {
              title: 'Importance of Architectural Documentation',
              description: 'Why documenting architectural decisions is crucial for long-term project health.',
              codeLessons: []
            },
            {
              title: 'What are Architectural Decision Records (ADRs)?',
              description: 'A formal way to capture significant architectural decisions.',
              codeLessons: []
            },
            {
              title: 'Structure and content of an ADR',
              description: 'The key components of a well-formed Architectural Decision Record.',
              codeLessons: []
            },
            {
              title: 'When to write an ADR',
              description: 'Identifying situations that warrant an Architectural Decision Record.',
              codeLessons: []
            },
            {
              title: 'Tools for documentation (MkDocs, Docusaurus, Confluence)',
              description: 'Platforms and tools to manage architectural documentation.',
              codeLessons: []
            },
            {
              title: 'Communicating architectural decisions effectively',
              description: 'Strategies for disseminating architectural decisions to the team.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 'section-3-quiz',
        title: 'Quiz: Advanced Front-End System Design',
        questions: [
          {
            id: 's3q1',
            question: 'Which integration strategy is a key feature of Webpack 5 for building Micro-Frontends?',
            options: ['Iframes', 'Web Components', 'Module Federation', 'Server-Side Includes'],
            correctAnswer: 2
          },
          {
            id: 's3q2',
            question: 'What is a primary benefit of using a Design System in an organization?',
            options: ['Increased technical debt', 'Inconsistent UI/UX across products', 'Faster development and improved consistency', 'Reduced need for communication between design and development teams'],
            correctAnswer: 2
          },
          {
            id: 's3q3',
            question: 'Which of the following is a core concept of Progressive Web Apps (PWAs) that enables offline capabilities?',
            options: ['WebAssembly', 'Service Workers', 'Server-Side Rendering', 'GraphQL'],
            correctAnswer: 1
          },
        ]
      },
      projects: [
        {
          id: 'section-3-project-1',
          title: 'Project 1: Monorepo Migration Strategy',
          description: '(Conceptual) Outline the directory structure and tooling considerations for migrating 5 independent React/Vue projects into a single monorepo.',
          checkpoint: 'Evaluate and design the repository structure for large-scale front-end development.'
        },
        {
          id: 'section-3-project-2',
          title: 'Project 2: User Dashboard Micro-Frontend Design',
          description: '(Conceptual) For a user dashboard with multiple distinct widgets (e.g., stock ticker, weather, task list), design a micro-frontend strategy, including integration and communication patterns.',
          checkpoint: 'Design and discuss the trade-offs of a micro-frontend architecture for a complex application.'
        },
        {
          id: 'section-3-project-3',
          title: 'Project 3: New Design System Architecture',
          description: 'Design the architecture for a new design system, outlining its key components, tools, and maintenance strategy.',
          checkpoint: 'Design and plan the implementation and adoption of a comprehensive design system.'
        },
        {
          id: 'section-3-project-4',
          title: 'Project 4: SSR/CSR Data Flow Design',
          description: 'Design the data flow for an application that uses SSR for initial page load and then switches to client-side data fetching for subsequent interactions.',
          checkpoint: 'Make informed decisions on rendering strategies based on project goals.'
        },
        {
          id: 'section-3-project-5',
          title: 'Project 5: Offline-First Note-Taking App',
          description: 'Design an "offline-first" strategy for a note-taking application, considering how data will be synced when online.',
          checkpoint: 'Design a PWA with robust offline capabilities and push notifications.'
        },
        {
          id: 'section-3-project-6',
          title: 'Project 6: User Login Form Threat Modeling',
          description: 'Perform a basic threat modeling exercise for a user login form, identifying potential attack vectors and proposing mitigation strategies.',
          checkpoint: 'Incorporate comprehensive security measures into front-end system design.'
        },
        {
          id: 'section-3-project-7',
          title: 'Project 7: A/B Test Management System',
          description: 'Outline a system for implementing and managing A/B tests for product features, including data collection and analysis.',
          checkpoint: 'Design systems for controlled feature rollouts and experimentation.'
        },
        {
          id: 'section-3-project-8',
          title: 'Project 8: Large App Build Optimization',
          description: 'Given a large front-end application, propose a strategy to reduce its main bundle size and improve build times.',
          checkpoint: 'Significantly optimize front-end build times and bundle sizes.'
        },
        {
          id: 'section-3-project-9',
          title: 'Project 9: Improving Developer Experience',
          description: 'Propose a set of tools and configurations to improve the developer experience for a new team joining an existing front-end project.',
          checkpoint: 'Design and implement tools and processes that significantly improve developer productivity and satisfaction.'
        },
        {
          id: 'section-3-project-10',
          title: 'Project 10: WebAssembly Image Processing',
          description: '(Conceptual) Outline how a CPU-intensive image processing task could be offloaded to WebAssembly.',
          checkpoint: 'Understand the potential and use cases of WebAssembly and Edge Computing in front-end architecture.'
        },
        {
          id: 'section-3-project-11',
          title: 'Project 11: Global Media Site CDN Strategy',
          description: '(Conceptual) Plan how a high-traffic media site would ensure fast asset delivery and high availability to users worldwide.',
          checkpoint: 'Design strategies for delivering a highly scalable and reliable front-end experience.'
        },
        {
          id: 'section-3-project-12',
          title: 'Project 12: Architectural Decision Record (ADR)',
          description: 'Choose a past project or a complex feature, and write an ADR for a significant architectural decision made during its development.',
          checkpoint: 'Document architectural decisions clearly and concisely for future reference and team understanding.'
        }
      ]
    }
  ]
};

export default frontEndSystemDesignCourse;