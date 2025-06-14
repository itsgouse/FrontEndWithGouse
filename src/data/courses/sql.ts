import { Course } from '../courses';

const sqlForDataProfessionals: Course = {
  id: 'sql-for-data-professionals',
  title: 'SQL for Data Professionals – Curriculum Structure',
  description: 'A comprehensive curriculum designed to equip data professionals with essential to advanced SQL skills, covering foundational concepts, real-world applications, and senior-level system-oriented topics.',
  icon: 'Database', // Example icon
  color: 'bg-indigo-700', // Example color
  estimatedHours: 40,
  totalLessons: 29, // Total lessons across all sections
  sections: [
    {
      id: 'section-1-basics',
      title: 'Section 1: Basics (Beginner-Friendly, Core Foundations)',
      level: 'basic',
      lessons: [
        {
          id: 's1-lesson-1',
          title: 'Introduction to Databases & SQL Fundamentals',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is a database? Relational Databases (RDBMS) vs. NoSQL (overview)',
              description: 'This subtopic introduces the fundamental concept of databases, differentiating between relational databases (structured, table-based) and NoSQL databases (flexible, non-tabular) with their respective use cases.',
              codeLessons: []
            },
            {
              title: 'What is SQL? History, Purpose, and Standards (ANSI SQL)',
              description: 'Explore the definition, historical background, primary purpose (managing and querying data), and standardization (ANSI SQL) of Structured Query Language (SQL).',
              codeLessons: []
            },
            {
              title: 'Database Schema vs. Database Instance',
              description: 'Understand the distinction between a database schema (the logical design/structure) and a database instance (the running software and actual data).',
              codeLessons: []
            },
            {
              title: 'Introduction to Common SQL Data Types (INTEGER, VARCHAR, DATE, BOOLEAN, DECIMAL)',
              description: 'Learn about fundamental SQL data types used to define columns in tables, including numeric, character, date/time, and boolean types.',
              codeLessons: [
                {
                  lessonTitle: 'Declaring common SQL data types',
                  codeSnippet: `CREATE TABLE Products (\n  ProductID INTEGER PRIMARY KEY,\n  ProductName VARCHAR(255),\n  Price DECIMAL(10, 2),\n  IsAvailable BOOLEAN,\n  ManufactureDate DATE\n);`,
                  explanation: 'This SQL snippet demonstrates the use of common data types like INTEGER, VARCHAR, DECIMAL, BOOLEAN, and DATE when creating a table, defining the type of data each column can hold.',
                  imageUrl: 'https://example.com/images/sql-datatypes.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-2',
          title: 'Basic Data Retrieval (SELECT & FROM)',
          duration: '45 min',
          subtopics: [
            {
              title: 'The SELECT statement: Retrieving specific columns',
              description: 'Learn how to use the SELECT statement to retrieve only the columns you need from a table, improving efficiency and readability.',
              codeLessons: [
                {
                  lessonTitle: 'Selecting specific columns',
                  codeSnippet: `SELECT ProductName, Price\nFROM Products;`,
                  explanation: 'This query retrieves only the "ProductName" and "Price" columns from the "Products" table.',
                  imageUrl: 'https://example.com/images/select-specific-columns.png'
                }
              ]
            },
            {
              title: 'Retrieving all columns: SELECT *',
              description: 'Discover the shorthand `SELECT *` to retrieve all columns from a table. Understand when it\'s appropriate and when to avoid it.',
              codeLessons: [
                {
                  lessonTitle: 'Selecting all columns',
                  codeSnippet: `SELECT *\nFROM Products;`,
                  explanation: 'This query retrieves all columns from the "Products" table.',
                  imageUrl: 'https://example.com/images/select-all-columns.png'
                }
              ]
            },
            {
              title: 'The FROM clause: Specifying the table',
              description: 'Understand the essential `FROM` clause, which specifies the table from which data should be retrieved.',
              codeLessons: []
            },
            {
              title: 'Column Aliases using AS',
              description: 'Learn to rename columns in your query results using the `AS` keyword, making your output more readable and user-friendly.',
              codeLessons: [
                {
                  lessonTitle: 'Using column aliases',
                  codeSnippet: `SELECT ProductName AS ItemName, Price AS UnitPrice\nFROM Products;`,
                  explanation: 'This query renames "ProductName" to "ItemName" and "Price" to "UnitPrice" in the result set.',
                  imageUrl: 'https://example.com/images/column-aliases.png'
                }
              ]
            },
            {
              title: 'Using DISTINCT to retrieve unique values',
              description: 'Explore how the `DISTINCT` keyword can be used with `SELECT` to return only unique values from a specified column or combination of columns.',
              codeLessons: [
                {
                  lessonTitle: 'Retrieving distinct categories',
                  codeSnippet: `SELECT DISTINCT Category\nFROM Products;`,
                  explanation: 'This query returns only the unique values from the "Category" column in the "Products" table.',
                  imageUrl: 'https://example.com/images/distinct-values.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-3',
          title: 'Filtering Data (WHERE Clause)',
          duration: '60 min',
          subtopics: [
            {
              title: 'The WHERE clause: Applying conditions to rows',
              description: 'Master the `WHERE` clause to filter rows based on specified conditions, retrieving only the data that meets your criteria.',
              codeLessons: [
                {
                  lessonTitle: 'Filtering by a single condition',
                  codeSnippet: `SELECT ProductName, Price\nFROM Products\nWHERE Price > 50;`,
                  explanation: 'This query retrieves products with a price greater than 50.',
                  imageUrl: 'https://example.com/images/where-clause.png'
                }
              ]
            },
            {
              title: 'Comparison Operators: =, != (or <>), >, <, >=, <=',
              description: 'Learn to use various comparison operators to specify conditions in the `WHERE` clause, comparing values for equality, inequality, and magnitude.',
              codeLessons: []
            },
            {
              title: 'Logical Operators: AND, OR, NOT',
              description: 'Combine multiple conditions using `AND`, `OR`, and `NOT` to create more complex filtering logic.',
              codeLessons: [
                {
                  lessonTitle: 'Combining conditions with AND and OR',
                  codeSnippet: `SELECT ProductName, Price, Category\nFROM Products\nWHERE Price > 50 AND Category = 'Electronics';`,
                  explanation: 'This query finds electronic products with a price over 50.',
                  imageUrl: 'https://example.com/images/logical-operators.png'
                }
              ]
            },
            {
              title: 'BETWEEN operator for ranges',
              description: 'Simplify range-based filtering using the `BETWEEN` operator, which includes both the start and end values.',
              codeLessons: [
                {
                  lessonTitle: 'Filtering with BETWEEN',
                  codeSnippet: `SELECT ProductName, Price\nFROM Products\nWHERE Price BETWEEN 20 AND 70;`,
                  explanation: 'This query selects products with prices between 20 and 70 (inclusive).',
                  imageUrl: 'https://example.com/images/between-operator.png'
                }
              ]
            },
            {
              title: 'IN operator for multiple values',
              description: 'Use the `IN` operator to specify a list of possible values for a column, making your `WHERE` clause more concise.',
              codeLessons: [
                {
                  lessonTitle: 'Filtering with IN',
                  codeSnippet: `SELECT ProductName, Category\nFROM Products\nWHERE Category IN ('Electronics', 'Books');`,
                  explanation: 'This query retrieves products from either the "Electronics" or "Books" categories.',
                  imageUrl: 'https://example.com/images/in-operator.png'
                }
              ]
            },
            {
              title: 'LIKE operator for pattern matching (%, _)',
              description: 'Perform powerful pattern matching using the `LIKE` operator with wildcard characters (`%` for any sequence of characters, `_` for any single character).',
              codeLessons: [
                {
                  lessonTitle: 'Pattern matching with LIKE',
                  codeSnippet: `SELECT ProductName\nFROM Products\nWHERE ProductName LIKE 'S%';`,
                  explanation: 'This query finds products whose names start with the letter "S".',
                  imageUrl: 'https://example.com/images/like-operator.png'
                }
              ]
            },
            {
              title: 'IS NULL and IS NOT NULL for checking null values',
              description: 'Correctly identify rows where a column contains `NULL` values (unknown or missing data) or is not `NULL`.',
              codeLessons: [
                {
                  lessonTitle: 'Checking for NULL values',
                  codeSnippet: `SELECT CustomerName\nFROM Customers\nWHERE Email IS NULL;`,
                  explanation: 'This query finds customers who do not have an email address recorded.',
                  imageUrl: 'https://example.com/images/is-null.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-4',
          title: 'Sorting & Limiting Results (ORDER BY, LIMIT/TOP)',
          duration: '45 min',
          subtopics: [
            {
              title: 'The ORDER BY clause: Sorting results (ASC, DESC)',
              description: 'Learn how to sort your query results in ascending (`ASC`) or descending (`DESC`) order based on one or more columns.',
              codeLessons: [
                {
                  lessonTitle: 'Sorting products by price',
                  codeSnippet: `SELECT ProductName, Price\nFROM Products\nORDER BY Price DESC;`,
                  explanation: 'This query retrieves products sorted by price in descending order (highest to lowest).',
                  imageUrl: 'https://example.com/images/order-by-desc.png'
                }
              ]
            },
            {
              title: 'Sorting by multiple columns',
              description: 'Understand how to apply sorting criteria to multiple columns, with the order of columns in `ORDER BY` determining the sorting hierarchy.',
              codeLessons: [
                {
                  lessonTitle: 'Sorting by category then price',
                  codeSnippet: `SELECT ProductName, Category, Price\nFROM Products\nORDER BY Category ASC, Price DESC;`,
                  explanation: 'This query first sorts products by category ascending, then by price descending within each category.',
                  imageUrl: 'https://example.com/images/order-by-multiple.png'
                }
              ]
            },
            {
              title: 'LIMIT clause (MySQL, PostgreSQL, SQLite): Restricting the number of rows',
              description: 'For MySQL, PostgreSQL, and SQLite, use the `LIMIT` clause to specify the maximum number of rows to return from the result set.',
              codeLessons: [
                {
                  lessonTitle: 'Limiting results in MySQL/PostgreSQL',
                  codeSnippet: `SELECT ProductName, Price\nFROM Products\nORDER BY Price DESC\nLIMIT 5;`,
                  explanation: 'This query retrieves the 5 most expensive products.',
                  imageUrl: 'https://example.com/images/limit-clause.png'
                }
              ]
            },
            {
              title: 'TOP clause (SQL Server): Restricting the number of rows',
              description: 'For SQL Server, use the `TOP` clause (often with `ORDER BY`) to retrieve a specified number or percentage of rows from the top of the result set.',
              codeLessons: [
                {
                  lessonTitle: 'Limiting results in SQL Server',
                  codeSnippet: `SELECT TOP 5 ProductName, Price\nFROM Products\nORDER BY Price DESC;`,
                  explanation: 'This SQL Server query retrieves the 5 most expensive products.',
                  imageUrl: 'https://example.com/images/top-clause.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-5',
          title: 'Data Definition Language (DDL) - CREATE TABLE',
          duration: '60 min',
          subtopics: [
            {
              title: 'CREATE DATABASE statement (conceptual understanding)',
              description: 'Understand the concept of creating a new database, which serves as a container for tables and other database objects. (Syntax varies by RDBMS).',
              codeLessons: []
            },
            {
              title: 'CREATE TABLE syntax: Defining table structure',
              description: 'Learn the fundamental syntax for `CREATE TABLE` to define the name of a new table and specify its columns and their properties.',
              codeLessons: [
                {
                  lessonTitle: 'Basic CREATE TABLE syntax',
                  codeSnippet: `CREATE TABLE Employees (\n  EmployeeID INTEGER,\n  FirstName VARCHAR(50),\n  LastName VARCHAR(50)\n);`,
                  explanation: 'This creates a simple "Employees" table with three columns: EmployeeID, FirstName, and LastName.',
                  imageUrl: 'https://example.com/images/create-table.png'
                }
              ]
            },
            {
              title: 'Column definitions: Name, Data Type, Constraints',
              description: 'Deep dive into defining each column, including its name, chosen data type, and any constraints that enforce data rules.',
              codeLessons: []
            },
            {
              title: 'Basic Constraints: NOT NULL, UNIQUE',
              description: 'Apply `NOT NULL` to ensure a column always contains a value and `UNIQUE` to ensure all values in a column are distinct.',
              codeLessons: [
                {
                  lessonTitle: 'Using NOT NULL and UNIQUE constraints',
                  codeSnippet: `CREATE TABLE Users (\n  UserID INTEGER PRIMARY KEY,\n  Username VARCHAR(100) NOT NULL UNIQUE,\n  Email VARCHAR(255) UNIQUE\n);`,
                  explanation: 'This table ensures "Username" is always present and unique, and "Email" is unique (though can be NULL).',
                  imageUrl: 'https://example.com/images/not-null-unique.png'
                }
              ]
            },
            {
              title: 'PRIMARY KEY constraint: Ensuring unique row identification',
              description: 'Understand the critical `PRIMARY KEY` constraint, which uniquely identifies each row in a table and ensures data integrity and relationships.',
              codeLessons: [
                {
                  lessonTitle: 'Defining a PRIMARY KEY',
                  codeSnippet: `CREATE TABLE Customers (\n  CustomerID INTEGER PRIMARY KEY,\n  CustomerName VARCHAR(100)\n);`,
                  explanation: 'This creates a "Customers" table where "CustomerID" is the unique identifier for each customer.',
                  imageUrl: 'https://example.com/images/primary-key.png'
                }
              ]
            },
            {
              title: 'AUTO_INCREMENT / IDENTITY (for auto-generated IDs)',
              description: 'Learn how to use `AUTO_INCREMENT` (MySQL) or `IDENTITY` (SQL Server) to automatically generate unique, sequential numbers for ID columns, simplifying data insertion.',
              codeLessons: [
                {
                  lessonTitle: 'Auto-incrementing primary key (MySQL)',
                  codeSnippet: `CREATE TABLE Orders (\n  OrderID INTEGER PRIMARY KEY AUTO_INCREMENT,\n  OrderDate DATE\n);`,
                  explanation: 'In MySQL, "OrderID" will automatically increment for each new order.',
                  imageUrl: 'https://example.com/images/auto-increment.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-6',
          title: 'Data Manipulation Language (DML) - INSERT',
          duration: '30 min',
          subtopics: [
            {
              title: 'INSERT INTO statement: Adding new rows to a table',
              description: 'Learn the fundamental `INSERT INTO` statement to add new records (rows) into your database tables.',
              codeLessons: [
                {
                  lessonTitle: 'Basic INSERT INTO statement',
                  codeSnippet: `INSERT INTO Products (ProductID, ProductName, Price)\nVALUES (1, 'Laptop', 1200.00);`,
                  explanation: 'This inserts a single row with specific values into the Products table.',
                  imageUrl: 'https://example.com/images/insert-basic.png'
                }
              ]
            },
            {
              title: 'Inserting values for all columns',
              description: 'When inserting values for all columns in a table, you can omit the column list if the order of values matches the table\'s column order.',
              codeLessons: [
                {
                  lessonTitle: 'Inserting values for all columns (order dependent)',
                  codeSnippet: `INSERT INTO Products\nVALUES (2, 'Mouse', 25.00, 'Electronics', TRUE, '2023-01-15');`,
                  explanation: 'This inserts values into all columns of the Products table, assuming the order matches the table definition.',
                  imageUrl: 'https://example.com/images/insert-all-columns.png'
                }
              ]
            },
            {
              title: 'Inserting values into specific columns',
              description: 'Best practice: Always specify the columns you are inserting into, even if it\'s all of them, to make your code more robust to schema changes.',
              codeLessons: [
                {
                  lessonTitle: 'Inserting into specific columns',
                  codeSnippet: `INSERT INTO Customers (CustomerName, Email)\nVALUES ('Alice Smith', 'alice@example.com');`,
                  explanation: 'This inserts a new customer, specifying only the name and email, allowing other columns (like an auto-incrementing ID) to be handled automatically.',
                  imageUrl: 'https://example.com/images/insert-specific.png'
                }
              ]
            },
            {
              title: 'Inserting multiple rows in a single statement',
              description: 'Optimize data loading by inserting multiple rows with a single `INSERT` statement, which can be more efficient than multiple individual inserts.',
              codeLessons: [
                {
                  lessonTitle: 'Inserting multiple rows',
                  codeSnippet: `INSERT INTO Products (ProductName, Price)\nVALUES\n  ('Keyboard', 75.00),\n  ('Monitor', 300.00);`,
                  explanation: 'This single statement inserts two new product records.',
                  imageUrl: 'https://example.com/images/insert-multiple.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-7',
          title: 'Data Manipulation Language (DML) - UPDATE & DELETE',
          duration: '45 min',
          subtopics: [
            {
              title: 'UPDATE statement: Modifying existing data in rows',
              description: 'Learn to use the `UPDATE` statement to change existing data within one or more rows of a table.',
              codeLessons: [
                {
                  lessonTitle: 'Updating a product price',
                  codeSnippet: `UPDATE Products\nSET Price = 1250.00\nWHERE ProductID = 1;`,
                  explanation: 'This query updates the price of the product with ProductID 1 to 1250.00.',
                  imageUrl: 'https://example.com/images/update-statement.png'
                }
              ]
            },
            {
              title: 'Importance of the WHERE clause with UPDATE',
              description: 'Emphasize the critical role of the `WHERE` clause with `UPDATE` to prevent accidental updates to all rows in a table. Without it, all rows would be modified.',
              codeLessons: []
            },
            {
              title: 'DELETE FROM statement: Removing rows from a table',
              description: 'Master the `DELETE FROM` statement to remove one or more existing rows from a table.',
              codeLessons: [
                {
                  lessonTitle: 'Deleting a specific customer',
                  codeSnippet: `DELETE FROM Customers\nWHERE CustomerID = 5;`,
                  explanation: 'This query deletes the customer record with CustomerID 5.',
                  imageUrl: 'https://example.com/images/delete-statement.png'
                }
              ]
            },
            {
              title: 'Importance of the WHERE clause with DELETE (avoiding accidental data loss)',
              description: 'Stress the absolute necessity of the `WHERE` clause with `DELETE` to avoid deleting all records from a table unintentionally.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's1-lesson-8',
          title: 'Basic Aggregate Functions',
          duration: '45 min',
          subtopics: [
            {
              title: 'COUNT(): Counting rows',
              description: 'Use `COUNT()` to get the number of rows in a table or the number of non-NULL values in a column.',
              codeLessons: [
                {
                  lessonTitle: 'Counting all products',
                  codeSnippet: `SELECT COUNT(*) AS TotalProducts\nFROM Products;`,
                  explanation: 'This query returns the total number of rows in the Products table.',
                  imageUrl: 'https://example.com/images/count-rows.png'
                }
              ]
            },
            {
              title: 'SUM(): Calculating the sum of a numeric column',
              description: 'Apply `SUM()` to calculate the total sum of values in a numeric column.',
              codeLessons: [
                {
                  lessonTitle: 'Calculating total order amount',
                  codeSnippet: `SELECT SUM(OrderAmount) AS TotalRevenue\nFROM Orders;`,
                  explanation: 'This query calculates the sum of all "OrderAmount" values in the Orders table.',
                  imageUrl: 'https://example.com/images/sum-function.png'
                }
              ]
            },
            {
              title: 'AVG(): Calculating the average of a numeric column',
              description: 'Use `AVG()` to compute the average (mean) of values in a numeric column.',
              codeLessons: [
                {
                  lessonTitle: 'Calculating average product price',
                  codeSnippet: `SELECT AVG(Price) AS AveragePrice\nFROM Products;`,
                  explanation: 'This query calculates the average price of all products.',
                  imageUrl: 'https://example.com/images/avg-function.png'
                }
              ]
            },
            {
              title: 'MIN(): Finding the minimum value',
              description: 'Find the smallest value in a specified column using `MIN()`.',
              codeLessons: [
                {
                  lessonTitle: 'Finding the lowest price',
                  codeSnippet: `SELECT MIN(Price) AS LowestPrice\nFROM Products;`,
                  explanation: 'This query finds the minimum value in the "Price" column of the Products table.',
                  imageUrl: 'https://example.com/images/min-function.png'
                }
              ]
            },
            {
              title: 'MAX(): Finding the maximum value',
              description: 'Discover the largest value in a specified column using `MAX()`.',
              codeLessons: [
                {
                  lessonTitle: 'Finding the highest price',
                  codeSnippet: `SELECT MAX(Price) AS HighestPrice\nFROM Products;`,
                  explanation: 'This query finds the maximum value in the "Price" column of the Products table.',
                  imageUrl: 'https://example.com/images/max-function.png'
                }
              ]
            }
          ]
        },
        {
          id: 's1-lesson-9',
          title: 'DDL - ALTER & DROP',
          duration: '45 min',
          subtopics: [
            {
              title: 'ALTER TABLE: Adding a new column',
              description: 'Modify an existing table by adding a new column to its schema.',
              codeLessons: [
                {
                  lessonTitle: 'Adding a "Stock" column',
                  codeSnippet: `ALTER TABLE Products\nADD Stock INTEGER DEFAULT 0;`,
                  explanation: 'This adds a new integer column named "Stock" to the Products table, with a default value of 0.',
                  imageUrl: 'https://example.com/images/alter-table-add-column.png'
                }
              ]
            },
            {
              title: 'ALTER TABLE: Dropping a column',
              description: 'Remove an existing column from a table.',
              codeLessons: [
                {
                  lessonTitle: 'Dropping the "Stock" column',
                  codeSnippet: `ALTER TABLE Products\nDROP COLUMN Stock;`,
                  explanation: 'This removes the "Stock" column from the Products table.',
                  imageUrl: 'https://example.com/images/alter-table-drop-column.png'
                }
              ]
            },
            {
              title: 'ALTER TABLE: Modifying column data type or constraints',
              description: 'Change the data type or constraints of an existing column. (Syntax varies slightly by RDBMS).',
              codeLessons: [
                {
                  lessonTitle: 'Modifying column type (PostgreSQL example)',
                  codeSnippet: `ALTER TABLE Products\nALTER COLUMN Price TYPE DECIMAL(12, 2);`,
                  explanation: 'This PostgreSQL query changes the data type of the "Price" column to DECIMAL with a larger precision.',
                  imageUrl: 'https://example.com/images/alter-table-modify-column.png'
                }
              ]
            },
            {
              title: 'DROP TABLE: Deleting an entire table',
              description: 'Permanently remove an entire table from the database, including all its data and structure.',
              codeLessons: [
                {
                  lessonTitle: 'Dropping the "OldProducts" table',
                  codeSnippet: `DROP TABLE OldProducts;`,
                  explanation: 'This command permanently deletes the "OldProducts" table.',
                  imageUrl: 'https://example.com/images/drop-table.png'
                }
              ]
            },
            {
              title: 'DROP DATABASE: Deleting an entire database (conceptual)',
              description: 'Understand the concept of `DROP DATABASE` which removes an entire database. Use with extreme caution as it deletes all tables and data within it.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 's1-quiz',
        title: 'Section 1: Basics Assessment',
        questions: [
          {
            id: 's1q1',
            question: 'Which of the following is NOT a common SQL Data Type?',
            options: ['INTEGER', 'VARCHAR', 'JSON', 'DATE'],
            correctAnswer: 2
          },
          {
            id: 's1q2',
            question: 'To retrieve all columns from a table named "Customers", which SQL statement would you use?',
            options: ['SELECT All FROM Customers;', 'SELECT * FROM Customers;', 'GET COLUMNS FROM Customers;', 'SELECT (ALL) FROM Customers;'],
            correctAnswer: 1
          },
          {
            id: 's1q3',
            question: 'What is the purpose of the WHERE clause in a SELECT statement?',
            options: ['To specify the table to retrieve data from.', 'To sort the results of the query.', 'To filter rows based on a specified condition.', 'To group rows with the same values.'],
            correctAnswer: 2
          },
          {
            id: 's1q4',
            question: 'Which operator is used for pattern matching in SQL?',
            options: ['=', 'IN', 'BETWEEN', 'LIKE'],
            correctAnswer: 3
          },
          {
            id: 's1q5',
            question: 'What does the ASC keyword do in an ORDER BY clause?',
            options: ['Sorts results in ascending order.', 'Sorts results in alphabetical order.', 'Sorts results in descending order.', 'Counts the number of rows.'],
            correctAnswer: 0
          },
          {
            id: 's1q6',
            question: 'Which DDL statement is used to define a new table structure?',
            options: ['INSERT INTO', 'UPDATE', 'CREATE TABLE', 'DELETE FROM'],
            correctAnswer: 2
          },
          {
            id: 's1q7',
            question: 'Which constraint ensures that all values in a column are unique and not NULL?',
            options: ['UNIQUE', 'NOT NULL', 'PRIMARY KEY', 'FOREIGN KEY'],
            correctAnswer: 2
          },
          {
            id: 's1q8',
            question: 'Which DML statement is used to add new rows to a table?',
            options: ['CREATE TABLE', 'UPDATE', 'INSERT INTO', 'ALTER TABLE'],
            correctAnswer: 2
          },
          {
            id: 's1q9',
            question: 'You want to change a customer\'s address. Which SQL statement would you use?',
            options: ['INSERT INTO', 'DELETE FROM', 'UPDATE', 'ALTER TABLE'],
            correctAnswer: 2
          },
          {
            id: 's1q10',
            question: 'Which aggregate function is used to calculate the average of a numeric column?',
            options: ['SUM()', 'COUNT()', 'MIN()', 'AVG()'],
            correctAnswer: 3
          }
        ]
      },
      projects: [
        {
          id: 's1-project-1',
          title: 'Project 1: Identify Appropriate Data Types',
          description: 'For a simple dataset representing "Movies" with columns like **Movie Title, Director Name, Release Year, Genre, IMDB Rating, Is_Available_On_Streaming**, identify the most appropriate SQL data type for each column and explain your reasoning.',
          checkpoint: 'Provide a table-like structure showing column name and chosen data type, along with a brief justification for each choice (e.g., "Movie Title: VARCHAR(255) because it\'s text of variable length").'
        },
        {
          id: 's1-project-2',
          title: 'Project 2: Querying a Sample Dataset',
          description: 'Given a `Students` table with columns: `StudentID (INT)`, `FirstName (VARCHAR)`, `LastName (VARCHAR)`, `Age (INT)`, `Major (VARCHAR)`, `EnrollmentDate (DATE)`. Write SQL queries to:\n1. Select `FirstName` and `LastName` for all students.\n2. Select all columns for students older than 20.\n3. Select distinct `Major` values.\n4. Select `FirstName`, `LastName`, and `Major` for students whose `Major` is either \'Computer Science\' or \'Engineering\'.\n5. Select students whose `LastName` starts with \'S\'.\n6. Select students ordered by `EnrollmentDate` in descending order, then by `LastName` ascending.',
          checkpoint: 'Submit all 6 SQL queries along with the expected output (or a description of the output) for each query if sample data were provided.'
        },
        {
          id: 's1-project-3',
          title: 'Project 3: Database Schema Creation and Population',
          description: 'Design and create two tables: `Authors` and `Books`. \n- `Authors` should have: `AuthorID` (Primary Key, auto-increment), `FirstName`, `LastName`, `BirthDate`.\n- `Books` should have: `BookID` (Primary Key, auto-increment), `Title`, `PublicationYear`, `AuthorID` (Foreign Key referencing `Authors`), `Price`.\n- Ensure `FirstName` and `LastName` in `Authors` are `NOT NULL`.\n- Populate both tables with at least 3 sample authors and 5 sample books, ensuring some books are by the same author. Write all `CREATE TABLE` and `INSERT INTO` statements.',
          checkpoint: 'Provide the `CREATE TABLE` statements for both `Authors` and `Books`, and the `INSERT INTO` statements used to populate them. Verify the foreign key relationship works by attempting to insert a book with a non-existent `AuthorID` (it should fail).'
        }
      ]
    },
    {
      id: 'section-2-medium',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 's2-lesson-1',
          title: 'Joining Tables (INNER JOIN)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Relational Database concept revisited: Relationships between tables',
              description: 'Revisit how tables in a relational database are connected through shared columns, forming relationships that enable combining data.',
              codeLessons: []
            },
            {
              title: 'INNER JOIN syntax: Combining rows from two or more tables based on a related column',
              description: 'Master the `INNER JOIN` to combine rows from two or more tables when there is a match in a specified common column.',
              codeLessons: [
                {
                  lessonTitle: 'Joining Customers and Orders',
                  codeSnippet: `SELECT\n  C.CustomerName,\n  O.OrderDate,\n  O.TotalAmount\nFROM Customers C\nINNER JOIN Orders O\n  ON C.CustomerID = O.CustomerID;`,
                  explanation: 'This query joins the "Customers" and "Orders" tables to list customer names alongside their order details, only including customers who have placed orders.',
                  imageUrl: 'https://example.com/images/inner-join.png'
                }
              ]
            },
            {
              title: 'Understanding the results of an INNER JOIN',
              description: 'Analyze the output of an `INNER JOIN`, noting that only rows with matching values in both tables are included in the result set.',
              codeLessons: []
            },
            {
              title: 'Joining on multiple conditions',
              description: 'Learn how to specify multiple conditions in the `ON` clause for more precise joining between tables, especially when composite keys are involved.',
              codeLessons: [
                {
                  lessonTitle: 'Joining on multiple columns',
                  codeSnippet: `SELECT *\nFROM OrderItems OI\nINNER JOIN Products P\n  ON OI.ProductID = P.ProductID AND OI.Quantity > 0;`,
                  explanation: 'This query joins OrderItems and Products tables, but only for items where the quantity is greater than zero.',
                  imageUrl: 'https://example.com/images/inner-join-multiple-conditions.png'
                }
              ]
            }
          ]
        },
        {
          id: 's2-lesson-2',
          title: 'Other Join Types (LEFT, RIGHT, FULL OUTER, CROSS)',
          duration: '75 min',
          subtopics: [
            {
              title: 'LEFT JOIN (or LEFT OUTER JOIN): All rows from the left table, matching rows from the right',
              description: 'Understand `LEFT JOIN` (also known as `LEFT OUTER JOIN`), which returns all rows from the left table, and the matching rows from the right table. If there is no match, NULLs are returned for columns from the right table.',
              codeLessons: [
                {
                  lessonTitle: 'Finding customers with or without orders',
                  codeSnippet: `SELECT C.CustomerName, O.OrderID\nFROM Customers C\nLEFT JOIN Orders O\n  ON C.CustomerID = O.CustomerID;`,
                  explanation: 'This query lists all customers. If a customer has an order, their OrderID is shown; otherwise, OrderID will be NULL.',
                  imageUrl: 'https://example.com/images/left-join.png'
                }
              ]
            },
            {
              title: 'RIGHT JOIN (or RIGHT OUTER JOIN): All rows from the right table, matching rows from the left',
              description: 'Learn about `RIGHT JOIN` (or `RIGHT OUTER JOIN`), which is symmetrical to `LEFT JOIN`, returning all rows from the right table and matching rows from the left. Non-matching left rows will have NULLs.',
              codeLessons: [
                {
                  lessonTitle: 'Finding orders with or without customers',
                  codeSnippet: `SELECT C.CustomerName, O.OrderID\nFROM Customers C\nRIGHT JOIN Orders O\n  ON C.CustomerID = O.CustomerID;`,
                  explanation: 'This query lists all orders. If an order has a customer, their name is shown; otherwise, CustomerName will be NULL.',
                  imageUrl: 'https://example.com/images/right-join.png'
                }
              ]
            },
            {
              title: 'FULL OUTER JOIN: All rows when there is a match in either table',
              description: 'Explore `FULL OUTER JOIN`, which returns all rows when there is a match in *either* the left or the right table, combining the results of both `LEFT` and `RIGHT` joins. Non-matching rows will have NULLs on the side without a match.',
              codeLessons: [
                {
                  lessonTitle: 'Combining all customers and all orders',
                  codeSnippet: `SELECT C.CustomerName, O.OrderID\nFROM Customers C\nFULL OUTER JOIN Orders O\n  ON C.CustomerID = O.CustomerID;`,
                  explanation: 'This query shows all customers and all orders, with NULLs where there is no match on the other side.',
                  imageUrl: 'https://example.com/images/full-outer-join.png'
                }
              ]
            },
            {
              title: 'CROSS JOIN: Cartesian product of two tables',
              description: 'Understand `CROSS JOIN`, which produces the Cartesian product of two tables, meaning every row from the first table is combined with every row from the second table.',
              codeLessons: [
                {
                  lessonTitle: 'Cross joining colors and sizes',
                  codeSnippet: `SELECT C.ColorName, S.SizeName\nFROM Colors C\nCROSS JOIN Sizes S;`,
                  explanation: 'If "Colors" has 3 rows and "Sizes" has 4 rows, this will result in 12 rows, showing every possible color-size combination.',
                  imageUrl: 'https://example.com/images/cross-join.png'
                }
              ]
            },
            {
              title: 'Understanding NULLs in outer joins',
              description: 'Pay close attention to how `NULL` values appear in the result set when using outer joins (`LEFT`, `RIGHT`, `FULL OUTER`) to indicate non-matching rows.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's2-lesson-3',
          title: 'Grouping Data (GROUP BY, HAVING)',
          duration: '60 min',
          subtopics: [
            {
              title: 'The GROUP BY clause: Grouping rows that have the same values in specified columns',
              description: 'Learn how the `GROUP BY` clause is used with aggregate functions to group rows that have the same values in one or more columns into summary rows.',
              codeLessons: [
                {
                  lessonTitle: 'Counting orders per customer',
                  codeSnippet: `SELECT CustomerID, COUNT(OrderID) AS NumberOfOrders\nFROM Orders\nGROUP BY CustomerID;`,
                  explanation: 'This query counts the total number of orders placed by each individual customer.',
                  imageUrl: 'https://example.com/images/group-by-count.png'
                }
              ]
            },
            {
              title: 'Using GROUP BY with aggregate functions',
              description: 'See how `GROUP BY` empowers aggregate functions (like `SUM`, `AVG`, `COUNT`) to perform calculations on each group independently.',
              codeLessons: [
                {
                  lessonTitle: 'Total sales by product category',
                  codeSnippet: `SELECT Category, SUM(Price) AS TotalSales\nFROM Products\nGROUP BY Category;`,
                  explanation: 'This query calculates the total sales for each distinct product category.',
                  imageUrl: 'https://example.com/images/group-by-sum.png'
                }
              ]
            },
            {
              title: 'The HAVING clause: Filtering groups based on aggregate conditions',
              description: 'Discover the `HAVING` clause, which is used to filter groups created by `GROUP BY` based on conditions involving aggregate functions, similar to how `WHERE` filters individual rows.',
              codeLessons: [
                {
                  lessonTitle: 'Filtering groups with HAVING',
                  codeSnippet: `SELECT Category, COUNT(*) AS ProductCount\nFROM Products\nGROUP BY Category\nHAVING COUNT(*) > 5;`,
                  explanation: 'This query finds categories that have more than 5 products.',
                  imageUrl: 'https://example.com/images/having-clause.png'
                }
              ]
            },
            {
              title: 'Order of clauses in a SELECT statement: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY',
              description: 'Understand the logical order in which SQL clauses are processed, which is crucial for writing correct and efficient queries.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's2-lesson-4',
          title: 'Subqueries',
          duration: '75 min',
          subtopics: [
            {
              title: 'Scalar Subqueries: Returning a single value',
              description: 'Learn about scalar subqueries, which return a single value and can be used almost anywhere a single value is expected in an SQL statement.',
              codeLessons: [
                {
                  lessonTitle: 'Finding products more expensive than average',
                  codeSnippet: `SELECT ProductName, Price\nFROM Products\nWHERE Price > (SELECT AVG(Price) FROM Products);`,
                  explanation: 'This query uses a scalar subquery to find products whose price is greater than the overall average product price.',
                  imageUrl: 'https://example.com/images/scalar-subquery.png'
                }
              ]
            },
            {
              title: 'Row Subqueries: Returning a single row (multiple columns)',
              description: 'Understand row subqueries, which return a single row with one or more columns, often used in `WHERE` clauses for row comparisons.',
              codeLessons: [
                {
                  lessonTitle: 'Finding orders with specific customer and amount',
                  codeSnippet: `SELECT OrderID\nFROM Orders\nWHERE (CustomerID, TotalAmount) = (SELECT CustomerID, MAX(TotalAmount) FROM Orders WHERE OrderDate = '2023-01-01');`,
                  explanation: 'This query finds the order ID for the highest single order amount placed on Jan 1, 2023, by a specific customer.',
                  imageUrl: 'https://example.com/images/row-subquery.png'
                }
              ]
            },
            {
              title: 'Column Subqueries: Returning a single column (multiple rows)',
              description: 'Explore column subqueries, which return a single column but potentially multiple rows, commonly used with operators like `IN` or `EXISTS`.',
              codeLessons: [
                {
                  lessonTitle: 'Finding customers who placed orders',
                  codeSnippet: `SELECT CustomerName\nFROM Customers\nWHERE CustomerID IN (SELECT CustomerID FROM Orders);`,
                  explanation: 'This query selects the names of customers who have at least one order.',
                  imageUrl: 'https://example.com/images/column-subquery.png'
                }
              ]
            },
            {
              title: 'Table Subqueries (Derived Tables): Returning a table, used in FROM clause',
              description: 'Learn about table subqueries (also known as derived tables), which return a result set that can be treated as a temporary table in the `FROM` clause.',
              codeLessons: [
                {
                  lessonTitle: 'Using a derived table for aggregated data',
                  codeSnippet: `SELECT\n  T.Category,\n  T.AveragePrice\nFROM (\n  SELECT Category, AVG(Price) AS AveragePrice\n  FROM Products\n  GROUP BY Category\n) AS T\nWHERE T.AveragePrice > 100;`,
                  explanation: 'This query calculates the average price per category and then filters for categories with an average price over 100, using the inner query as a derived table.',
                  imageUrl: 'https://example.com/images/derived-table.png'
                }
              ]
            },
            {
              title: 'Operators with subqueries: IN, NOT IN, EXISTS, NOT EXISTS, ANY, ALL',
              description: 'Understand how various operators (`IN`, `NOT IN`, `EXISTS`, `NOT EXISTS`, `ANY`, `ALL`) are used effectively with subqueries to achieve complex filtering and data retrieval.',
              codeLessons: [
                {
                  lessonTitle: 'Using EXISTS with a subquery',
                  codeSnippet: `SELECT CustomerName\nFROM Customers C\nWHERE EXISTS (SELECT 1 FROM Orders O WHERE O.CustomerID = C.CustomerID);`,
                  explanation: 'This query returns customers who have placed at least one order, using `EXISTS` for efficient checking.',
                  imageUrl: 'https://example.com/images/exists-subquery.png'
                }
              ]
            }
          ]
        },
        {
          id: 's2-lesson-5',
          title: 'Set Operators (UNION, INTERSECT, EXCEPT)',
          duration: '60 min',
          subtopics: [
            {
              title: 'UNION operator: Combining the result sets of two or more SELECT statements (removes duplicates)',
              description: 'Learn to use the `UNION` operator to combine the results of two or more `SELECT` statements into a single result set, automatically removing duplicate rows.',
              codeLessons: [
                {
                  lessonTitle: 'Combining customer and employee names',
                  codeSnippet: `SELECT CustomerName AS Name FROM Customers\nUNION\nSELECT EmployeeName AS Name FROM Employees;`,
                  explanation: 'This query combines distinct names from both the Customers and Employees tables into one list.',
                  imageUrl: 'https://example.com/images/union-operator.png'
                }
              ]
            },
            {
              title: 'UNION ALL: Combining result sets without removing duplicates',
              description: 'Understand `UNION ALL`, which combines result sets like `UNION` but includes all rows, including duplicates, offering potentially better performance.',
              codeLessons: [
                {
                  lessonTitle: 'Combining all product names (including duplicates)',
                  codeSnippet: `SELECT ProductName FROM Products_Archived\nUNION ALL\nSELECT ProductName FROM Products_Current;`,
                  explanation: 'This query combines all product names from two tables, retaining duplicates if they exist.',
                  imageUrl: 'https://example.com/images/union-all.png'
                }
              ]
            },
            {
              title: 'INTERSECT: Returning common rows between two SELECT statements',
              description: 'Explore `INTERSECT`, which returns only the rows that are common to both `SELECT` statements.',
              codeLessons: [
                {
                  lessonTitle: 'Finding common IDs between two lists',
                  codeSnippet: `SELECT ID FROM ListA\nINTERSECT\nSELECT ID FROM ListB;`,
                  explanation: 'This query returns IDs that are present in both ListA and ListB.',
                  imageUrl: 'https://example.com/images/intersect-operator.png'
                }
              ]
            },
            {
              title: 'EXCEPT (or MINUS in Oracle, PostgreSQL): Returning rows from the first SELECT that are not in the second',
              description: 'Learn about `EXCEPT` (or `MINUS` in some RDBMS), which returns rows from the first `SELECT` statement that are not present in the second `SELECT` statement.',
              codeLessons: [
                {
                  lessonTitle: 'Finding products in current stock but not archived',
                  codeSnippet: `SELECT ProductID FROM Products_Current\nEXCEPT\nSELECT ProductID FROM Products_Archived;`,
                  explanation: 'This query finds product IDs that are only in the "Products_Current" table and not in "Products_Archived".',
                  imageUrl: 'https://example.com/images/except-operator.png'
                }
              ]
            },
            {
              title: 'Rules for using set operators (same number of columns, compatible data types)',
              description: 'Understand the crucial rules for using set operators: all participating `SELECT` statements must have the same number of columns, and corresponding columns must have compatible data types.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's2-lesson-6',
          title: 'Data Integrity & Constraints Deep Dive',
          duration: '60 min',
          subtopics: [
            {
              title: 'FOREIGN KEY constraint: Enforcing referential integrity between tables',
              description: 'Dive deep into `FOREIGN KEY` constraints, which maintain referential integrity by linking a column (or columns) in one table to the primary key of another table.',
              codeLessons: [
                {
                  lessonTitle: 'Defining a FOREIGN KEY',
                  codeSnippet: `CREATE TABLE Orders (\n  OrderID INTEGER PRIMARY KEY,\n  OrderDate DATE,\n  CustomerID INTEGER,\n  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)\n);`,
                  explanation: 'This creates an "Orders" table where "CustomerID" is a foreign key, ensuring that every order references an existing customer.',
                  imageUrl: 'https://example.com/images/foreign-key.png'
                }
              ]
            },
            {
              title: 'ON DELETE CASCADE, ON UPDATE CASCADE: Cascading actions for foreign keys',
              description: 'Explore cascading actions (`ON DELETE CASCADE`, `ON UPDATE CASCADE`) that automatically propagate changes from the parent table to related rows in the child table.',
              codeLessons: [
                {
                  lessonTitle: 'ON DELETE CASCADE example',
                  codeSnippet: `ALTER TABLE Orders\nADD CONSTRAINT FK_CustomerOrder\nFOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)\nON DELETE CASCADE;`,
                  explanation: 'If a customer is deleted from the "Customers" table, all their associated orders in the "Orders" table will also be automatically deleted.',
                  imageUrl: 'https://example.com/images/on-delete-cascade.png'
                }
              ]
            },
            {
              title: 'ON DELETE SET NULL, ON DELETE RESTRICT',
              description: 'Understand `ON DELETE SET NULL` (sets foreign key to NULL if parent row is deleted) and `ON DELETE RESTRICT` (prevents deletion of parent row if child rows exist), providing different integrity behaviors.',
              codeLessons: []
            },
            {
              title: 'CHECK constraint: Enforcing domain integrity',
              description: 'Use `CHECK` constraints to enforce domain integrity by limiting the range of values that can be placed in a column.',
              codeLessons: [
                {
                  lessonTitle: 'Adding a CHECK constraint for age',
                  codeSnippet: `ALTER TABLE Employees\nADD CONSTRAINT CHK_Age CHECK (Age >= 18);`,
                  explanation: 'This adds a constraint ensuring that the "Age" column in the "Employees" table must always be 18 or greater.',
                  imageUrl: 'https://example.com/images/check-constraint.png'
                }
              ]
            },
            {
              title: 'DEFAULT constraint: Setting default values for columns',
              description: 'Apply `DEFAULT` constraints to automatically assign a default value to a column when no value is explicitly provided during an `INSERT` operation.',
              codeLessons: [
                {
                  lessonTitle: 'Adding a DEFAULT constraint for status',
                  codeSnippet: `ALTER TABLE Tasks\nADD Status VARCHAR(50) DEFAULT 'Pending';`,
                  explanation: 'When a new task is inserted, if "Status" is not specified, it will automatically be set to \'Pending\'.',
                  imageUrl: 'https://example.com/images/default-constraint.png'
                }
              ]
            }
          ]
        },
        {
          id: 's2-lesson-7',
          title: 'Views',
          duration: '45 min',
          subtopics: [
            {
              title: 'CREATE VIEW statement: Creating virtual tables based on a SELECT query',
              description: 'Learn to use `CREATE VIEW` to create virtual tables that do not store data themselves but are instead derived from the result set of a `SELECT` query.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a view for active customers',
                  codeSnippet: `CREATE VIEW ActiveCustomers AS\nSELECT CustomerID, CustomerName, Email\nFROM Customers\nWHERE IsActive = TRUE;`,
                  explanation: 'This view provides a simplified, filtered list of only active customers.',
                  imageUrl: 'https://example.com/images/create-view.png'
                }
              ]
            },
            {
              title: 'Querying views: Treating views like regular tables',
              description: 'Understand that once created, views can be queried just like regular tables using `SELECT` statements, simplifying complex data access.',
              codeLessons: [
                {
                  lessonTitle: 'Querying the ActiveCustomers view',
                  codeSnippet: `SELECT CustomerName, Email\nFROM ActiveCustomers\nWHERE CustomerName LIKE 'A%';`,
                  explanation: 'This query selects customer names and emails from the "ActiveCustomers" view, filtering for names starting with \'A\'.',
                  imageUrl: 'https://example.com/images/query-view.png'
                }
              ]
            },
            {
              title: 'Updatable views: Limitations and considerations',
              description: 'Explore the concept of updatable views and their limitations, noting that not all views can be directly modified (INSERT, UPDATE, DELETE) through the view itself.',
              codeLessons: []
            },
            {
              title: 'Benefits of views: Security, simplifying complex queries, data abstraction',
              description: 'Grasp the advantages of using views, including enhancing security by restricting access to underlying tables, simplifying complex joins/subqueries, and providing data abstraction.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's2-lesson-8',
          title: 'Indexes',
          duration: '60 min',
          subtopics: [
            {
              title: 'What are indexes? How they improve query performance',
              description: 'Understand what indexes are (special lookup tables) and how they significantly speed up data retrieval operations by allowing the database to quickly locate data without scanning entire tables.',
              codeLessons: []
            },
            {
              title: 'Clustered vs. Non-Clustered Indexes (conceptual differences and use cases)',
              description: 'Distinguish between clustered indexes (which dictate the physical storage order of data and can only be one per table) and non-clustered indexes (which create a separate logical ordering and can have many per table).',
              codeLessons: []
            },
            {
              title: 'CREATE INDEX syntax: Creating single-column and multi-column indexes',
              description: 'Learn the `CREATE INDEX` syntax to build indexes on single columns for simple lookups or on multiple columns for composite searches.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a single-column index',
                  codeSnippet: `CREATE INDEX idx_product_name ON Products (ProductName);`,
                  explanation: 'This creates an index on the "ProductName" column to speed up searches based on product names.',
                  imageUrl: 'https://example.com/images/create-index-single.png'
                },
                {
                  lessonTitle: 'Creating a multi-column index',
                  codeSnippet: `CREATE INDEX idx_customer_state_city ON Customers (State, City);`,
                  explanation: 'This creates a composite index on "State" and "City" for queries filtering by both columns.',
                  imageUrl: 'https://example.com/images/create-index-multi.png'
                }
              ]
            },
            {
              title: 'When to use indexes (columns in WHERE, ORDER BY, JOIN clauses)',
              description: 'Identify common scenarios where indexes are beneficial: on columns frequently used in `WHERE` clauses, `ORDER BY` clauses, and `JOIN` conditions.',
              codeLessons: []
            },
            {
              title: 'Trade-offs of using indexes (storage, write performance)',
              description: 'Understand the overhead associated with indexes: they consume disk space and can slow down data modification operations (`INSERT`, `UPDATE`, `DELETE`) because the index itself must also be updated.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's2-lesson-9',
          title: 'Transactions',
          duration: '60 min',
          subtopics: [
            {
              title: 'ACID properties: Atomicity, Consistency, Isolation, Durability',
              description: 'Learn the fundamental ACID properties of database transactions: **A**tomicity (all or nothing), **C**onsistency (data remains valid), **I**solation (concurrent transactions don\'t interfere), and **D**urability (committed changes are permanent).',
              codeLessons: []
            },
            {
              title: 'BEGIN TRANSACTION (or START TRANSACTION), COMMIT, ROLLBACK statements',
              description: 'Master the core commands for transaction control: `BEGIN TRANSACTION` (to start), `COMMIT` (to save changes permanently), and `ROLLBACK` (to undo changes).',
              codeLessons: [
                {
                  lessonTitle: 'Simulating a bank transfer with a transaction',
                  codeSnippet: `BEGIN TRANSACTION;\n\nUPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;\n\n-- If both updates succeed\nCOMMIT;\n\n-- If an error occurs, undo both updates\n-- ROLLBACK;`,
                  explanation: 'This code block demonstrates how a transaction ensures that two related updates (like a money transfer) either both complete successfully or both are entirely undone, maintaining data consistency.',
                  imageUrl: 'https://example.com/images/transaction-example.png'
                }
              ]
            },
            {
              title: 'Importance of transactions for data integrity',
              description: 'Grasp why transactions are crucial for maintaining data integrity, especially in multi-step operations where all parts must succeed or fail together.',
              codeLessons: []
            },
            {
              title: 'Concurrency issues (brief intro): Dirty Reads, Non-Repeatable Reads, Phantom Reads',
              description: 'Get a brief overview of common concurrency problems (Dirty Reads, Non-Repeatable Reads, Phantom Reads) that transactions aim to mitigate when multiple users access data simultaneously.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's2-lesson-10',
          title: 'Window Functions (Introduction)',
          duration: '75 min',
          subtopics: [
            {
              title: 'What are Window Functions? Performing calculations across a set of table rows related to the current row',
              description: 'Introduce window functions as powerful SQL features that perform calculations across a set of table rows that are related to the current row, without collapsing rows like `GROUP BY`.',
              codeLessons: []
            },
            {
              title: 'OVER() clause: Defining the window (partition and order)',
              description: 'Learn the crucial `OVER()` clause, which defines the "window" or set of rows over which the window function operates. It can include `PARTITION BY` (to divide rows into groups) and `ORDER BY` (to sort within each partition).',
              codeLessons: [
                {
                  lessonTitle: 'Basic ROW_NUMBER() over a window',
                  codeSnippet: `SELECT\n  EmployeeName,\n  Department,\n  Salary,\n  ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankInDepartment\nFROM Employees;`,
                  explanation: 'This query assigns a rank to each employee based on their salary within their respective department. The `PARTITION BY Department` defines the groups, and `ORDER BY Salary DESC` sorts within those groups.',
                  imageUrl: 'https://example.com/images/window-function-row-number.png'
                }
              ]
            },
            {
              title: 'Ranking Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE()',
              description: 'Explore various ranking window functions: `ROW_NUMBER()` (assigns unique sequential integers), `RANK()` (assigns the same rank to ties, leaving gaps), `DENSE_RANK()` (assigns the same rank to ties, no gaps), and `NTILE()` (distributes rows into a specified number of groups).',
              codeLessons: [
                {
                  lessonTitle: 'Comparing RANK and DENSE_RANK',
                  codeSnippet: `SELECT\n  ProductName,\n  Price,\n  RANK() OVER (ORDER BY Price DESC) AS PriceRank,\n  DENSE_RANK() OVER (ORDER BY Price DESC) AS PriceDenseRank\nFROM Products;`,
                  explanation: 'This example shows how `RANK()` and `DENSE_RANK()` handle ties differently when ranking products by price.',
                  imageUrl: 'https://example.com/images/rank-dense-rank.png'
                }
              ]
            },
            {
              title: 'Use cases for ranking and numbering within partitions',
              description: 'Understand practical applications for window functions, such as finding the top N items per group, assigning sequential numbers to records within categories, or identifying duplicates.',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 's2-quiz',
        title: 'Section 2: Medium Assessment',
        questions: [
          {
            id: 's2q1',
            question: 'Which type of JOIN returns only the rows that have matching values in both tables?',
            options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
            correctAnswer: 2
          },
          {
            id: 's2q2',
            question: 'You want to list all customers and their orders, including customers who have no orders. Which JOIN type is most appropriate?',
            options: ['INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN', 'CROSS JOIN'],
            correctAnswer: 2
          },
          {
            id: 's2q3',
            question: 'Which clause is used to filter groups based on aggregate conditions?',
            options: ['WHERE', 'GROUP BY', 'ORDER BY', 'HAVING'],
            correctAnswer: 3
          },
          {
            id: 's2q4',
            question: 'A subquery that returns a single value is known as a:',
            options: ['Row Subquery', 'Column Subquery', 'Scalar Subquery', 'Table Subquery'],
            correctAnswer: 2
          },
          {
            id: 's2q5',
            question: 'Which set operator combines the result sets of two SELECT statements and removes duplicate rows?',
            options: ['UNION ALL', 'INTERSECT', 'EXCEPT', 'UNION'],
            correctAnswer: 3
          },
          {
            id: 's2q6',
            question: 'Which constraint enforces referential integrity between tables by linking a column to a primary key?',
            options: ['PRIMARY KEY', 'UNIQUE', 'CHECK', 'FOREIGN KEY'],
            correctAnswer: 3
          },
          {
            id: 's2q7',
            question: 'What happens to child rows when a parent row is deleted if `ON DELETE CASCADE` is set on the foreign key?',
            options: ['Child rows are updated to NULL.', 'Child rows are also deleted.', 'Deletion of the parent row is prevented.', 'Nothing happens to child rows.'],
            correctAnswer: 1
          },
          {
            id: 's2q8',
            question: 'What is a SQL View?',
            options: ['A physical table stored on disk.', 'A stored procedure for data modification.', 'A virtual table based on a SELECT query.', 'An index used for faster data retrieval.'],
            correctAnswer: 2
          },
          {
            id: 's2q9',
            question: 'Which property of ACID ensures that committed changes are permanent?',
            options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
            correctAnswer: 3
          },
          {
            id: 's2q10',
            question: 'In a window function, what does `PARTITION BY` do within the `OVER()` clause?',
            options: ['Sorts the rows within the entire result set.', 'Filters the rows before the window function is applied.', 'Divides the rows into groups (partitions) on which the function operates independently.', 'Limits the number of rows returned by the function.'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 's2-project-1',
          title: 'Project 1: Customer Order Analysis with Joins',
          description: 'You have two tables: `Customers` (`CustomerID`, `CustomerName`, `Email`) and `Orders` (`OrderID`, `CustomerID`, `OrderDate`, `TotalAmount`).\n\n1. Write a query to list all orders with the corresponding customer\'s name.\n2. Write a query to list all customers and any orders they have placed. Include customers who have not placed any orders.\n3. Write a query to find all orders placed in 2023 that had a total amount greater than $100, showing the customer name and order details.',
          checkpoint: 'Provide the SQL queries for all three scenarios and describe the expected differences in results, especially between queries 1 and 2.'
        },
        {
          id: 's2-project-2',
          title: 'Project 2: Sales Aggregation and Filtering',
          description: 'Given a `Sales` table with `SaleID`, `ProductID`, `SaleDate`, `Quantity`, `PricePerUnit`. Calculate:\n1. The total quantity sold and total revenue for each `ProductID`.\n2. The average `PricePerUnit` for sales that occurred in Q1 (January-March) of the current year.\n3. Product categories (assume a `Products` table is available with `ProductID`, `ProductName`, `Category`) that have generated more than $5000 in total revenue. Join `Sales` and `Products` for this.',
          checkpoint: 'Submit the SQL queries for each calculation. Ensure proper use of `GROUP BY` and `HAVING` where necessary. Explain the output of the query that uses `HAVING`.'
        },
        {
          id: 's2-project-3',
          title: 'Project 3: Advanced Filtering with Subqueries and Set Operators',
          description: 'You have `Employees` table (`EmployeeID`, `Name`, `Salary`, `DepartmentID`) and `Departments` table (`DepartmentID`, `DepartmentName`).\n\n1. Find all employees whose salary is higher than the average salary of their respective department, using a subquery.\n2. Find all employees who are NOT in the \'Sales\' department, using a subquery with `NOT IN`.\n3. You have a `HighPerformers` table (`EmployeeID`) and `RecentlyPromoted` table (`EmployeeID`). Find the `EmployeeID` of employees who are both high performers AND recently promoted using a set operator.',
          checkpoint: 'Provide the SQL queries for all three tasks. For the first query, explain why a subquery is effective here. For the third query, justify your choice of set operator.'
        }
      ]
    },
    {
      id: 'section-3-advanced',
      title: 'Section 3: Advanced (Senior-Level, System-Oriented)',
      level: 'advanced',
      lessons: [
        {
          id: 's3-lesson-1',
          title: 'Advanced Window Functions & Analytical Functions',
          duration: '90 min',
          subtopics: [
            {
              title: 'Aggregate Window Functions: SUM() OVER(), AVG() OVER(), COUNT() OVER(), MIN() OVER(), MAX() OVER()',
              description: 'Extend your knowledge of aggregate functions to use them as window functions, allowing you to calculate sums, averages, counts, minimums, and maximums over defined partitions without grouping the entire result set.',
              codeLessons: [
                {
                  lessonTitle: 'Calculating a running total of sales',
                  codeSnippet: `SELECT\n  SaleDate,\n  SaleAmount,\n  SUM(SaleAmount) OVER (ORDER BY SaleDate) AS RunningTotalSales\nFROM DailySales;`,
                  explanation: 'This query calculates a running total of sales, where each row shows the cumulative sum of sales up to that date. `ORDER BY SaleDate` defines the order of accumulation.',
                  imageUrl: 'https://example.com/images/sum-over.png'
                },
                {
                  lessonTitle: 'Calculating average salary by department',
                  codeSnippet: `SELECT\n  EmployeeName,\n  Department,\n  Salary,\n  AVG(Salary) OVER (PARTITION BY Department) AS AvgDeptSalary\nFROM Employees;`,
                  explanation: 'This query displays each employee\'s salary alongside the average salary for their respective department. Notice that it does not collapse the rows.',
                  imageUrl: 'https://example.com/images/avg-over-partition.png'
                }
              ]
            },
            {
              title: 'Analytic Functions: LAG(), LEAD() (accessing previous/next rows)',
              description: 'Discover analytic functions like `LAG()` and `LEAD()`, which allow you to access data from previous or subsequent rows within the same result set, useful for trend analysis and comparisons.',
              codeLessons: [
                {
                  lessonTitle: 'Comparing current sales to previous day\'s sales',
                  codeSnippet: `SELECT\n  SaleDate,\n  DailySales,\n  LAG(DailySales, 1, 0) OVER (ORDER BY SaleDate) AS PreviousDaySales,\n  DailySales - LAG(DailySales, 1, 0) OVER (ORDER BY SaleDate) AS DailySalesChange\nFROM SalesData;`,
                  explanation: 'This query uses `LAG()` to fetch the previous day\'s sales, enabling the calculation of daily sales changes.',
                  imageUrl: 'https://example.com/images/lag-lead.png'
                }
              ]
            },
            {
              title: 'FIRST_VALUE(), LAST_VALUE()',
              description: 'Learn `FIRST_VALUE()` and `LAST_VALUE()` to retrieve the first or last value in a specified window of rows, often used in conjunction with framing clauses.',
              codeLessons: [
                {
                  lessonTitle: 'Finding the first and last order amount per customer',
                  codeSnippet: `SELECT\n  CustomerID,\n  OrderDate,\n  OrderAmount,\n  FIRST_VALUE(OrderAmount) OVER (PARTITION BY CustomerID ORDER BY OrderDate) AS FirstOrderAmount,\n  LAST_VALUE(OrderAmount) OVER (PARTITION BY CustomerID ORDER BY OrderDate ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS LastOrderAmount\nFROM Orders;`,
                  explanation: 'This query uses `FIRST_VALUE()` and `LAST_VALUE()` to get the amount of the first and last order for each customer.',
                  imageUrl: 'https://example.com/images/first-last-value.png'
                }
              ]
            },
            {
              title: 'Framing Clause: ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW, RANGE BETWEEN',
              description: 'Understand the "framing clause" within `OVER()`, which allows precise definition of the window frame for functions, such as `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` for cumulative sums or `RANGE BETWEEN` for value-based frames.',
              codeLessons: []
            },
            {
              title: 'Use cases for cumulative sums, moving averages, etc.',
              description: 'Explore practical applications of advanced window functions, including calculating cumulative sums (running totals), moving averages over time series data, and percentile ranks.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-2',
          title: 'Common Table Expressions (CTEs)',
          duration: '60 min',
          subtopics: [
            {
              title: 'WITH clause syntax: Defining temporary, named result sets',
              description: 'Learn the `WITH` clause to define Common Table Expressions (CTEs), which are temporary, named result sets that you can reference within a single `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement.',
              codeLessons: [
                {
                  lessonTitle: 'Using a CTE to find high-value customers',
                  codeSnippet: `WITH CustomerOrderTotals AS (\n  SELECT CustomerID, SUM(TotalAmount) AS TotalSpent\n  FROM Orders\n  GROUP BY CustomerID\n)\nSELECT C.CustomerName, COT.TotalSpent\nFROM Customers C\nJOIN CustomerOrderTotals COT\n  ON C.CustomerID = COT.CustomerID\nWHERE COT.TotalSpent > 1000;`,
                  explanation: 'This CTE first calculates the total spent by each customer, and then this temporary result set is used to join with the Customers table to find high-value customers.',
                  imageUrl: 'https://example.com/images/cte-basic.png'
                }
              ]
            },
            {
              title: 'Benefits of CTEs: Readability, reusability, modularity of complex queries',
              description: 'Understand how CTEs improve query readability by breaking down complex queries into logical, manageable steps, promote reusability within a single query, and enhance modularity.',
              codeLessons: []
            },
            {
              title: 'Recursive CTEs: Querying hierarchical data (e.g., organizational charts, bill of materials)',
              description: 'Dive into recursive CTEs, a powerful feature for querying hierarchical or graph-like data structures, such as organizational charts, bill of materials, or network paths.',
              codeLessons: [
                {
                  lessonTitle: 'Traversing an organizational hierarchy with a recursive CTE',
                  codeSnippet: `WITH OrganizationHierarchy AS (\n  SELECT EmployeeID, Name, ManagerID, 0 AS Level\n  FROM Employees\n  WHERE ManagerID IS NULL -- Anchor member: top-level employees\n\n  UNION ALL\n\n  SELECT E.EmployeeID, E.Name, E.ManagerID, OH.Level + 1\n  FROM Employees E\n  JOIN OrganizationHierarchy OH ON E.ManagerID = OH.EmployeeID -- Recursive member\n)\nSELECT *\nFROM OrganizationHierarchy;`,
                  explanation: 'This recursive CTE starts from top-level employees and then iteratively adds their subordinates, building a full organizational hierarchy with levels.',
                  imageUrl: 'https://example.com/images/recursive-cte.png'
                }
              ]
            },
            {
              title: 'Nested CTEs',
              description: 'Learn that you can define multiple CTEs within a single `WITH` clause, and later CTEs can reference previously defined CTEs, enabling even more complex query modularity.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-3',
          title: 'Stored Procedures & Functions',
          duration: '75 min',
          subtopics: [
            {
              title: 'CREATE PROCEDURE syntax: Defining reusable blocks of SQL code',
              description: 'Learn the `CREATE PROCEDURE` syntax to define stored procedures, which are pre-compiled collections of SQL statements stored on the database server, designed for specific tasks.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a stored procedure to get customer orders',
                  codeSnippet: `CREATE PROCEDURE GetCustomerOrders (@CustomerID INT)\nAS\nBEGIN\n  SELECT O.OrderID, O.OrderDate, O.TotalAmount\n  FROM Orders O\n  WHERE O.CustomerID = @CustomerID;\nEND;`,
                  explanation: 'This stored procedure takes a CustomerID as input and returns all orders for that customer.',
                  imageUrl: 'https://example.com/images/create-procedure.png'
                }
              ]
            },
            {
              title: 'Input and Output Parameters in procedures',
              description: 'Understand how to define and use input parameters (to pass values into the procedure) and output parameters (to return values from the procedure).',
              codeLessons: [
                {
                  lessonTitle: 'Procedure with input and output parameters',
                  codeSnippet: `CREATE PROCEDURE AddNewCustomer (\n  @Name VARCHAR(100),\n  @Email VARCHAR(255),\n  @NewCustomerID INT OUTPUT\n)\nAS\nBEGIN\n  INSERT INTO Customers (CustomerName, Email) VALUES (@Name, @Email);\n  SET @NewCustomerID = SCOPE_IDENTITY(); -- For SQL Server\nEND;`,
                  explanation: 'This procedure adds a new customer and returns their newly generated `CustomerID` through an output parameter.',
                  imageUrl: 'https://example.com/images/procedure-parameters.png'
                }
              ]
            },
            {
              title: 'CREATE FUNCTION syntax: Defining user-defined functions',
              description: 'Learn `CREATE FUNCTION` to define user-defined functions (UDFs), which are similar to stored procedures but are designed to return a single scalar value or a table.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a scalar function to calculate total order price',
                  codeSnippet: `CREATE FUNCTION CalculateOrderTotal (@OrderID INT)\nRETURNS DECIMAL(10, 2)\nAS\nBEGIN\n  DECLARE @Total DECIMAL(10, 2);\n  SELECT @Total = SUM(Quantity * PricePerUnit)\n  FROM OrderItems\n  WHERE OrderID = @OrderID;\n  RETURN ISNULL(@Total, 0);\nEND;`,
                  explanation: 'This scalar function takes an OrderID and returns the calculated total amount for that order.',
                  imageUrl: 'https://example.com/images/create-function.png'
                }
              ]
            },
            {
              title: 'Scalar Functions vs. Table-Valued Functions',
              description: 'Differentiate between scalar functions (return a single value) and table-valued functions (return a table result set).',
              codeLessons: []
            },
            {
              title: 'Benefits: Modularity, security, performance, reduced network traffic',
              description: 'Understand the advantages of using stored procedures and functions: modular code, enhanced security (via permissions), potential performance benefits (cached execution plans), and reduced network traffic.',
              codeLessons: []
            },
            {
              title: 'Differences between Stored Procedures and Functions',
              description: 'Summarize the key differences: procedures can perform DML and DDL, do not have to return a value, can have output parameters; functions return a value (scalar or table), can be used in `SELECT`, `WHERE`, `HAVING` clauses, and generally cannot perform DML/DDL.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-4',
          title: 'Triggers',
          duration: '60 min',
          subtopics: [
            {
              title: 'CREATE TRIGGER syntax: Automating actions in response to DML events (INSERT, UPDATE, DELETE)',
              description: 'Learn the `CREATE TRIGGER` syntax to define database triggers, which are special stored procedures that automatically execute (fire) when a specific data modification event (INSERT, UPDATE, or DELETE) occurs on a specified table.',
              codeLessons: [
                {
                  lessonTitle: 'Creating an audit trigger for product price changes',
                  codeSnippet: `CREATE TRIGGER trg_ProductPriceChangeAudit\nON Products\nAFTER UPDATE\nAS\nBEGIN\n  IF UPDATE(Price)\n  BEGIN\n    INSERT INTO ProductAuditLog (ProductID, OldPrice, NewPrice, ChangeDate)\n    SELECT d.ProductID, d.Price, i.Price, GETDATE()\n    FROM deleted d JOIN inserted i ON d.ProductID = i.ProductID;\n  END\nEND;`,
                  explanation: 'This trigger fires after an `UPDATE` on the `Products` table. If the `Price` column is updated, it logs the old and new prices to an `ProductAuditLog` table.',
                  imageUrl: 'https://example.com/images/create-trigger.png'
                }
              ]
            },
            {
              title: 'BEFORE vs. AFTER triggers',
              description: 'Distinguish between `BEFORE` triggers (execute before the DML operation, allowing modification of data before it\'s saved) and `AFTER` triggers (execute after the DML operation, typically for logging or secondary actions).',
              codeLessons: []
            },
            {
              title: 'FOR EACH ROW vs. FOR EACH STATEMENT (depending on RDBMS)',
              description: 'Understand how triggers can fire for each affected row (`FOR EACH ROW` in MySQL/PostgreSQL) or once for the entire statement (`FOR EACH STATEMENT` in PostgreSQL, default in SQL Server).',
              codeLessons: []
            },
            {
              title: 'Use cases: Auditing, data validation, enforcing complex business rules, maintaining derived data',
              description: 'Explore practical applications of triggers, such as automatically logging data changes, enforcing complex business rules that cannot be handled by simple constraints, and maintaining calculated or derived data.',
              codeLessons: []
            },
            {
              title: 'Potential pitfalls and considerations (recursion, performance impact)',
              description: 'Be aware of potential issues with triggers, including recursive triggers (where a trigger\'s action causes it to fire again), and the performance impact due to their automatic execution.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-5',
          title: 'Advanced Data Types & JSON Support',
          duration: '60 min',
          subtopics: [
            {
              title: 'Specialized Data Types (conceptual, depends on RDBMS): ENUM, SET, GEOMETRY (Spatial)',
              description: 'Get a conceptual understanding of specialized data types available in specific RDBMS, such as `ENUM` (for a predefined list of string values), `SET` (for a set of string values), and `GEOMETRY` (for spatial/geographical data).',
              codeLessons: []
            },
            {
              title: 'JSON Data Type (for databases supporting it, e.g., MySQL, PostgreSQL, SQL Server)',
              description: 'Learn about the native JSON data type available in modern relational databases, allowing you to store semi-structured JSON documents directly within a column.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a table with a JSON column (PostgreSQL)',
                  codeSnippet: `CREATE TABLE Products (\n  ProductID INT PRIMARY KEY,\n  ProductName VARCHAR(255),\n  Features JSONB -- JSONB for binary JSON, optimized for queries\n);`,
                  explanation: 'This creates a Products table with a `Features` column that can store JSON data, allowing flexible schema for product attributes.',
                  imageUrl: 'https://example.com/images/json-data-type.png'
                }
              ]
            },
            {
              title: 'Storing and querying JSON data within SQL columns',
              description: 'Understand how to insert JSON data into these columns and perform basic queries to retrieve the entire JSON object.',
              codeLessons: [
                {
                  lessonTitle: 'Inserting JSON data',
                  codeSnippet: `INSERT INTO Products (ProductID, ProductName, Features)\nVALUES (1, 'Smartwatch', '{"color": "black", "storage_gb": 32, "waterproof": true}');`,
                  explanation: 'This inserts a product with its features stored as a JSON object.',
                  imageUrl: 'https://example.com/images/insert-json.png'
                }
              ]
            },
            {
              title: 'JSON Functions: JSON_EXTRACT, JSON_ARRAY, JSON_OBJECT, JSON_TABLE (for parsing and generating JSON)',
              description: 'Explore dedicated SQL functions (e.g., `JSON_EXTRACT`, `JSON_VALUE`, `JSON_QUERY`, `JSON_BUILD_OBJECT`, `JSON_TABLE`) to extract specific values from JSON, manipulate JSON, or even transform relational data into JSON and vice-versa.',
              codeLessons: [
                {
                  lessonTitle: 'Extracting a value from JSON (MySQL example)',
                  codeSnippet: `SELECT\n  ProductName,\n  JSON_EXTRACT(Features, '$.color') AS Color,\n  JSON_EXTRACT(Features, '$.storage_gb') AS Storage\nFROM Products;`,
                  explanation: 'This MySQL query extracts the \'color\' and \'storage_gb\' values from the JSON \'Features\' column for each product.',
                  imageUrl: 'https://example.com/images/json-extract.png'
                }
              ]
            }
          ]
        },
        {
          id: 's3-lesson-6',
          title: 'Performance Tuning & Query Optimization',
          duration: '90 min',
          subtopics: [
            {
              title: 'EXPLAIN / EXPLAIN ANALYZE (or equivalent): Understanding query execution plans',
              description: 'Learn to use database-specific tools like `EXPLAIN` (or `EXPLAIN ANALYZE` in PostgreSQL, `SHOW PLAN` in SQL Server) to view the query execution plan, which shows how the database will execute a query step-by-step.',
              codeLessons: [
                {
                  lessonTitle: 'Analyzing a query plan (PostgreSQL EXPLAIN ANALYZE)',
                  codeSnippet: `EXPLAIN ANALYZE\nSELECT * FROM Orders WHERE CustomerID = 100 AND OrderDate > '2023-01-01';`,
                  explanation: 'This command shows the execution plan for the given SELECT query, including actual run-time statistics, helping to identify performance bottlenecks.',
                  imageUrl: 'https://example.com/images/explain-analyze.png'
                }
              ]
            },
            {
              title: 'Identifying bottlenecks: Full table scans, inefficient joins, missing indexes',
              description: 'Recognize common performance bottlenecks in query plans, such as full table scans (reading every row), inefficient join orders, and queries suffering from missing or poorly chosen indexes.',
              codeLessons: []
            },
            {
              title: 'Strategies for optimizing SELECT queries: Indexing, reordering joins, avoiding SELECT *',
              description: 'Apply various strategies to optimize `SELECT` queries: creating appropriate indexes, ensuring optimal join order, selecting only necessary columns instead of `SELECT *`, and simplifying complex logic.',
              codeLessons: []
            },
            {
              title: 'Optimizing INSERT, UPDATE, DELETE operations',
              description: 'Understand that DML operations also require optimization, including batching inserts, optimizing `WHERE` clauses for updates/deletes, and considering trigger performance.',
              codeLessons: []
            },
            {
              title: 'Denormalization (when and why for performance)',
              description: 'Introduce denormalization as an optimization technique where redundant data is intentionally added to a normalized schema to improve read performance, understanding its trade-offs.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-7',
          title: 'Database Normalization & Denormalization',
          duration: '75 min',
          subtopics: [
            {
              title: 'Normalization Theory: 1NF, 2NF, 3NF, BCNF (Boyce-Codd Normal Form)',
              description: 'Deep dive into database normalization theory, learning the objectives and rules of the primary normal forms: First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), and Boyce-Codd Normal Form (BCNF).',
              codeLessons: []
            },
            {
              title: 'Goals of normalization: Reducing data redundancy, improving data integrity',
              description: 'Understand the core goals of normalization: minimizing data redundancy (storing data once) and maximizing data integrity (ensuring data accuracy and consistency).',
              codeLessons: []
            },
            {
              title: 'Process of normalizing a database schema',
              description: 'Learn the systematic process of transforming an unnormalized database schema into a normalized form by applying the rules of the normal forms.',
              codeLessons: []
            },
            {
              title: 'Denormalization: Purpose, advantages (performance), and disadvantages (data redundancy, update anomalies)',
              description: 'Understand denormalization as the intentional introduction of redundancy into a database for performance reasons, along with its advantages (faster reads) and disadvantages (increased data redundancy, update anomalies).',
              codeLessons: []
            },
            {
              title: 'When to consider denormalization',
              description: 'Identify scenarios where denormalization might be a valid strategy, typically when read performance is critical and the added complexity of managing redundancy is acceptable.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-8',
          title: 'SQL Security & Permissions',
          duration: '60 min',
          subtopics: [
            {
              title: 'Users and Roles: Creating and managing database users and roles',
              description: 'Learn how to create and manage database users (individual logins) and roles (collections of permissions) to control who can access the database and what they can do.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a new user and role (MySQL)',
                  codeSnippet: `CREATE USER 'reporting_user'@'localhost' IDENTIFIED BY 'password123';\nCREATE ROLE 'report_viewer';\nGRANT SELECT ON sales_db.reports TO 'report_viewer';\nGRANT 'report_viewer' TO 'reporting_user'@'localhost';`,
                  explanation: 'This creates a user and a role, grants `SELECT` permission on a specific table to the role, and then assigns the role to the user.',
                  imageUrl: 'https://example.com/images/sql-users-roles.png'
                }
              ]
            },
            {
              title: 'GRANT statement: Assigning permissions (e.g., SELECT, INSERT, UPDATE, DELETE)',
              description: 'Master the `GRANT` statement to explicitly assign specific permissions (like `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE TABLE`) on database objects to users or roles.',
              codeLessons: [
                {
                  lessonTitle: 'Granting SELECT and INSERT permissions',
                  codeSnippet: `GRANT SELECT, INSERT ON Products TO 'app_user';`,
                  explanation: 'This grants the \'app_user\' permission to read and insert data into the Products table.',
                  imageUrl: 'https://example.com/images/grant-permissions.png'
                }
              ]
            },
            {
              title: 'REVOKE statement: Removing permissions',
              description: 'Learn the `REVOKE` statement to remove previously granted permissions from users or roles.',
              codeLessons: [
                {
                  lessonTitle: 'Revoking INSERT permission',
                  codeSnippet: `REVOKE INSERT ON Products FROM 'app_user';`,
                  explanation: 'This removes the permission for \'app_user\' to insert data into the Products table.',
                  imageUrl: 'https://example.com/images/revoke-permissions.png'
                }
              ]
            },
            {
              title: 'Principle of Least Privilege: Granting only necessary permissions',
              description: 'Understand the security best practice of the Principle of Least Privilege: users/applications should only be granted the minimum necessary permissions required to perform their tasks, reducing the attack surface.',
              codeLessons: []
            },
            {
              title: 'SQL Injection Prevention (conceptual, focusing on parameterized queries from application side)',
              description: 'Get a conceptual overview of SQL Injection vulnerabilities and the primary prevention method: using parameterized queries (prepared statements) from the application side, rather than direct string concatenation for SQL statements.',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-9',
          title: 'Advanced SQL Features (Varies by RDBMS)',
          duration: '75 min',
          subtopics: [
            {
              title: 'Pivoting / Unpivoting Data: Transforming rows into columns and vice-versa (e.g., using PIVOT or conditional aggregation)',
              description: 'Explore techniques for pivoting (transforming row values into column names) and unpivoting data (transforming column names into row values), often achieved using `PIVOT`/`UNPIVOT` operators (SQL Server) or conditional aggregation (`CASE` statements).',
              codeLessons: [
                {
                  lessonTitle: 'Pivoting sales data by month using conditional aggregation (Standard SQL)',
                  codeSnippet: `SELECT\n  ProductName,\n  SUM(CASE WHEN MONTH(SaleDate) = 1 THEN SaleAmount ELSE 0 END) AS JanSales,\n  SUM(CASE WHEN MONTH(SaleDate) = 2 THEN SaleAmount ELSE 0 END) AS FebSales,\n  SUM(CASE WHEN MONTH(SaleDate) = 3 THEN SaleAmount ELSE 0 END) AS MarSales\nFROM Sales\nGROUP BY ProductName;`,
                  explanation: 'This query pivots sales data, showing total sales for each product broken down by specific months using `CASE` statements within aggregate functions.',
                  imageUrl: 'https://example.com/images/pivot-conditional-aggregation.png'
                }
              ]
            },
            {
              title: 'CUBE, ROLLUP, GROUPING SETS: For advanced aggregation and reporting',
              description: 'Learn advanced `GROUP BY` extensions: `ROLLUP` (generates subtotals for hierarchies), `CUBE` (generates subtotals for all possible combinations of grouping columns), and `GROUPING SETS` (for custom groupings), invaluable for complex reporting.',
              codeLessons: [
                {
                  lessonTitle: 'Using ROLLUP for hierarchical totals',
                  codeSnippet: `SELECT\n  Region,\n  City,\n  SUM(SalesAmount) AS TotalSales\nFROM SalesData\nGROUP BY ROLLUP (Region, City);`,
                  explanation: 'This query generates total sales for each city, each region, and a grand total, demonstrating the hierarchical aggregation of `ROLLUP`.',
                  imageUrl: 'https://example.com/images/rollup-grouping.png'
                }
              ]
            },
            {
              title: 'Materialized Views (conceptual): Storing pre-computed query results for performance',
              description: 'Get a conceptual understanding of materialized views (or indexed views in SQL Server), which are physical database objects that store the pre-computed results of a query, offering significant performance gains for complex, frequently accessed reports.',
              codeLessons: []
            },
            {
              title: 'Spatial Data Types and Functions (conceptual): Storing and querying geographical data',
              description: 'Understand the concept of spatial data types (e.g., `GEOMETRY`, `GEOGRAPHY`) and associated functions used to store, query, and analyze geographical or geometric data within a database (e.g., finding points within a polygon, calculating distances).',
              codeLessons: []
            }
          ]
        },
        {
          id: 's3-lesson-10',
          title: 'Database Backups, Recovery & Replication (Conceptual)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Importance of Data Backup: Disaster recovery, point-in-time recovery',
              description: 'Understand the paramount importance of regular data backups for disaster recovery, enabling the restoration of data after failures, and for point-in-time recovery to revert to a specific moment.',
              codeLessons: []
            },
            {
              title: 'Types of Backups: Full, Differential, Incremental, Transaction Log Backups',
              description: 'Learn about different backup strategies: Full backups (entire database), Differential backups (changes since last full backup), Incremental backups (changes since last any backup), and Transaction Log backups (for continuous recovery and specific point-in-time restore).',
              codeLessons: []
            },
            {
              title: 'Basic Recovery Concepts: Restoring data from backups',
              description: 'Grasp the basic concepts of restoring a database from various backup types to recover from data loss or corruption.',
              codeLessons: []
            },
            {
              title: 'Database Replication (conceptual): Master-Slave, Multi-Master',
              description: 'Understand the concept of database replication, where data is duplicated across multiple servers for high availability, fault tolerance, and load balancing, including common models like Master-Slave and Multi-Master.',
              codeLessons: []
            },
            {
              title: 'High Availability (HA) and Disaster Recovery (DR) strategies',
              description: 'Get an overview of High Availability (HA) strategies (ensuring continuous operation with minimal downtime) and Disaster Recovery (DR) strategies (recovering data and systems after major outages).',
              codeLessons: []
            }
          ]
        }
      ],
      quiz: {
        id: 's3-quiz',
        title: 'Section 3: Advanced Assessment',
        questions: [
          {
            id: 's3q1',
            question: 'Which window function is used to access data from a preceding row within a partition?',
            options: ['LEAD()', 'LAG()', 'ROW_NUMBER()', 'SUM() OVER()'],
            correctAnswer: 1
          },
          {
            id: 's3q2',
            question: 'What is the primary benefit of using Common Table Expressions (CTEs)?',
            options: ['They permanently store query results for faster access.', 'They simplify complex queries by improving readability and modularity.', 'They are used to define database triggers.', 'They replace the need for joins in most queries.'],
            correctAnswer: 1
          },
          {
            id: 's3q3',
            question: 'Which type of CTE is used to query hierarchical data structures?',
            options: ['Scalar CTE', 'Recursive CTE', 'Table-Valued CTE', 'Normalizing CTE'],
            correctAnswer: 1
          },
          {
            id: 's3q4',
            question: 'What is a key difference between a stored procedure and a user-defined function?',
            options: ['Procedures can return values, functions cannot.', 'Functions can perform DML operations, procedures cannot.', 'Procedures are typically used in SELECT statements, functions are not.', 'Functions must return a value (scalar or table), procedures do not have to.'],
            correctAnswer: 3
          },
          {
            id: 's3q5',
            question: 'Which type of trigger fires *after* the DML operation on the table?',
            options: ['BEFORE trigger', 'AFTER trigger', 'INSTEAD OF trigger', 'Instead of Trigger'],
            correctAnswer: 1
          },
          {
            id: 's3q6',
            question: 'What is a benefit of using the native JSON data type in a SQL database?',
            options: ['It enforces a strict schema for all data.', 'It eliminates the need for relational tables.', 'It allows storing and querying semi-structured data directly within SQL.', 'It automatically normalizes the data.'],
            correctAnswer: 2
          },
          {
            id: 's3q7',
            question: 'Which command is used to view the execution plan of a SQL query?',
            options: ['ANALYZE QUERY', 'SHOW PLAN', 'PERFORM DEBUG', 'EXPLAIN'],
            correctAnswer: 3
          },
          {
            id: 's3q8',
            question: 'The intentional introduction of redundancy into a database to improve read performance is called:',
            options: ['Normalization', 'Optimization', 'Denormalization', 'Indexing'],
            correctAnswer: 2
          },
          {
            id: 's3q9',
            question: 'What is the "Principle of Least Privilege" in SQL security?',
            options: ['Granting all permissions to all users for ease of management.', 'Granting users only the minimum necessary permissions to perform their tasks.', 'Allowing users to create their own roles.', 'Restricting database access to only one administrator.'],
            correctAnswer: 1
          },
          {
            id: 's3q10',
            question: 'Which type of backup contains all data that has changed since the *last full backup*?',
            options: ['Full backup', 'Incremental backup', 'Differential backup', 'Transaction Log backup'],
            correctAnswer: 2
          }
        ]
      },
      projects: [
        {
          id: 's3-project-1',
          title: 'Project 1: Advanced Sales Analysis with Window Functions',
          description: 'Given a `DailySales` table with `SaleDate` (DATE) and `DailyAmount` (DECIMAL).\n1. Calculate the 7-day moving average of `DailyAmount` for each day.\n2. Calculate the cumulative sum of `DailyAmount` over time.\n3. For each day, find the `DailyAmount` from the previous day and the difference from the current day\'s `DailyAmount`.',
          checkpoint: 'Provide the SQL queries for each of these analyses. Explain how the `OVER()` clause and specific window functions (`AVG()`, `SUM()`, `LAG()`) are used to achieve the desired results.'
        },
        {
          id: 's3-project-2',
          title: 'Project 2: Hierarchical Reporting with Recursive CTEs',
          description: 'You have an `Employees` table with `EmployeeID`, `Name`, `ManagerID` (where `ManagerID` is `NULL` for the CEO/top-level).\n1. Write a recursive CTE to list all employees and their direct and indirect subordinates, showing the hierarchy level for each subordinate.\n2. Extend the query to also show the name of the top-most manager (CEO) for each employee in the hierarchy.',
          checkpoint: 'Submit the SQL queries for both parts. Explain the anchor and recursive members of your CTE and how they build the hierarchy.'
        },
        {
          id: 's3-project-3',
          title: 'Project 3: Implementing Business Logic with Stored Procedures and Triggers',
          description: 'Consider a simplified `Products` table (`ProductID`, `ProductName`, `StockQuantity`, `Price`) and `OrderItems` (`OrderItemID`, `OrderID`, `ProductID`, `QuantityOrdered`).\n\n1. **Stored Procedure:** Create a stored procedure named `PlaceOrder` that takes `ProductID` and `Quantity` as input. This procedure should:\n   - Check if `StockQuantity` for the given `ProductID` is sufficient.\n   - If sufficient, decrease `StockQuantity` in the `Products` table and insert a new record into `OrderItems` (assume `OrderID` exists or is generated outside this procedure for simplicity, or simplify to just updating stock).\n   - If insufficient, do not process the order and return a message/error (e.g., using `RAISERROR` in SQL Server, or a `SELECT` statement in others).\n\n2. **Trigger:** Create an `AFTER INSERT` trigger on the `OrderItems` table. This trigger should automatically log the `ProductID`, `QuantityOrdered`, and `OrderDate` (from current timestamp) into an `AuditLog` table whenever a new `OrderItem` is inserted. (Assume `AuditLog` table exists with `LogID` (PK), `ProductID`, `QuantityOrdered`, `LogDate`).',
          checkpoint: 'Provide the SQL code for both the stored procedure and the trigger. Demonstrate their functionality with sample `EXEC`/`CALL` statements for the procedure and `INSERT` statements for the trigger. Explain how they contribute to data integrity and automation.'
        }
      ]
    }
  ]
};

export default sqlForDataProfessionals;