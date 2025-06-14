import { Course } from '../courses';

const sql: Course = {
  id: 'sql',
  title: 'SQL (DBMS)',
  description: 'Master database management and SQL queries',
  icon: 'Database',
  color: 'bg-green-500',
  estimatedHours: 20,
  totalLessons: 25,
  sections: [
    {
      id: 'sql-basics',
      title: 'SQL Basics',
      level: 'basic',
      lessons: [
        {
          id: 'sql-intro',
          title: 'Introduction to SQL',
          duration: '40 min',
          content: `
# Introduction to SQL

## What is SQL?
SQL (Structured Query Language) is a programming language designed for managing and manipulating relational databases. It's the standard language for relational database management systems.

## Database Concepts

### Tables
Tables are the basic structure of relational databases, consisting of rows and columns.

\`\`\`sql
-- Example table structure
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### Primary Keys and Foreign Keys
\`\`\`sql
-- Primary key ensures unique identification
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    total DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

## Basic SQL Operations

### SELECT - Retrieving Data
\`\`\`sql
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with conditions
SELECT * FROM users WHERE age > 18;

-- Select with sorting
SELECT * FROM users ORDER BY name ASC;

-- Select with limit
SELECT * FROM users LIMIT 10;
\`\`\`

### INSERT - Adding Data
\`\`\`sql
-- Insert single record
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@example.com', 25);

-- Insert multiple records
INSERT INTO users (name, email, age) VALUES
('Alice Smith', 'alice@example.com', 30),
('Bob Johnson', 'bob@example.com', 28);
\`\`\`

### UPDATE - Modifying Data
\`\`\`sql
-- Update single record
UPDATE users 
SET age = 26 
WHERE email = 'john@example.com';

-- Update multiple records
UPDATE users 
SET age = age + 1 
WHERE age < 30;
\`\`\`

### DELETE - Removing Data
\`\`\`sql
-- Delete specific records
DELETE FROM users WHERE age < 18;

-- Delete all records (be careful!)
DELETE FROM users;
\`\`\`

## Advanced Queries

### WHERE Clauses
\`\`\`sql
-- Comparison operators
SELECT * FROM users WHERE age >= 21;
SELECT * FROM users WHERE name = 'John Doe';

-- Logical operators
SELECT * FROM users WHERE age > 18 AND age < 65;
SELECT * FROM users WHERE name = 'John' OR name = 'Jane';

-- Pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE name LIKE 'J%';
\`\`\`

### Joins
\`\`\`sql
-- Inner join
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Left join
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
\`\`\`

### Aggregate Functions
\`\`\`sql
-- Count records
SELECT COUNT(*) FROM users;

-- Sum values
SELECT SUM(total) FROM orders;

-- Average
SELECT AVG(age) FROM users;

-- Group by
SELECT age, COUNT(*) 
FROM users 
GROUP BY age;
\`\`\`

SQL is essential for working with databases and managing data in web applications!
          `
        }
      ]
    }
  ]
};

export default sql;