import { Course } from '../courses';

const html: Course = {
  id: 'html',
  title: 'HTML',
  description: 'Learn the structure and semantics of web pages',
  icon: 'FileText',
  color: 'bg-orange-500',
  estimatedHours: 12,
  totalLessons: 15,
  sections: [
    {
      id: 'html-basics',
      title: 'HTML Basics',
      level: 'basic',
      lessons: [
        {
          id: 'html-intro',
          title: 'Introduction to HTML',
          duration: '30 min',
          content: `
# Introduction to HTML

## What is HTML?
HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web documents using elements and tags.

## HTML Document Structure
Every HTML document follows a basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
</body>
</html>
\`\`\`

## HTML Elements and Tags
- **Elements**: Building blocks of HTML (e.g., paragraphs, headings, links)
- **Tags**: Keywords enclosed in angle brackets that define elements
- **Attributes**: Additional information about elements

## Common HTML Elements

### Headings
\`\`\`html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
\`\`\`

### Paragraphs and Text
\`\`\`html
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
\`\`\`

### Links
\`\`\`html
<a href="https://example.com">Visit Example</a>
\`\`\`

### Images
\`\`\`html
<img src="image.jpg" alt="Description of image">
\`\`\`

### Lists
\`\`\`html
<ul>
    <li>Unordered list item</li>
    <li>Another item</li>
</ul>

<ol>
    <li>Ordered list item</li>
    <li>Second item</li>
</ol>
\`\`\`

HTML forms the foundation of all web pages and is essential for web development!
          `
        }
      ]
    }
  ]
};

export default html;