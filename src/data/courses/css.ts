import { Course } from '../courses';

const css: Course = {
  id: 'css',
  title: 'CSS',
  description: 'Style and layout your web pages beautifully',
  icon: 'Palette',
  color: 'bg-purple-500',
  estimatedHours: 15,
  totalLessons: 18,
  sections: [
    {
      id: 'css-basics',
      title: 'CSS Basics',
      level: 'basic',
      lessons: [
        {
          id: 'css-intro',
          title: 'Introduction to CSS',
          duration: '35 min',
          content: `
# Introduction to CSS

## What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls the layout, colors, fonts, and overall visual appearance of web pages.

## CSS Syntax
CSS consists of selectors and declaration blocks:

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

## Ways to Add CSS

### Inline CSS
\`\`\`html
<p style="color: blue; font-size: 16px;">Styled paragraph</p>
\`\`\`

### Internal CSS
\`\`\`html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
\`\`\`

### External CSS
\`\`\`html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

## CSS Selectors

### Element Selector
\`\`\`css
p {
    color: red;
}
\`\`\`

### Class Selector
\`\`\`css
.highlight {
    background-color: yellow;
}
\`\`\`

### ID Selector
\`\`\`css
#header {
    font-size: 24px;
}
\`\`\`

## Common CSS Properties

### Text Styling
\`\`\`css
.text-style {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
\`\`\`

### Box Model
\`\`\`css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 10px;
    border: 2px solid black;
}
\`\`\`

### Colors and Backgrounds
\`\`\`css
.colorful {
    color: #ff6b6b;
    background-color: #f8f9fa;
    background-image: url('pattern.png');
}
\`\`\`

CSS is essential for creating visually appealing and well-designed web pages!
          `
        }
      ]
    }
  ]
};

export default css;