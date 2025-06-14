import { Course } from '../courses'; // Assuming your Course interface is in a file named courses.ts

const css3Course: Course = {
  id: 'css3-frontend-developers',
  title: 'CSS3 for Front-End Developers',
  description: 'A comprehensive curriculum covering fundamental to advanced CSS3 concepts, empowering front-end developers to create stunning, responsive, and performant web interfaces.',
  icon: 'Palette', // A palette icon for a design/styling course
  color: 'bg-blue-600', // A suitable color for a CSS-focused course
  estimatedHours: 110, // This is a rough estimate, adjust as needed
  totalLessons: 27, // Total count of lessons across all sections
  sections: [
    {
      id: 'css-section-basics',
      title: 'Section 1: Basics (Beginner-Friendly, Core Foundations)',
      level: 'basic',
      lessons: [
        {
          id: 'css-basics-lesson-1-intro-selectors',
          title: 'Lesson 1: Introduction to CSS & Selectors',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is CSS? Role in Web Design',
              description: 'Understand CSS as the language for styling web pages, defining colors, fonts, layout, and overall visual presentation.',
              codeLessons: [],
            },
            {
              title: 'Ways to include CSS: Inline, Internal, External Stylesheets',
              description: 'Learn the three primary methods for applying CSS to HTML documents, understanding their use cases and order of precedence.',
              codeLessons: [
                {
                  lessonTitle: 'CSS Inclusion Methods',
                  codeSnippet: `<p style="color: blue; font-size: 18px;">This text is styled inline.</p>

<head>
  <style>
    h1 {
      color: green;
    }
  </style>
</head>

<head>
  <link rel="stylesheet" href="styles.css">
</head>
/* styles.css content */
body {
  font-family: sans-serif;
}`,
                  explanation: 'Demonstrates inline styles (for single elements), internal stylesheets (for a single page), and external stylesheets (for multiple pages), showcasing how CSS can be applied at different levels.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Basic Selectors: Type, Class, ID',
              description: 'Master the fundamental CSS selectors for targeting HTML elements: by element type, by class attribute, and by unique ID.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Selectors in Action',
                  codeSnippet: `/* Type Selector */
p {
  color: #333;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#main-title {
  font-size: 32px;
  text-align: center;
}`,
                  explanation: 'Illustrates the syntax and usage of type (element name), class (prefixed with `.`), and ID (prefixed with `#`) selectors to apply styles to different HTML elements.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Universal Selector (*)',
              description: 'Learn how the universal selector `*` targets every element in the HTML document.',
              codeLessons: [],
            },
            {
              title: 'Grouping Selectors',
              description: 'Combine multiple selectors to apply the same styles to several elements efficiently.',
              codeLessons: [
                {
                  lessonTitle: 'Grouping Selectors',
                  codeSnippet: `h1, h2, h3, .section-title {
  font-family: Georgia, serif;
  margin-bottom: 15px;
}`,
                  explanation: 'This example shows how to group `h1`, `h2`, `h3` type selectors and a `.section-title` class selector to apply the same font and margin to all of them, separated by commas.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Comments in CSS',
              description: 'Understand how to use comments in CSS for documentation and temporarily disabling rules.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-basics-lesson-2-core-styling-properties',
          title: 'Lesson 2: Core Styling Properties (Color, Text, Box Model Intro)',
          duration: '75 min',
          subtopics: [
            {
              title: 'Colors: Hex, RGB, RGBA, HSL, HSLA, Named Colors',
              description: 'Explore various color formats in CSS, including hexadecimal, RGB, RGBA (with alpha for opacity), HSL, HSLA, and predefined named colors.',
              codeLessons: [
                {
                  lessonTitle: 'Various Color Formats',
                  codeSnippet: `p { color: #FF0000; } /* Hex Red */
h1 { color: rgb(0, 128, 0); } /* RGB Green */
.transparent { background-color: rgba(255, 0, 0, 0.5); } /* RGBA semi-transparent Red */
.colorful { color: hsl(240, 100%, 50%); } /* HSL Blue */
.sky-blue { color: skyblue; } /* Named color */`,
                  explanation: 'Shows different ways to specify colors in CSS, including hexadecimal, RGB, RGBA (for transparency), HSL, and using common named colors, allowing for diverse visual effects.',
                  imageUrl: 'https://example.com/images/css-color-formats.png', // Placeholder for color swatches
                },
              ],
            },
            {
              title: 'Background Color, Image, Repeat, Position, Size',
              description: 'Style the background of elements with colors and images, controlling repetition, positioning, and sizing.',
              codeLessons: [
                {
                  lessonTitle: 'Background Properties',
                  codeSnippet: `body {
  background-color: #f0f0f0;
  background-image: url('pattern.png');
  background-repeat: repeat-x;
  background-position: center top;
  background-size: 100px 50px;
}`,
                  explanation: 'Demonstrates common background properties: `background-color` for a solid color, `background-image` for a pattern, `background-repeat` for horizontal repetition, `background-position` to center it at the top, and `background-size` to control image dimensions.',
                  imageUrl: 'https://example.com/images/css-background-example.png', // Placeholder for background visual
                },
              ],
            },
            {
              title: 'Text Properties: font-family, font-size, font-weight, line-height, text-align, text-decoration, text-transform, letter-spacing, word-spacing, color',
              description: 'Control every aspect of text appearance, from typeface and size to alignment, decoration, and spacing.',
              codeLessons: [
                {
                  lessonTitle: 'Text Styling Examples',
                  codeSnippet: `p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: justify;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  color: #444;
}`,
                  explanation: 'This comprehensive example covers typical text properties like `font-family` (with fallbacks), `font-size`, `font-weight`, `line-height`, `text-align`, `text-decoration` (underline), `text-transform` (uppercase), letter/word spacing, and `color`.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Introduction to the Box Model: Content, Padding, Border, Margin',
              description: 'Understand the fundamental CSS Box Model, which describes how elements occupy space on a page, composed of content, padding, border, and margin.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Box Model Illustration',
                  codeSnippet: `div.box {
  width: 200px;
  height: 100px;
  padding: 20px; /* Space between content and border */
  border: 5px solid red; /* Border around padding */
  margin: 30px; /* Space outside the border */
  background-color: lightblue; /* Content background */
}`,
                  explanation: 'This code illustrates the core components of the box model. The `width` and `height` define the content area. `padding` adds space inside the border, `border` adds a visible line, and `margin` adds space outside the border, pushing other elements away.',
                  imageUrl: 'https://example.com/images/box-model-diagram.png', // Placeholder for box model diagram
                },
              ],
            },
          ],
        },
        {
          id: 'css-basics-lesson-3-basic-layout',
          title: 'Lesson 3: Basic Layout (Display, Position, Float)',
          duration: '60 min',
          subtopics: [
            {
              title: 'The display Property: block, inline, inline-block, none',
              description: 'Control how an element is displayed on the page and how it interacts with other elements in terms of space and flow.',
              codeLessons: [
                {
                  lessonTitle: 'Display Property Examples',
                  codeSnippet: `/* Block elements take full width, start on new line */
p { display: block; }

/* Inline elements sit side-by-side, no width/height control */
span { display: inline; }

/* Inline-block elements sit side-by-side, but allow width/height */
.button { display: inline-block; width: 100px; height: 30px; }

/* Hides element completely */
.hidden { display: none; }`,
                  explanation: 'Explains the behavior of `block` (new line, full width), `inline` (same line, no dimension control), `inline-block` (same line, with dimension control), and `none` (hides element) display types.',
                  imageUrl: 'https://example.com/images/display-types.png', // Placeholder for display types visual
                },
              ],
            },
            {
              title: 'The position Property: static, relative, absolute, fixed, sticky (intro)',
              description: 'Understand how to precisely control the positioning of elements relative to their normal flow, their parent, or the viewport.',
              codeLessons: [
                {
                  lessonTitle: 'Positioning Examples',
                  codeSnippet: `/* Default positioning */
.static-box { position: static; }

/* Offset from its normal position */
.relative-box { position: relative; top: 10px; left: 20px; }

/* Positioned relative to nearest positioned ancestor */
.absolute-box { position: absolute; top: 0; right: 0; }

/* Positioned relative to the viewport, stays fixed on scroll */
.fixed-header { position: fixed; top: 0; width: 100%; }`,
                  explanation: 'Demonstrates `static` (default), `relative` (offsets from self, affects no other elements), `absolute` (offsets from nearest positioned ancestor), and `fixed` (offsets from viewport, stays put on scroll).',
                  imageUrl: 'https://example.com/images/css-positioning.png', // Placeholder for positioning visual
                },
              ],
            },
            {
              title: 'top, right, bottom, left properties with position',
              description: 'Use these offset properties to define the exact placement of positioned elements.',
              codeLessons: [],
            },
            {
              title: 'The float Property and clear Property (for legacy layouts)',
              description: 'Learn about `float` for wrapping text around images or creating multi-column layouts (historical context) and `clear` to prevent elements from wrapping around floats.',
              codeLessons: [
                {
                  lessonTitle: 'Float Layout Example',
                  codeSnippet: `/* HTML */
<div class="container">
  <div class="left-column"></div>
  <div class="right-column"></div>
  <div class="footer"></div>
</div>

/* CSS */
.left-column { float: left; width: 50%; background-color: lightcoral; }
.right-column { float: right; width: 50%; background-color: lightblue; }
.footer { clear: both; background-color: lightgreen; }`,
                  explanation: 'This shows a classic two-column layout using `float: left` and `float: right`. The `clear: both` on the footer ensures it drops below both floated columns, preventing layout issues.',
                  imageUrl: 'https://example.com/images/float-layout.png', // Placeholder for float layout visual
                },
              ],
            },
          ],
        },
        {
          id: 'css-basics-lesson-4-backgrounds-borders',
          title: 'Lesson 4: Backgrounds & Borders',
          duration: '60 min',
          subtopics: [
            {
              title: 'Background properties: background-image, background-repeat, background-position, background-size, background-attachment, background-origin, background-clip',
              description: 'Master a wider range of background properties for sophisticated visual effects, including how backgrounds scroll and their relationship to padding/border.',
              codeLessons: [
                {
                  lessonTitle: 'Advanced Background Properties',
                  codeSnippet: `div.hero {
  background-image: url('hero-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; /* Ensures image covers the element */
  background-attachment: fixed; /* Background scrolls with viewport */
  background-origin: content-box; /* Background starts from content edge */
  background-clip: padding-box; /* Background clips to padding edge */
}`,
                  explanation: 'This demonstrates advanced background properties like `background-size: cover` to fill the element, `background-attachment: fixed` for a parallax-like effect, and `background-origin`/`background-clip` for controlling the background\'s starting point and clipping area relative to the box model.',
                  imageUrl: 'https://example.com/images/advanced-backgrounds.png', // Placeholder for advanced background visual
                },
              ],
            },
            {
              title: 'Shorthand for backgrounds',
              description: 'Learn to use the `background` shorthand property for concise CSS.',
              codeLessons: [
                {
                  lessonTitle: 'Background Shorthand',
                  codeSnippet: `div.box {
  background: red url('icon.png') no-repeat center / 20px 20px fixed;
}`,
                  explanation: 'The `background` shorthand property allows combining multiple background properties into a single declaration, following a specific order for color, image, repeat, attachment, position, and size (separated by `/`).',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Border properties: border-width, border-style, border-color',
              description: 'Define the thickness, appearance, and color of an element\'s border.',
              codeLessons: [],
            },
            {
              title: 'Border-radius for rounded corners',
              description: 'Smooth the corners of elements with the `border-radius` property.',
              codeLessons: [
                {
                  lessonTitle: 'Rounded Corners with Border-radius',
                  codeSnippet: `div.card {
  border: 1px solid #ccc;
  border-radius: 8px; /* Applies to all corners */
}
div.circle {
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 50%; /* Creates a perfect circle */
}`,
                  explanation: 'Shows how `border-radius` creates rounded corners. A value of `50%` on a square element creates a perfect circle.',
                  imageUrl: 'https://example.com/images/border-radius.png', // Placeholder for rounded corners visual
                },
              ],
            },
            {
              title: 'Box-shadow for adding shadows to elements',
              description: 'Apply subtle or prominent shadows to elements for depth and visual separation.',
              codeLessons: [
                {
                  lessonTitle: 'Box Shadow Examples',
                  codeSnippet: `div.button {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* x-offset, y-offset, blur, color */
}
div.card-inset {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); /* Inset shadow */
}`,
                  explanation: 'Illustrates `box-shadow` properties including horizontal and vertical offset, blur radius, spread radius (optional), color, and the `inset` keyword for internal shadows, creating depth effects.',
                  imageUrl: 'https://example.com/images/box-shadow.png', // Placeholder for box shadow visual
                },
              ],
            },
          ],
        },
        {
          id: 'css-basics-lesson-5-units-values',
          title: 'Lesson 5: Units & Values',
          duration: '60 min',
          subtopics: [
            {
              title: 'Absolute Units: px, cm, mm, in, pt, pc',
              description: 'Understand absolute units that are fixed and do not scale relative to anything else (e.g., pixels for screen display).',
              codeLessons: [],
            },
            {
              title: 'Relative Units: em, rem, vw, vh, vmin, vmax, %',
              description: 'Dive into relative units that scale based on other values (e.g., parent font size, root font size, viewport dimensions), crucial for responsive design.',
              codeLessons: [
                {
                  lessonTitle: 'Relative Units Examples',
                  codeSnippet: `html { font-size: 16px; } /* Base font size */

h1 { font-size: 2em; } /* 2 times parent's font size (32px if parent is html) */
p { font-size: 1.2rem; } /* 1.2 times root (html) font size (19.2px) */

.full-width { width: 100vw; } /* 100% of viewport width */
.half-height { height: 50vh; } /* 50% of viewport height */`,
                  explanation: 'Shows `em` relative to parent font size, `rem` relative to the root (`html`) font size, and viewport units (`vw`, `vh`) relative to the viewport dimensions, essential for creating scalable and responsive designs.',
                  imageUrl: 'https://example.com/images/relative-units.png', // Placeholder for relative units explanation
                },
              ],
            },
            {
              title: 'calc() function for dynamic calculations',
              description: 'Perform arithmetic operations within CSS property values for dynamic layouts and sizing.',
              codeLessons: [
                {
                  lessonTitle: 'Using calc() for Dynamic Sizing',
                  codeSnippet: `div.sidebar {
  width: calc(30% - 20px); /* 30% of parent width minus 20px */
  margin-left: calc(50vw - 100px); /* Centers element in viewport with specific offset */
}`,
                  explanation: 'The `calc()` function allows mixing different units and performing basic math operations directly in CSS values, enabling flexible and responsive layouts (e.g., `width` based on percentage minus a fixed pixel amount).',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Color units (revisited for deeper understanding)',
              description: 'Re-examine color units in the context of their impact on accessibility and design systems.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-basics-lesson-6-pseudo-classes-elements',
          title: 'Lesson 6: Pseudo-classes & Pseudo-elements',
          duration: '60 min',
          subtopics: [
            {
              title: 'Pseudo-classes: :hover, :active, :focus, :link, :visited, :nth-child(), :first-child, :last-child',
              description: 'Style elements based on their state (e.g., mouse hover, active link, form input focus) or their position within a parent element.',
              codeLessons: [
                {
                  lessonTitle: 'Common Pseudo-classes',
                  codeSnippet: `a:hover { color: orange; } /* Changes color on hover */
button:active { transform: translateY(2px); } /* Shifts button down when clicked */
input:focus { border-color: blue; } /* Highlights border on focus */
li:nth-child(even) { background-color: #f0f0f0; } /* Styles every second list item */
p:first-child { font-weight: bold; } /* Styles the first paragraph */`,
                  explanation: 'This shows practical uses of common pseudo-classes: `:hover` for interactive elements, `:active` for click effects, `:focus` for form accessibility, and `:nth-child` / `:first-child` for structural styling within a list or group.',
                  imageUrl: 'https://example.com/images/pseudo-classes-interactive.png', // Placeholder for interactive elements
                },
              ],
            },
            {
              title: 'Pseudo-elements: ::before, ::after, ::first-line, ::first-letter',
              description: 'Style specific parts of an element or insert content before/after an element\'s content without adding new HTML.',
              codeLessons: [
                {
                  lessonTitle: 'Using Pseudo-elements',
                  codeSnippet: `h2::before {
  content: "✨ "; /* Adds an emoji before the heading text */
  color: gold;
}
.button::after {
  content: " →"; /* Adds an arrow after button text */
  margin-left: 5px;
}
p::first-letter {
  font-size: 2em; /* Makes the first letter of a paragraph larger */
  font-weight: bold;
}`,
                  explanation: 'Illustrates how `::before` and `::after` can inject decorative content (`content` property is required). `::first-letter` and `::first-line` allow styling specific textual parts of an element, useful for typographic effects.',
                  imageUrl: 'https://example.com/images/pseudo-elements-decoration.png', // Placeholder for decorative elements
                },
              ],
            },
            {
              title: 'Using content property with pseudo-elements',
              description: 'The `content` property is essential for inserting generated content with `::before` and `::after`.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-basics-lesson-7-cascading-specificity-inheritance',
          title: 'Lesson 7: Cascading, Specificity, and Inheritance',
          duration: '75 min',
          subtopics: [
            {
              title: 'The Cascade: Understanding how CSS rules are applied',
              description: 'Learn the order in which CSS rules are processed and applied, considering browser default styles, user styles, and author styles.',
              codeLessons: [],
            },
            {
              title: 'Specificity: Calculating selector weight',
              description: 'Master the rules for determining which CSS rule wins when multiple rules target the same element, based on a hierarchy of selector types (ID, Class, Type).',
              codeLessons: [
                {
                  lessonTitle: 'Specificity Calculation Example',
                  codeSnippet: `/* Specificity: 0,0,0,1 (type) */
p { color: red; }

/* Specificity: 0,0,1,0 (class) */
.text-danger { color: blue; }

/* Specificity: 0,1,0,0 (id) */
#error-message { color: green; }

/* Specificity: 0,0,1,1 (class + type) */
.message p { color: purple; }

/* Example HTML: */
// <p class="text-danger" id="error-message">This is an error.</p>
// What color will this paragraph be? Green (ID selector wins)`,
                  explanation: 'Demonstrates how different selector types contribute to specificity. ID selectors have the highest weight, followed by class/attribute/pseudo-class selectors, then type/pseudo-element selectors. Higher specificity wins.',
                  imageUrl: 'https://example.com/images/specificity-chart.png', // Placeholder for specificity chart
                },
              ],
            },
            {
              title: 'Inheritance: Properties passed down to child elements',
              description: 'Understand which CSS properties are inherited by child elements from their parents, simplifying styling efforts.',
              codeLessons: [],
            },
            {
              title: '!important rule (and why to avoid it)',
              description: 'Learn about the `!important` keyword for overriding specificity, and why its use is generally discouraged due to maintenance issues.',
              codeLessons: [
                {
                  lessonTitle: '!important Rule',
                  codeSnippet: `/* This will override any other color rule, regardless of specificity */
.force-red {
  color: red !important;
}`,
                  explanation: 'The `!important` flag gives a declaration the highest precedence, overriding all other rules including IDs and inline styles. It should be used sparingly as it makes CSS difficult to debug and maintain.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'The initial, inherit, unset, revert keywords',
              description: 'Explore keywords for controlling inheritance and resetting property values to their defaults or inherited values.',
              codeLessons: [],
            },
          ],
        },
      ],
      quiz: {
        id: 'css-basics-quiz-1',
        title: 'Quiz 1: CSS Basics & Selectors',
        questions: [
          {
            id: 'qc1',
            question: 'Which of the following is the correct way to include an external stylesheet in an HTML document?',
            options: [
              '`<style src="styles.css"></style>`',
              '`<link rel="stylesheet" href="styles.css">`',
              '`<css href="styles.css">`',
              '`<script src="styles.css"></script>`',
            ],
            correctAnswer: 1, // <link rel="stylesheet" href="styles.css">
          },
          {
            id: 'qc2',
            question: 'What is the CSS selector for an element with the class "header-title"?',
            options: ['`#header-title`', '`.header-title`', '`header-title`', '`*header-title`'],
            correctAnswer: 1, // .header-title
          },
          {
            id: 'qc3',
            question: 'Which property is used to change the background color of an element?',
            options: ['`color`', '`background-image`', '`background-color`', '`bgcolor`'],
            correctAnswer: 2, // background-color
          },
          {
            id: 'qc4',
            question: 'In the CSS Box Model, which property defines the space between the content and the border of an element?',
            options: ['`margin`', '`padding`', '`border-spacing`', '`content-spacing`'],
            correctAnswer: 1, // padding
          },
          {
            id: 'qc5',
            question: 'Which `display` value makes an element take up its full available width and start on a new line?',
            options: ['`inline`', '`inline-block`', '`block`', '`none`'],
            correctAnswer: 2, // block
          },
          {
            id: 'qc6',
            question: 'Which CSS pseudo-class is used to select an element when the user mouses over it?',
            options: ['`:active`', '`:focus`', '`:hover`', '`:visited`'],
            correctAnswer: 2, // :hover
          },
          {
            id: 'qc7',
            question: 'What is the purpose of the `content` property when used with `::before` or `::after` pseudo-elements?',
            options: [
              'To define the content of the element itself.',
              'To control the flow of text around the pseudo-element.',
              'To insert generated content before or after the element\'s actual content.',
              'To set the background image of the pseudo-element.',
            ],
            correctAnswer: 2, // To insert generated content before or after the element's actual content.
          },
          {
            id: 'qc8',
            question: 'Which CSS unit is relative to the font-size of the *root* (HTML) element?',
            options: ['`em`', '`px`', '`rem`', '`%`'],
            correctAnswer: 2, // rem
          },
          {
            id: 'qc9',
            question: 'When an element has `position: absolute;`, it is positioned relative to its:',
            options: [
              'Normal position in the document flow.',
              'The viewport.',
              'The nearest *positioned* ancestor.',
              'The `body` element.',
            ],
            correctAnswer: 2, // The nearest *positioned* ancestor.
          },
          {
            id: 'qc10',
            question: 'Which property is used to create rounded corners in CSS3?',
            options: ['`corner-radius`', '`border-style`', '`border-radius`', '`round-corners`'],
            correctAnswer: 2, // border-radius
          },
          {
            id: 'qc11',
            question: 'What is the correct syntax for a CSS comment?',
            options: ['`// This is a comment`', '``', '`/* This is a comment */`', '`# This is a comment`'],
            correctAnswer: 2, // /* This is a comment */
          },
          {
            id: 'qc12',
            question: 'Which of the following colors specifies an alpha transparency?',
            options: ['`#FF0000`', '`rgb(255, 0, 0)`', '`rgba(255, 0, 0, 0.5)`', '`hsl(0, 100%, 50%)`'],
            correctAnswer: 2, // rgba(255, 0, 0, 0.5)
          },
          {
            id: 'qc13',
            question: 'How do you apply the same style to multiple elements like `h1`, `p`, and `.footer-text`?',
            options: [
              '`h1 p .footer-text { ... }`',
              '`h1 + p + .footer-text { ... }`',
              '`h1, p, .footer-text { ... }`',
              '`h1 > p > .footer-text { ... }`',
            ],
            correctAnswer: 2, // h1, p, .footer-text { ... }
          },
          {
            id: 'qc14',
            question: 'Which property is used to control the spacing between characters in a text?',
            options: ['`word-spacing`', '`line-height`', '`text-spacing`', '`letter-spacing`'],
            correctAnswer: 3, // letter-spacing
          },
          {
            id: 'qc15',
            question: 'The `!important` rule in CSS:',
            options: [
              'Makes the property value inherited by all child elements.',
              'Resets the property value to its initial default.',
              'Gives the declaration the highest precedence, overriding all other rules.',
              'Is only used for debugging and has no effect on rendering.',
            ],
            correctAnswer: 2, // Gives the declaration the highest precedence, overriding all other rules.
          },
        ],
      },
      projects: [
        {
          id: 'css-project-1',
          title: 'Project 1: Style a Basic HTML Page with Different CSS Inclusion Methods',
          description: 'Create a simple HTML page with a heading, a paragraph, and a button. Apply styles to these elements using: 1) Inline CSS for the paragraph. 2) Internal CSS (within `<style>` tags in the `<head>`) for the heading. 3) An external stylesheet (`styles.css`) for the button and general body styles. Observe how styles are applied and overridden.',
          checkpoint: 'Ensure that all three methods of CSS inclusion (inline, internal, external) are correctly implemented and that the applied styles are visible in the browser. Confirm that the button and body have styles from the external stylesheet.',
        },
        {
          id: 'css-project-2',
          title: 'Project 2: Style Text, Colors, and Basic Box Model',
          description: 'Take an HTML page with multiple headings, paragraphs, and a few `div` elements. Apply a variety of text styling properties (e.g., `font-family`, `font-size`, `text-align`, `color`, `text-decoration`). Experiment with different color formats (hex, RGB, RGBA) for text and background colors. For the `div` elements, apply `padding`, `border`, and `margin` to understand the box model.',
          checkpoint: 'Verify that all text elements are styled as intended with different fonts, sizes, and colors. Check that `div` elements have visible padding, borders, and margins, and that these affect their spacing on the page as expected.',
        },
        {
          id: 'css-project-3',
          title: 'Project 3: Recreate a Simple Column Layout using Floats or Inline-Block',
          description: 'Design an HTML page with a header, a main content area, a sidebar, and a footer. Implement a two-column layout for the main content area and sidebar using either `float` properties (remember `clear` for the footer) or `display: inline-block;`. The goal is to understand the classic layout techniques before moving to Flexbox/Grid.',
          checkpoint: 'Observe the layout in the browser. Ensure the main content and sidebar appear side-by-side (or wrap correctly if using `inline-block` with limited width) and that the footer correctly clears any floated elements, appearing below the columns.',
        },
        {
          id: 'css-project-4',
          title: 'Project 4: Create Card Designs with Advanced Backgrounds and Borders',
          description: 'Build several `div` elements, each representing a "card". Apply unique background images, colors, and repeat patterns to each card. Use `border-radius` to create different levels of rounded corners (e.g., slightly rounded, perfectly circular avatar, custom-shaped corners). Add `box-shadow` effects, including both outer and inset shadows, to give depth to the cards.',
          checkpoint: 'Ensure each card displays its unique background and border styles. Verify that `border-radius` creates the desired rounded or circular shapes. Confirm that `box-shadow` effects are visible and correctly positioned.',
        },
        {
          id: 'css-project-5',
          title: 'Project 5: Build a Responsive Header with Relative Units',
          description: 'Design a webpage header (`<header>`) that includes a title (`<h1>`) and a navigation menu (`<nav>`). Use relative units (`em`, `rem`, `vw`, `vh`) for font sizes, padding, and possibly widths to make the header responsive. For example, the `<h1>` font size could scale with `vw`, and padding with `em` or `rem`. Use `calc()` for at least one property (e.g., a dynamic width for a sub-element).',
          checkpoint: 'Resize the browser window and observe how the header elements scale. Ensure font sizes, padding, and any calculated widths adjust responsively without breaking the layout. Verify that `calc()` is functioning as expected by inspecting computed styles.',
        },
        {
          id: 'css-project-6',
          title: 'Project 6: Create Interactive Elements with Pseudo-classes and Pseudo-elements',
          description: 'Develop an HTML page with: 1) A button that changes its background color and text color on `:hover` and slightly shrinks/moves on `:active`. 2) A list of items (`<li>`). Style alternate rows using `:nth-child(even)` or `:nth-child(odd)`. 3) A paragraph. Use `::first-letter` to style its initial letter. 4) A heading. Add a decorative icon or text using `::before` or `::after`.',
          checkpoint: 'Test the button\'s interactive states (hover, active) for smooth visual changes. Confirm that the list items alternate their styles correctly. Verify that the first letter of the paragraph is styled, and that the heading has the generated content from its pseudo-element.',
        },
        {
          id: 'css-project-7',
          title: 'Project 7: Debug CSS Specificity Conflict',
          description: 'You will be given a small HTML file with a single element (e.g., a `div` or `p`) that has multiple conflicting CSS rules applied to it (e.g., styles targeting its type, class, and ID, or inline styles, and `!important`). Your task is to predict which style will win based on specificity and then use browser developer tools to verify your prediction and explain why that rule was applied.',
          checkpoint: 'Clearly articulate the specificity score for each conflicting CSS rule. Correctly predict the winning rule. Use browser developer tools (Elements panel, Styles tab) to confirm the applied style and identify the winning rule, demonstrating an understanding of the cascade and specificity.',
        },
      ],
    },
    {
      id: 'css-section-medium',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 'css-medium-lesson-1-flexbox-layout',
          title: 'Lesson 1: Flexbox Layout',
          duration: '90 min',
          subtopics: [
            {
              title: 'Flex Container Properties: display: flex, flex-direction, flex-wrap, justify-content, align-items, align-content',
              description: 'Master the properties applied to the flex container to control the layout, direction, wrapping, and alignment of flex items within it.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Flexbox Layout',
                  codeSnippet: `/* HTML */
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

/* CSS */
.flex-container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-around; /* Distributes items with space */
  align-items: center; /* Vertically centers items */
  border: 1px solid #ccc;
  min-height: 100px;
}
.item {
  padding: 10px;
  background-color: lightblue;
  margin: 5px;
}`,
                  explanation: 'This demonstrates the core of Flexbox: `display: flex` turns the element into a flex container. `flex-direction` sets the main axis, `justify-content` aligns items along the main axis, and `align-items` aligns items along the cross axis.',
                  imageUrl: 'https://example.com/images/flexbox-basic.png', // Placeholder for basic flexbox visual
                },
              ],
            },
            {
              title: 'Flex Item Properties: order, flex-grow, flex-shrink, flex-basis, flex, align-self',
              description: 'Learn properties applied to individual flex items to control their order, ability to grow/shrink, initial size, and individual alignment.',
              codeLessons: [
                {
                  lessonTitle: 'Flex Item Properties',
                  codeSnippet: `.item-1 { flex-grow: 1; } /* Item grows to fill available space */
.item-2 { flex-shrink: 0; } /* Item will not shrink */
.item-3 { flex-basis: 150px; } /* Item's initial size */
.item-4 { order: -1; } /* Item appears first regardless of source order */
.item-5 { align-self: flex-end; } /* Overrides container's align-items */`,
                  explanation: 'Shows `flex-grow` (how much an item expands), `flex-shrink` (how much it contracts), `flex-basis` (initial size), `order` (visual reordering), and `align-self` (individual cross-axis alignment).',
                  imageUrl: 'https://example.com/images/flex-item-properties.png', // Placeholder for flex item properties visual
                },
              ],
            },
            {
              title: 'Building common layouts with Flexbox',
              description: 'Apply Flexbox to create practical layouts like navigation bars, centered content, and responsive grids.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-2-css-grid-layout',
          title: 'Lesson 2: CSS Grid Layout',
          duration: '90 min',
          subtopics: [
            {
              title: 'Grid Container Properties: display: grid, grid-template-columns, grid-template-rows, gap, justify-items, align-items, justify-content, align-content',
              description: 'Master the properties applied to the grid container to define grid tracks (columns/rows), gaps, and content alignment within cells.',
              codeLessons: [
                {
                  lessonTitle: 'Basic CSS Grid Layout',
                  codeSnippet: `/* HTML */
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns: 1 unit, 2 units, 1 unit */
  grid-template-rows: auto 100px; /* Row heights: auto, then 100px */
  gap: 10px 20px; /* Row gap 10px, Column gap 20px */
  justify-items: center; /* Horizontal alignment of content in cells */
  align-items: center; /* Vertical alignment of content in cells */
  border: 1px solid #ccc;
  min-height: 200px;
}
.item {
  padding: 10px;
  background-color: lightgreen;
}`,
                  explanation: 'This shows `display: grid` creating a grid container. `grid-template-columns` and `grid-template-rows` define the grid structure. `gap` sets spacing between cells. `justify-items` and `align-items` control content alignment within grid cells.',
                  imageUrl: 'https://example.com/images/css-grid-basic.png', // Placeholder for basic CSS grid visual
                },
              ],
            },
            {
              title: 'Grid Item Properties: grid-column, grid-row, grid-area',
              description: 'Learn properties for positioning grid items across multiple tracks, defining their start/end lines or using named areas.',
              codeLessons: [
                {
                  lessonTitle: 'Grid Item Positioning',
                  codeSnippet: `/* HTML */
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>

/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  height: 300px;
}
.header { grid-area: header; background-color: lightcoral; }
.sidebar { grid-area: sidebar; background-color: lightblue; }
.content { grid-area: content; background-color: lightgoldenrodyellow; }
.footer { grid-area: footer; background-color: lightgreen; }`,
                  explanation: 'This example uses `grid-template-areas` to define a named grid layout. Individual grid items (`header`, `sidebar`, `content`, `footer`) are then positioned within these named areas using the `grid-area` property, enabling complex 2D layouts intuitively.',
                  imageUrl: 'https://example.com/images/css-grid-areas.png', // Placeholder for CSS grid areas visual
                },
              ],
            },
            {
              title: 'fr unit, repeat(), minmax() functions',
              description: 'Utilize advanced grid functions for flexible track sizing and repeating patterns.',
              codeLessons: [],
            },
            {
              title: 'Named Grid Lines and Areas',
              description: 'Enhance readability and maintainability by naming grid lines and areas for easier item placement.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-3-responsive-web-design-media-queries',
          title: 'Lesson 3: Responsive Web Design & Media Queries',
          duration: '75 min',
          subtopics: [
            {
              title: 'What is Responsive Web Design? Mobile-First approach',
              description: 'Understand the core principles of responsive design, including the importance of starting with mobile styles and progressively enhancing for larger screens.',
              codeLessons: [],
            },
            {
              title: '@media rule: min-width, max-width, orientation',
              description: 'Master media queries to apply different CSS rules based on device characteristics like screen width and orientation.',
              codeLessons: [
                {
                  lessonTitle: 'Media Query Examples',
                  codeSnippet: `/* Mobile-first: Default styles apply to all screens */
body {
  padding: 10px;
}

/* Styles for screens 768px and wider (tablets/desktops) */
@media (min-width: 768px) {
  body {
    padding: 20px;
  }
  .sidebar {
    display: block;
    width: 200px;
    float: left;
  }
}

/* Styles for screens in landscape orientation */
@media (orientation: landscape) {
  .hero-image {
    height: 50vh;
  }
}`,
                  explanation: 'This demonstrates mobile-first design, where base styles are for small screens. `@media (min-width: 768px)` applies styles for larger screens. `@media (orientation: landscape)` targets devices based on their orientation, enabling adaptive layouts.',
                  imageUrl: 'https://example.com/images/media-queries-break.png', // Placeholder for media query breakpoints visual
                },
              ],
            },
            {
              title: 'Viewport Meta Tag (<meta name="viewport">)',
              description: 'Essential HTML meta tag for controlling the viewport on mobile devices, ensuring correct scaling and rendering of responsive layouts.',
              codeLessons: [
                {
                  lessonTitle: 'Viewport Meta Tag',
                  codeSnippet: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
                  explanation: 'This crucial meta tag tells the browser to set the viewport width to the device\'s width (`width=device-width`) and set the initial zoom level to 1.0 (`initial-scale=1.0`), which is fundamental for responsive design.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Fluid Grids and Flexible Images (CSS aspect)',
              description: 'Use percentages and `max-width: 100%` for images to create layouts that fluidly adjust to different screen sizes.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-4-transitions-transformations',
          title: 'Lesson 4: Transitions & Transformations',
          duration: '75 min',
          subtopics: [
            {
              title: 'CSS Transitions: transition-property, transition-duration, transition-timing-function, transition-delay',
              description: 'Create smooth, animated changes between CSS property values over a specified duration.',
              codeLessons: [
                {
                  lessonTitle: 'Basic CSS Transition',
                  codeSnippet: `div.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition-property: background-color, transform; /* Properties to animate */
  transition-duration: 0.5s; /* Duration of the animation */
  transition-timing-function: ease-in-out; /* Speed curve */
  transition-delay: 0.1s; /* Delay before animation starts */
}
div.box:hover {
  background-color: red;
  transform: scale(1.2); /* Combined with transform for two properties */
}`,
                  explanation: 'This example applies a transition to a `div` box, smoothly animating its `background-color` and `transform` property over 0.5 seconds with an `ease-in-out` timing function and a short delay on hover. The `transition` shorthand can combine these.',
                  imageUrl: 'https://example.com/images/css-transition-visual.png', // Placeholder for transition visual
                },
              ],
            },
            {
              title: 'Shorthand for transitions',
              description: 'Learn the `transition` shorthand property for more concise transition declarations.',
              codeLessons: [
                {
                  lessonTitle: 'Transition Shorthand',
                  codeSnippet: `div.button {
  transition: all 0.3s ease-in-out; /* Animate all animatable properties over 0.3s */
}`,
                  explanation: 'The `transition` shorthand property simplifies declaring transitions, combining `property`, `duration`, `timing-function`, and `delay` into one line. `all` means all animatable properties.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: '2D Transformations: translate(), rotate(), scale(), skew()',
              description: 'Manipulate the position, rotation, size, and skew of elements in two dimensions.',
              codeLessons: [
                {
                  lessonTitle: '2D Transforms Examples',
                  codeSnippet: `div.move { transform: translate(50px, 20px); } /* Moves 50px right, 20px down */
div.rotate { transform: rotate(45deg); } /* Rotates 45 degrees clockwise */
div.scale { transform: scale(1.5); } /* Scales to 1.5 times its size */
div.skew { transform: skewX(10deg); } /* Skews horizontally by 10 degrees */`,
                  explanation: 'Shows common 2D transform functions: `translate` (move), `rotate` (spin), `scale` (resize), and `skew` (distort along an axis), enabling dynamic visual changes without affecting layout flow.',
                  imageUrl: 'https://example.com/images/2d-transforms.png', // Placeholder for 2D transforms visual
                },
              ],
            },
            {
              title: '3D Transformations: translate3d(), rotate3d(), scale3d(), perspective',
              description: 'Introduce three-dimensional transformations for creating depth and more complex spatial effects.',
              codeLessons: [
                {
                  lessonTitle: 'Basic 3D Transform and Perspective',
                  codeSnippet: `div.container {
  perspective: 1000px; /* Sets the depth of the 3D scene */
}
div.cube {
  transform: rotateY(45deg); /* Rotates in 3D space */
  transform-style: preserve-3d; /* Allows child elements to be in 3D */
}`,
                  explanation: '`perspective` creates a 3D scene, and `rotateY` rotates an element around its Y-axis in 3D space. `transform-style: preserve-3d` is crucial for creating complex 3D objects with nested elements.',
                  imageUrl: 'https://example.com/images/3d-transforms.png', // Placeholder for 3D transforms visual
                },
              ],
            },
          ],
        },
        {
          id: 'css-medium-lesson-5-basic-animations',
          title: 'Lesson 5: Basic Animations (@keyframes)',
          duration: '75 min',
          subtopics: [
            {
              title: '@keyframes rule: defining animation steps',
              description: 'Define custom animation sequences by specifying styles at different stages (keyframes) using percentages or `from`/`to`.',
              codeLessons: [
                {
                  lessonTitle: 'Defining a Simple Keyframe Animation',
                  codeSnippet: `/* Define the animation */
@keyframes fadeInOut {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* Apply the animation to an element */
.fade-element {
  animation-name: fadeInOut;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}`,
                  explanation: 'The `@keyframes` rule defines `fadeInOut` animation steps. At 0% and 100%, opacity is 0; at 50%, it\'s 1. The animation is applied to `.fade-element` with a duration of 2 seconds and set to repeat infinitely.',
                  imageUrl: 'https://example.com/images/keyframes-animation.gif', // Placeholder for animation GIF
                },
              ],
            },
            {
              title: 'Animation Properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state',
              description: 'Control all aspects of animation playback, including its duration, speed curve, repetition, and how it behaves before and after it plays.',
              codeLessons: [
                {
                  lessonTitle: 'Animation Properties Shorthand',
                  codeSnippet: `.pulse-button {
  animation: pulse 1.5s ease-in-out infinite alternate forwards;
}

@keyframes pulse {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}`,
                  explanation: 'The `animation` shorthand combines `name`, `duration`, `timing-function`, `iteration-count` (infinite), `direction` (alternate), and `fill-mode` (forwards). This creates a pulsing effect on a button.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Shorthand for animations',
              description: 'Learn the `animation` shorthand property for concise animation declarations.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-6-z-index-stacking-context',
          title: 'Lesson 6: Z-index & Stacking Context',
          duration: '60 min',
          subtopics: [
            {
              title: 'Understanding z-index',
              description: 'Control the vertical stacking order of positioned elements, determining which elements appear on top of others.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Z-index Example',
                  codeSnippet: `/* HTML */
<div class="box red" style="z-index: 1;"></div>
<div class="box blue" style="z-index: 2;"></div>
<div class="box green" style="z-index: 3;"></div>

/* CSS */
.box {
  position: absolute; /* z-index only works on positioned elements */
  width: 100px;
  height: 100px;
}
.red { background-color: red; left: 10px; top: 10px; }
.blue { background-color: blue; left: 30px; top: 30px; }
.green { background-color: green; left: 50px; top: 50px; }`,
                  explanation: '`z-index` determines the stacking order of *positioned* elements. Higher `z-index` values appear on top. Here, `green` (z-index 3) will be on top of `blue` (z-index 2), which is on top of `red` (z-index 1).',
                  imageUrl: 'https://example.com/images/z-index-visual.png', // Placeholder for z-index visual
                },
              ],
            },
            {
              title: 'What is a Stacking Context?',
              description: 'Understand the concept of a stacking context, a three-dimensional rendering space formed by certain CSS properties, which dictates how `z-index` behaves.',
              codeLessons: [],
            },
            {
              title: 'Properties that create new stacking contexts',
              description: 'Identify the CSS properties that establish new stacking contexts (e.g., `opacity`, `transform`, `filter`, `will-change`, `flex`/`grid` items with `z-index`).',
              codeLessons: [],
            },
            {
              title: 'Debugging z-index issues',
              description: 'Strategies and tools for troubleshooting unexpected stacking order problems.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-7-typography-web-fonts',
          title: 'Lesson 7: Typography & Web Fonts',
          duration: '75 min',
          subtopics: [
            {
              title: 'Advanced Font Properties: font-variant, font-stretch',
              description: 'Explore less common but powerful font properties for stylistic variations and condensed/expanded typefaces.',
              codeLessons: [],
            },
            {
              title: '@font-face rule: Embedding custom fonts',
              description: 'Learn how to embed custom font files into your web pages using the `@font-face` rule, ensuring unique typography.',
              codeLessons: [
                {
                  lessonTitle: 'Embedding a Custom Font',
                  codeSnippet: `@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/MyCustomFont.woff2') format('woff2'),
       url('fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Tells browser how to handle font loading */
}

body {
  font-family: 'MyCustomFont', Arial, sans-serif; /* Apply font with fallbacks */
}`,
                  explanation: 'The `@font-face` rule defines a custom font. `src` provides paths to different font formats for cross-browser compatibility. `font-display: swap` tells the browser to use a fallback font until the custom font loads.',
                  imageUrl: 'https://example.com/images/custom-font-example.png', // Placeholder for custom font rendering
                },
              ],
            },
            {
              title: 'Font Formats: TTF, OTF, WOFF, WOFF2, EOT',
              description: 'Understand the different font file formats, their browser support, and why `WOFF2` is often preferred.',
              codeLessons: [],
            },
            {
              title: 'Font Loading Strategies (font-display)',
              description: 'Optimize font loading for better performance and user experience using the `font-display` property.',
              codeLessons: [],
            },
            {
              title: 'Icon Fonts vs. SVG Icons (CSS aspect)',
              description: 'Discuss the pros and cons of using icon fonts versus inline SVGs for scalable icons, from a CSS styling perspective.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-8-form-styling-ui-elements',
          title: 'Lesson 8: Form Styling & UI Elements',
          duration: '75 min',
          subtopics: [
            {
              title: 'Styling various form input types consistently',
              description: 'Learn techniques to override browser default styles for input fields, textareas, and selects for a consistent look across browsers.',
              codeLessons: [
                {
                  lessonTitle: 'Consistent Input Styling',
                  codeSnippet: `input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Include padding/border in element's total width/height */
  font-family: inherit; /* Inherit font from body */
}`,
                  explanation: 'This CSS applies consistent basic styling to various input types and textareas. `box-sizing: border-box` is crucial for predictable width/height calculations, and `font-family: inherit` ensures the form elements use the page\'s main font.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Styling buttons and links for different states',
              description: 'Create visually appealing and interactive buttons and links with distinct styles for normal, hover, active, and focus states.',
              codeLessons: [],
            },
            {
              title: 'Customizing checkboxes and radio buttons (using pseudo-elements/label tricks)',
              description: 'Advanced techniques to completely restyle native checkboxes and radio buttons while maintaining their functionality and accessibility.',
              codeLessons: [
                {
                  lessonTitle: 'Custom Checkbox Example',
                  codeSnippet: `/* HTML */
<label class="custom-checkbox">
  <input type="checkbox" name="option" value="1">
  <span class="checkmark"></span>
  Option 1
</label>

/* CSS */
.custom-checkbox input[type="checkbox"] {
  position: absolute; /* Hide native input */
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 1px solid #ccc;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.custom-checkbox input:checked ~ .checkmark {
  background-color: #2196F3;
}
.checkmark::after { /* The checkmark icon */
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
.custom-checkbox input:checked ~ .checkmark::after {
  display: block;
}`,
                  explanation: 'This technique hides the native checkbox input and uses a `span` with pseudo-elements (`::after`) to create a custom-styled, accessible checkbox. Styles change when the hidden input is `:checked`.',
                  imageUrl: 'https://example.com/images/custom-checkbox.png', // Placeholder for custom checkbox visual
                },
              ],
            },
            {
              title: 'Styling dropdowns (<select>)',
              description: 'Techniques for visually customizing the `<select>` element, which can be challenging due to browser rendering differences.',
              codeLessons: [],
            },
            {
              title: 'Accessibility considerations in form styling',
              description: 'Ensure custom form styles do not compromise accessibility for users relying on assistive technologies or keyboard navigation.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-medium-lesson-9-advanced-selectors-combinators',
          title: 'Lesson 9: Advanced Selectors & Combinators',
          duration: '60 min',
          subtopics: [
            {
              title: 'Attribute Selectors: [attr], [attr="value"], [attr~="value"], [attr|="value"], [attr^="value"], [attr$="value"], [attr*="value"]',
              description: 'Select elements based on the presence, exact value, partial value, or specific patterns within their attributes.',
              codeLessons: [
                {
                  lessonTitle: 'Attribute Selectors Examples',
                  codeSnippet: `/* Selects elements with 'data-theme' attribute */
[data-theme] { border: 1px solid blue; }

/* Selects input with type="text" */
input[type="text"] { background-color: lightyellow; }

/* Selects elements where 'class' attribute contains 'btn' word */
[class~="btn"] { padding: 10px 15px; }

/* Selects 'a' elements whose href starts with 'https://' */
a[href^="https://"] { color: green; }`,
                  explanation: 'This showcases various attribute selectors: checking for attribute presence (`[data-theme]`), exact attribute value (`input[type="text"]`), a word within a space-separated list (`[class~="btn"]`), and a string at the beginning of an attribute value (`a[href^="https://"]`).',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Combinators: Adjacent Sibling (+), General Sibling (~), Child (>), Descendant ( )',
              description: 'Combine selectors to target elements based on their relationships to other elements in the document tree.',
              codeLessons: [
                {
                  lessonTitle: 'Combinators Examples',
                  codeSnippet: `/* Descendant Combinator: Selects all <a> elements inside a .menu */
.menu a { text-decoration: none; }

/* Child Combinator: Selects direct <li> children of a <ul> */
ul > li { list-style: none; }

/* Adjacent Sibling Combinator: Selects a <p> immediately following an <h3> */
h3 + p { margin-top: 5px; }

/* General Sibling Combinator: Selects all <p> elements that are siblings of and follow an <h1> */
h1 ~ p { color: gray; }`,
                  explanation: 'These examples illustrate combinators: ` ` (descendant) selects elements anywhere within another, `>` (child) selects direct children, `+` (adjacent sibling) selects the next sibling element, and `~` (general sibling) selects all following sibling elements.',
                  imageUrl: 'https://example.com/images/css-combinators.png', // Placeholder for combinators diagram
                },
              ],
            },
            {
              title: '::selection pseudo-element',
              description: 'Style the text selected by the user with the mouse or keyboard.',
              codeLessons: [
                {
                  lessonTitle: 'Styling Text Selection',
                  codeSnippet: `::selection {
  background: yellow;
  color: black;
}`,
                  explanation: 'The `::selection` pseudo-element allows customizing the background and text color of user-selected text, offering a subtle branding opportunity.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'css-medium-lesson-10-css-variables',
          title: 'Lesson 10: CSS Variables (Custom Properties)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Declaring and using CSS Variables (--variable-name: value;)',
              description: 'Define reusable custom properties (variables) in CSS for consistent values like colors, fonts, and spacing.',
              codeLessons: [
                {
                  lessonTitle: 'Declaring and Using CSS Variables',
                  codeSnippet: `:root { /* Global scope */
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --spacing-unit: 16px;
}

button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) / 2) var(--spacing-unit);
  color: white;
}

.dark-mode {
  --primary-color: #6610f2; /* Override in specific scope */
}`,
                  explanation: 'CSS variables (custom properties) are declared with `--` prefix. They are typically defined on `:root` for global scope and accessed using `var()`. They can be overridden within a more specific selector, enabling theming and easy maintenance.',
                  imageUrl: 'https://example.com/images/css-variables.png', // Placeholder for CSS variables concept
                },
              ],
            },
            {
              title: 'var() function',
              description: 'Retrieve the value of a custom property using the `var()` function.',
              codeLessons: [],
            },
            {
              title: 'Scope of CSS Variables (global vs. local)',
              description: 'Understand how CSS variables inherit and can be redefined within different parts of the DOM tree, creating local scopes.',
              codeLessons: [],
            },
            {
              title: 'Fallbacks in var()',
              description: 'Provide a fallback value for a custom property in case it is not defined or is invalid.',
              codeLessons: [
                {
                  lessonTitle: 'CSS Variable Fallbacks',
                  codeSnippet: `p {
  color: var(--undefined-color, black); /* If --undefined-color not set, use black */
}`,
                  explanation: 'The `var()` function allows a second argument as a fallback value. If `--undefined-color` is not defined anywhere in the cascade for `p`, the text will be black.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Dynamic updates with JavaScript',
              description: 'Change CSS variable values dynamically using JavaScript, enabling real-time theme switching or interactive styling.',
              codeLessons: [
                {
                  lessonTitle: 'Dynamic CSS Variables with JavaScript',
                  codeSnippet: `// Get the root element
const root = document.documentElement;

// Set a CSS variable
root.style.setProperty('--primary-color', '#ff00ff'); // Changes primary color to magenta

// Get a CSS variable
const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color');
console.log(currentPrimary);`,
                  explanation: 'JavaScript can directly manipulate CSS variables using `setProperty` and `getPropertyValue` methods on `HTMLElement.style` or `CSSStyleDeclaration` (from `getComputedStyle`), enabling dynamic theme changes or interactive animations.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'css-medium-lesson-11-intro-css-preprocessors',
          title: 'Lesson 11: Introduction to CSS Preprocessors (Sass/Less Concepts)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What are CSS Preprocessors and why use them?',
              description: 'Understand the concept of CSS preprocessors (like Sass, Less, Stylus) as tools that extend CSS with powerful features before compilation to standard CSS.',
              codeLessons: [],
            },
            {
              title: 'Key features: Variables, Nesting, Mixins, Partials/Imports, Functions',
              description: 'Learn the core features offered by preprocessors that enhance CSS development: variables for reusability, nesting for better organization, mixins for reusable code blocks, partials for modularity, and functions for dynamic values.',
              codeLessons: [
                {
                  lessonTitle: 'Sass/SCSS Features Example',
                  codeSnippet: `/* _variables.scss */
$primary-color: #3498db;
$font-stack: Arial, sans-serif;

/* styles.scss */
@import 'variables'; // Import partial

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      margin-right: 10px;

      a {
        color: $primary-color; // Using a variable
        font-family: $font-stack;
        &:hover { // Nesting pseudo-class
          text-decoration: underline;
        }
      }
    }
  }
}

// Example Mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.button {
  @include border-radius(5px); // Using a mixin
}`,
                  explanation: 'This SCSS example demonstrates variables (`$primary-color`), nesting (`nav ul li a`), partials (`@import \'variables\'`), and mixins (`@mixin border-radius`), which are key features of preprocessors for writing more organized, maintainable, and powerful CSS.',
                  imageUrl: 'https://example.com/images/sass-features.png', // Placeholder for Sass features
                },
              ],
            },
            {
              title: 'Basic syntax examples (Sass/SCSS vs. Less)',
              description: 'See brief examples of Sass (SCSS syntax) and Less to grasp their general syntax similarities and differences.',
              codeLessons: [],
            },
            {
              title: 'Compilation process (brief overview)',
              description: 'Understand that preprocessors require a compilation step to convert their extended syntax into standard CSS that browsers can understand.',
              codeLessons: [],
            },
          ],
        },
      ],
      quiz: {
        id: 'css-medium-quiz-1',
        title: 'Quiz 1: Intermediate CSS Concepts',
        questions: [
          {
            id: 'qd1',
            question: 'Which Flexbox property controls the alignment of flex items along the main axis?',
            options: ['`align-items`', '`flex-direction`', '`justify-content`', '`align-content`'],
            correctAnswer: 2, // justify-content
          },
          {
            id: 'qd2',
            question: 'What is the purpose of `grid-template-columns` in CSS Grid?',
            options: [
              'To define the number and size of rows in the grid.',
              'To define the number and size of columns in the grid.',
              'To control the spacing between grid items.',
              'To align grid items along the block axis.',
            ],
            correctAnswer: 1, // To define the number and size of columns in the grid.
          },
          {
            id: 'qd3',
            question: 'Which `@media` query feature targets screen widths equal to or greater than a specified value?',
            options: ['`max-width`', '`only screen`', '`min-width`', '`width`'],
            correctAnswer: 2, // min-width
          },
          {
            id: 'qd4',
            question: 'Which CSS property is used to create a smooth animation when a CSS property value changes?',
            options: ['`animation`', '`transform`', '`transition`', '`@keyframes`'],
            correctAnswer: 2, // transition
          },
          {
            id: 'qd5',
            question: 'In a `transition` shorthand, what does the first numerical value (e.g., `0.5s`) typically represent?',
            options: [
              'The delay before the transition starts.',
              'The duration of the transition.',
              'The iteration count of the transition.',
              'The timing function of the transition.',
            ],
            correctAnswer: 1, // The duration of the transition.
          },
          {
            id: 'qd6',
            question: 'What is the purpose of the `perspective` property in CSS 3D transforms?',
            options: [
              'To make an element transparent.',
              'To set the origin point for 3D rotations.',
              'To define the depth of the 3D scene from the viewer\'s perspective.',
              'To flatten 3D transformations back to 2D.',
            ],
            correctAnswer: 2, // To define the depth of the 3D scene from the viewer's perspective.
          },
          {
            id: 'qd7',
            question: 'Which property is used to define custom animation steps in CSS?',
            options: ['`animation-steps`', '`@animate`', '`@keyframes`', '`animation-rule`'],
            correctAnswer: 2, // @keyframes
          },
          {
            id: 'qd8',
            question: '`z-index` only has an effect on elements that are:',
            options: [
              'Block-level elements.',
              'Flex items.',
              'Positioned (e.g., `relative`, `absolute`, `fixed`, `sticky`).',
              'Hidden (`display: none;`).',
            ],
            correctAnswer: 2, // Positioned (e.g., `relative`, `absolute`, `fixed`, `sticky`).
          },
          {
            id: 'qd9',
            question: 'What does `font-display: swap;` in `@font-face` do?',
            options: [
              'Forces the browser to always display the custom font.',
              'Blocks rendering until the custom font is loaded.',
              'Displays text using a fallback font first, then swaps to the custom font once loaded.',
              'Only loads the custom font if it\'s already in the browser cache.',
            ],
            correctAnswer: 2, // Displays text using a fallback font first, then swaps to the custom font once loaded.
          },
          {
            id: 'qd10',
            question: 'Which attribute selector selects elements whose `href` attribute value *ends with* ".pdf"?',
            options: ['`a[href*=".pdf"]`', '`a[href$=".pdf"]`', '`a[href^=".pdf"]`', '`a[href~=".pdf"]`'],
            correctAnswer: 1, // a[href$=".pdf"]
          },
          {
            id: 'qd11',
            question: 'What is the correct syntax for declaring a CSS variable (custom property) named `--primary-color` with a value of `blue`?',
            options: [
              '`var(--primary-color: blue);`',
              '`--primary-color = blue;`',
              `'--primary-color: blue;'`,
              `'var(--primary-color, blue);'`,
            ],
            correctAnswer: 2, // `--primary-color: blue;`
          },
          {
            id: 'qd12',
            question: 'Which of the following is a key feature of CSS preprocessors like Sass/Less?',
            options: [
              'Directly supported by all browsers without compilation.',
              'Adds new HTML elements for styling.',
              'Allows nesting selectors, variables, and mixins.',
              'Automatically generates JavaScript for animations.',
            ],
            correctAnswer: 2, // Allows nesting selectors, variables, and mixins.
          },
          {
            id: 'qd13',
            question: 'Which unit is equivalent to 1% of the viewport\'s height?',
            options: ['`vw`', '`em`', '`vh`', '`%`'],
            correctAnswer: 2, // vh
          },
          {
            id: 'qd14',
            question: 'The `box-sizing: border-box;` property helps with:',
            options: [
              'Making an element\'s content scrollable.',
              'Including padding and border in an element\'s total width and height.',
              'Preventing elements from overlapping.',
              'Applying a shadow effect around an element.',
            ],
            correctAnswer: 1, // Including padding and border in an element's total width and height.
          },
          {
            id: 'qd15',
            question: 'Which combinator selects an element that is an *immediate child* of another element?',
            options: ['` ` (space)', '`+`', '`~`', '`>`'],
            correctAnswer: 3, // `>`
          },
        ],
      },
      projects: [
        {
          id: 'css-medium-project-1',
          title: 'Project 1: Create a Responsive Navigation Bar and Product Grid using Flexbox',
          description: 'Build an HTML page with a flexible navigation bar (e.g., left-aligned logo, right-aligned menu items) that adapts to screen size. Below the navigation, create a responsive product grid (at least 6 items). Use Flexbox for both the navigation and the product grid, ensuring items wrap appropriately on smaller screens and fill space on larger ones.',
          checkpoint: 'Test the navigation bar responsiveness: items should align as specified and wrap or adjust on smaller screens. Verify the product grid: items should arrange themselves correctly in rows and columns, filling available space or wrapping as the viewport size changes. Use `justify-content` and `align-items` to ensure proper spacing and alignment.',
        },
        {
          id: 'css-medium-project-2',
          title: 'Project 2: Build a Portfolio Layout using CSS Grid',
          description: 'Design a portfolio page with a complex, two-dimensional layout using CSS Grid. This could include a header, a main content area (e.g., a grid of project cards), a sidebar for filters, and a footer. Experiment with `grid-template-columns`, `grid-template-rows`, `gap`, and especially `grid-area` with named areas for a clear and maintainable layout structure. The layout should adapt slightly for different screen sizes (e.g., sidebar moves to top on mobile).',
          checkpoint: 'Inspect the grid structure using browser developer tools (Grid overlay). Ensure all areas are positioned as intended and that the grid items span columns/rows correctly. Test how the layout behaves at different screen sizes, confirming your grid definitions adapt.',
        },
        {
          id: 'css-medium-project-3',
          title: 'Project 3: Convert a Static Website to Fully Responsive using Media Queries',
          description: 'Take a provided static desktop-first HTML/CSS website (or a previous project like Project 2 from Section 1) and convert it into a fully responsive site. Implement a mobile-first approach, applying base styles for small screens, then using `@media` queries with `min-width` breakpoints to adjust layouts, font sizes, and image scaling for tablet and desktop viewports. Ensure the viewport meta tag is correctly included.',
          checkpoint: 'Test the website across various device sizes and orientations using browser developer tools (device emulation). Observe smooth transitions between breakpoints. Confirm that images scale flexibly (`max-width: 100%`) and that text remains readable on all screens.',
        },
        {
          id: 'css-medium-project-4',
          title: 'Project 4: Design Interactive Elements with Transitions and Transformations',
          description: 'Create an HTML page featuring several interactive elements (e.g., buttons, image cards, navigation links). Apply smooth CSS `transitions` to their `hover` and `focus` states (e.g., changing background color, border, text color). Incorporate 2D `transforms` (e.g., `scale()`, `translate()`, `rotate()`) on hover or click to create engaging visual feedback. Optionally, explore a basic 3D transform effect on an element.',
          checkpoint: 'Interact with all elements and ensure their transitions are smooth and visually pleasing (no abrupt changes). Verify that 2D/3D transformations are applied correctly on interaction. Use the browser\'s performance profiler to check for any animation jank.',
        },
        {
          id: 'css-medium-project-5',
          title: 'Project 5: Animate a Loading Spinner or Hero Section Element with Keyframes',
          description: 'Implement a custom loading spinner using CSS `animations` and `@keyframes`. The spinner should have a continuous animation (e.g., rotating, pulsating, or growing/shrinking). Alternatively, animate an element in a hero section (e.g., a title fading in and sliding up, or an icon bouncing) that plays once on page load or when it enters the viewport. Experiment with `animation-timing-function`, `animation-delay`, and `animation-iteration-count`.',
          checkpoint: 'Observe the animation in the browser. Ensure it plays smoothly and as intended (e.g., continuous rotation for a spinner, correct sequence for a hero element). Verify that `animation-iteration-count` and `animation-fill-mode` are set appropriately for the desired effect.',
        },
        {
          id: 'css-medium-project-6',
          title: 'Project 6: Design an Overlapping Content Layout with Z-index',
          description: 'Create an HTML page with multiple overlapping elements (e.g., image cards, modal backdrop, a fixed header/footer). Use `position` and `z-index` to precisely control their stacking order, ensuring certain elements appear on top of others as desired. For example, a modal overlay should appear above all other page content. Experiment with elements that create new stacking contexts and observe their behavior.',
          checkpoint: 'Verify that all elements appear in the correct visual stacking order. Use browser developer tools to inspect elements and confirm their `z-index` values and the presence of any new stacking contexts. Try to identify and debug any unexpected overlapping issues.',
        },
        {
          id: 'css-medium-project-7',
          title: 'Project 7: Implement a Custom Font Stack',
          description: 'Choose a custom web font (e.g., from Google Fonts, or a downloaded `.woff2`/`.woff` file). Implement this font using the `@font-face` rule in your CSS. Apply the custom font to your headings and body text. Ensure you provide a robust `font-family` fallback stack and consider using `font-display: swap` for optimal loading performance.',
          checkpoint: 'Verify that the custom font loads and displays correctly across different browsers. Test the `font-display` behavior (e.g., does it flash fallback text before loading?). Check the font stack in developer tools to ensure fallback fonts are correctly defined.',
        },
        {
          id: 'css-medium-project-8',
          title: 'Project 8: Design a Highly Customized and Accessible Contact Form',
          description: 'Build a contact form incorporating various input types. Focus on applying extensive custom CSS styling to make it visually unique while maintaining high accessibility. This includes consistent styling for `input[type="text"]`, `textarea`, `select` (as much as possible), and especially custom-styled `checkboxes` and `radio buttons` using pseudo-elements and label tricks. Ensure all interactive elements have clear `focus` indicators.',
          checkpoint: 'Test the form thoroughly: visually inspect all elements for consistent styling. Use keyboard navigation (Tab key) to ensure all form controls are reachable and have clear focus outlines. For custom checkboxes/radio buttons, confirm they are still functional and accessible to screen readers (though full screen reader testing might be outside this scope).',
        },
        {
          id: 'css-medium-project-9',
          title: 'Project 9: Create a "Highlight" Feature using Advanced Selectors',
          description: 'On a sample article page with various types of links (internal, external, email, PDF links), implement a "highlight" feature using advanced CSS selectors and combinators. For example: - Style all external links differently. - Add an icon after PDF links using `::after` and an attribute selector. - Style a paragraph that directly follows an `<h2>` element. - Change the background of all `li` elements that have a `data-status` attribute set to "new".',
          checkpoint: 'Verify that only the precisely targeted elements receive the new styles. Inspect the HTML and CSS in developer tools to confirm that the advanced selectors are matching as intended and not affecting unintended elements. Test all conditions of your selectors.',
        },
        {
          id: 'css-medium-project-10',
          title: 'Project 10: Build a Theme Switcher with CSS Variables',
          description: 'Create an HTML page with a light and dark theme. Define primary colors, secondary colors, and background colors as CSS variables on the `:root` element. Implement a toggle button (e.g., a simple JavaScript switch) that, when clicked, adds or removes a class (e.g., `dark-mode`) to the `<body>` or `:root` element. In your CSS, define alternative variable values for the `.dark-mode` class to dynamically change the theme.',
          checkpoint: 'Test the theme switcher: clicking the button should instantly change the page\'s color scheme. Inspect elements in developer tools to confirm that the CSS variables are being overridden correctly when the `dark-mode` class is applied/removed. Ensure consistency across elements styled with these variables.',
        },
        {
          id: 'css-medium-project-11',
          title: 'Project 11: Set Up a Basic CSS Preprocessor Environment and Write Nested Styles',
          description: 'Set up a basic development environment for a CSS preprocessor (e.g., Sass/SCSS) on your local machine (using Node.js and `node-sass` or `sass` package). Create a small `index.html` file and an `.scss` file. In the `.scss` file, use features like variables, nesting, and a simple mixin to style a small component (e.g., a button with hover states, or a nested list). Compile your `.scss` file into standard CSS and link it to your HTML.',
          checkpoint: 'Verify that the `.scss` file compiles successfully into a `.css` file. Ensure that the compiled CSS correctly applies styles to your HTML elements. Confirm that features like nesting and variables from your `.scss` are correctly translated into valid CSS.',
        },
      ],
    },
    {
      id: 'css-section-advanced',
      title: 'Section 3: Advanced (Senior-Level, System-Oriented)',
      level: 'advanced',
      lessons: [
        {
          id: 'css-advanced-lesson-1-advanced-animations-performance',
          title: 'Lesson 1: Advanced Animations & Performance',
          duration: '90 min',
          subtopics: [
            {
              title: 'will-change property',
              description: 'Understand `will-change` as a performance hint to the browser, informing it about properties that are expected to change in the near future, allowing for optimizations.',
              codeLessons: [
                {
                  lessonTitle: 'Using will-change for Performance',
                  codeSnippet: `div.animated-box {
  transition: transform 0.3s ease-out;
  will-change: transform, opacity; /* Hint to the browser for performance */
}
div.animated-box:hover {
  transform: translateX(20px) scale(1.1);
  opacity: 0.8;
}`,
                  explanation: '`will-change` hints to the browser that these properties (`transform`, `opacity`) are likely to be animated, allowing the browser to optimize by promoting the element to a new compositor layer, potentially improving animation smoothness.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'transform-origin and perspective for 3D animations',
              description: 'Deep dive into `transform-origin` to control the pivot point of transformations and `perspective` for realistic 3D effects.',
              codeLessons: [],
            },
            {
              title: 'animation-play-state and animation-fill-mode in depth',
              description: 'Explore these animation properties for precise control over animation playback (paused/running) and how element styles behave before/after the animation.',
              codeLessons: [],
            },
            {
              title: 'Using JavaScript for complex animation control (e.g., GSAP introduction)',
              description: 'Understand scenarios where JavaScript-based animation libraries (like GSAP) are preferred for complex sequences, chained animations, or physics-based effects, and a brief introduction to their conceptual use.',
              codeLessons: [],
            },
            {
              title: 'Performance considerations for animations (GPU vs. CPU)',
              description: 'Distinguish between GPU-accelerated (e.g., `transform`, `opacity`) and CPU-intensive CSS properties, and how to choose properties for smoother animations (`requestAnimationFrame`).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-2-css-architectures',
          title: 'Lesson 2: CSS Architectures (BEM, SMACSS, OOCSS)',
          duration: '75 min',
          subtopics: [
            {
              title: 'BEM (Block, Element, Modifier) methodology',
              description: 'Learn the Block, Element, Modifier (BEM) naming convention for writing modular, reusable, and maintainable CSS by creating independent blocks of UI.',
              codeLessons: [
                {
                  lessonTitle: 'BEM Naming Convention',
                  codeSnippet: `/* Block */
.card {
  border: 1px solid #ccc;
  padding: 20px;
}

/* Element within Block */
.card__title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Modifier for Block */
.card--featured {
  border-color: gold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Modifier for Element */
.card__button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,
                  explanation: 'BEM structures CSS class names in a `block__element--modifier` format. This example shows `.card` as a block, `.card__title` as an element within it, and `--featured` / `--disabled` as modifiers that change the block or element\'s appearance/state, improving readability and avoiding conflicts.',
                  imageUrl: 'https://example.com/images/bem-diagram.png', // Placeholder for BEM structure diagram
                },
              ],
            },
            {
              title: 'SMACSS (Scalable and Modular Architecture for CSS) principles',
              description: 'Understand SMACSS as a guide for organizing CSS into logical categories: Base, Layout, Module, State, and Theme rules.',
              codeLessons: [],
            },
            {
              title: 'OOCSS (Object-Oriented CSS) concepts',
              description: 'Learn about OOCSS principles: separating structure from skin and separating container from content, promoting code reuse and efficiency.',
              codeLessons: [],
            },
            {
              title: 'Benefits and drawbacks of each',
              description: 'Evaluate the advantages and disadvantages of each architecture in terms of scalability, maintainability, and learning curve.',
              codeLessons: [],
            },
            {
              title: 'Choosing an architecture for large projects',
              description: 'Guidance on selecting the most appropriate CSS architecture based on project size, team experience, and specific requirements.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-3-css-methodologies-utility-first',
          title: 'Lesson 3: CSS Methodologies & Utility-First CSS',
          duration: '60 min',
          subtopics: [
            {
              title: 'CSS Modules (concepts, how they differ from global CSS)',
              description: 'Understand CSS Modules as a solution for scoped CSS, where class names are locally scoped by default, preventing name collisions in component-based architectures.',
              codeLessons: [],
            },
            {
              title: 'Styled Components/CSS-in-JS (conceptual overview, pros/cons)',
              description: 'Briefly explore the concept of writing CSS directly within JavaScript using libraries like Styled Components, and discuss their benefits (dynamic styling, component isolation) and drawbacks (runtime overhead, debugging).',
              codeLessons: [],
            },
            {
              title: 'Utility-First CSS (e.g., Tailwind CSS principles - just the CSS concepts)',
              description: 'Learn the principles of utility-first CSS, where styling is applied directly in HTML using single-purpose utility classes (e.g., `flex`, `pt-4`, `text-blue-500`). Focus on the CSS philosophy, not specific framework usage.',
              codeLessons: [
                {
                  lessonTitle: 'Utility-First CSS Concept',
                  codeSnippet: `<button class="primary-button">Click Me</button>

/* CSS */
.primary-button {
  background-color: blue;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
}

<button class="bg-blue-500 text-white py-2 px-4 rounded-md">Click Me</button>

/* CSS (pre-defined utility classes) */
.bg-blue-500 { background-color: #3b82f6; }
.text-white { color: #fff; }
.py-2 { padding-top: 8px; padding-bottom: 8px; }
.px-4 { padding-left: 16px; padding-right: 16px; }
.rounded-md { border-radius: 0.375rem; }`,
                  explanation: 'Contrasts traditional semantic CSS with utility-first. Utility-first applies styling via many single-purpose classes directly in HTML, making styling highly compositional and reducing the need for custom CSS. This focuses on the *concept* of these atomic classes.',
                  imageUrl: 'https://example.com/images/utility-first-concept.png', // Placeholder for utility-first concept
                },
              ],
            },
            {
              title: 'When to use which methodology',
              description: 'Discuss the suitability of different CSS methodologies for various project scales, team sizes, and architectural preferences.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-4-critical-css-perceived-performance',
          title: 'Lesson 4: Critical CSS & Perceived Performance',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is Critical CSS?',
              description: 'Define Critical CSS as the minimal set of CSS required to render the "above-the-fold" content of a webpage, crucial for initial render speed.',
              codeLessons: [],
            },
            {
              title: 'How to extract Critical CSS (manual vs. automated)',
              description: 'Learn techniques for identifying and extracting Critical CSS, including manual methods and automated tools.',
              codeLessons: [],
            },
            {
              title: 'Inlining Critical CSS in HTML',
              description: 'Understand the practice of embedding Critical CSS directly into the `<head>` of the HTML document to eliminate an extra network request.',
              codeLessons: [
                {
                  lessonTitle: 'Inlining Critical CSS',
                  codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    /* Critical styles for immediate visible content */
    body { font-family: sans-serif; margin: 0; }
    h1 { color: #333; font-size: 2em; }
    .hero-section { background-color: #f0f0f0; padding: 50px; }
  </style>

  <link rel="stylesheet" href="/full-styles.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/full-styles.css"></noscript>
</head>
<body>
  <div class="hero-section">
    <h1>Welcome!</h1>
    <p>This content loads fast.</p>
  </div>
  </body>`,
                  explanation: 'This example shows critical CSS inlined within a `<style>` tag in the `<head>`, making it render-blocking but immediately available. Non-critical CSS is loaded asynchronously using `media="print"` and `onload` to prevent blocking the initial render.',
                  imageUrl: 'https://example.com/images/critical-css-flow.png', // Placeholder for Critical CSS flow
                },
              ],
            },
            {
              title: 'Loading remaining CSS asynchronously',
              description: 'Techniques for loading the rest of the stylesheet after the critical CSS has rendered, using methods like `preload` with `onload` or `media="print"`.',
              codeLessons: [],
            },
            {
              title: 'Impact on FCP (First Contentful Paint) and LCP (Largest Contentful Paint)',
              description: 'Understand how Critical CSS directly improves key web performance metrics related to perceived loading speed.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-5-browser-rendering-performance',
          title: 'Lesson 5: Browser Rendering & Performance',
          duration: '75 min',
          subtopics: [
            {
              title: 'Rendering Pipeline: Styles, Layout, Paint, Composite',
              description: 'Deep dive into the browser\'s rendering process: how HTML, CSS, and JavaScript are processed to display pixels on screen.',
              codeLessons: [],
            },
            {
              title: 'Repaints and Reflows (Layout Thrashing)',
              description: 'Understand "repaints" (visual changes without layout changes) and "reflows" (layout recalculations, most expensive) and how to avoid "layout thrashing" from reading/writing DOM properties in quick succession.',
              codeLessons: [
                {
                  lessonTitle: 'Avoiding Layout Thrashing (Conceptual)',
                  codeSnippet: `// BAD: Forces layout read inside loop (layout thrashing)
function updateElementsBad() {
  const elements = document.querySelectorAll('.item');
  elements.forEach(el => {
    const currentWidth = el.offsetWidth; // Read (triggers layout)
    el.style.width = (currentWidth + 10) + 'px'; // Write (triggers layout)
  });
}

// GOOD: Reads all first, then writes all (batching)
function updateElementsGood() {
  const elements = document.querySelectorAll('.item');
  const widths = [];
  elements.forEach(el => {
    widths.push(el.offsetWidth); // Read all first
  });
  elements.forEach((el, index) => {
    el.style.width = (widths[index] + 10) + 'px'; // Write all second
  });
}`,
                  explanation: 'This conceptual example illustrates layout thrashing. The "BAD" example triggers a reflow for *each* element by alternating reading (`offsetWidth`) and writing (`style.width`) layout-affecting properties. The "GOOD" example batches reads and writes, minimizing reflows to two.',
                  imageUrl: 'https://example.com/images/layout-thrashing.png', // Placeholder for layout thrashing diagram
                },
              ],
            },
            {
              title: 'Tools for performance debugging (Chrome DevTools Performance tab)',
              description: 'Hands-on practice with browser developer tools to identify performance bottlenecks related to CSS (style recalculation, layout, paint).',
              codeLessons: [],
            },
            {
              title: 'Avoiding requestAnimationFrame for layout reads/writes',
              description: 'Use `requestAnimationFrame` for animations to ensure they are synchronized with the browser\'s refresh rate and avoid forced synchronous layouts.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-6-css-houdini',
          title: 'Lesson 6: CSS Houdini (Introduction)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is CSS Houdini?',
              description: 'Introduction to CSS Houdini as a set of APIs that expose parts of the CSS engine to JavaScript developers, allowing for more control and custom CSS features.',
              codeLessons: [],
            },
            {
              title: 'Worklets: Paint, Layout, Animation (conceptual)',
              description: 'Understand the concept of CSS Worklets (Paint, Layout, Animation) as lightweight, high-performance ways to extend CSS rendering capabilities.',
              codeLessons: [
                {
                  lessonTitle: 'Conceptual Paint Worklet Example',
                  codeSnippet: `/* HTML */
<div class="custom-border-box" style="--border-color: blue;"></div>

/* CSS */
.custom-border-box {
  background: white;
  border: 10px solid; /* Needed for border-image */
  border-image: paint(borderPattern, var(--border-color)); /* Using custom paint worklet */
}

/* JavaScript (main thread) */
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('border-pattern-worklet.js');
}

/* border-pattern-worklet.js (Paint Worklet) */
registerAnimator('borderPattern', class {
  static get inputProperties() { return ['--border-color']; }
  paint(ctx, geom, properties) {
    const color = properties.get('--border-color').toString();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, geom.width, geom.height);
    // Draw a custom pattern here instead of simple rectangle
  }
});`,
                  explanation: 'This conceptual example shows a Paint Worklet. HTML uses a custom property `--border-color`. CSS uses `border-image: paint(borderPattern, ...)` to invoke the worklet. JavaScript registers the worklet. The `paint` method in the worklet can then draw custom patterns based on CSS properties, allowing for highly custom borders or backgrounds.',
                  imageUrl: 'https://example.com/images/houdini-paint-worklet.png', // Placeholder for Houdini paint worklet flow
                },
              ],
            },
            {
              title: 'Custom Properties & Typed OM',
              description: 'See how Houdini extends CSS Custom Properties and introduces the Typed OM (Object Model) for better programmatic interaction with CSS values.',
              codeLessons: [],
            },
            {
              title: 'Benefits for performance and extensibility',
              description: 'Discuss how Houdini enables developers to write custom rendering logic that runs at the browser\'s native performance levels, extending CSS without performance penalties.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-7-accessibility-css',
          title: 'Lesson 7: Accessibility & CSS',
          duration: '75 min',
          subtopics: [
            {
              title: 'High Contrast Mode & Forced Colors',
              description: 'Understand how CSS can be adapted to support High Contrast Mode settings in operating systems, leveraging the `forced-colors` media feature.',
              codeLessons: [],
            },
            {
              title: 'prefers-reduced-motion media feature',
              description: 'Use the `prefers-reduced-motion` media query to provide alternative, less intense animations or no animations for users who prefer reduced motion.',
              codeLessons: [
                {
                  lessonTitle: 'Respecting User Motion Preference',
                  codeSnippet: `/* Default animation */
.animated-element {
  transition: transform 0.3s ease-out;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none; /* Disable transition */
    animation: none; /* Disable animation */
  }
}`,
                  explanation: 'The `@media (prefers-reduced-motion: reduce)` query allows you to disable or simplify animations and transitions for users who have this preference enabled in their operating system settings, enhancing accessibility and comfort.',
                  imageUrl: 'https://example.com/images/prefers-reduced-motion.png', // Placeholder for reduced motion visual
                },
              ],
            },
            {
              title: 'prefers-color-scheme media feature',
              description: 'Implement dark mode or light mode themes based on the user\'s operating system color scheme preference using `prefers-color-scheme`.',
              codeLessons: [
                {
                  lessonTitle: 'Implementing Dark Mode with prefers-color-scheme',
                  codeSnippet: `/* Light mode defaults */
body {
  background-color: white;
  color: black;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #333;
    color: #f0f0f0;
  }
}`,
                  explanation: 'This media query applies styles when the user\'s system prefers a dark color scheme. It\'s a direct way to provide a dark mode experience that automatically adapts to user preferences.',
                  imageUrl: 'https://example.com/images/prefers-color-scheme.png', // Placeholder for dark mode visual
                },
              ],
            },
            {
              title: ':focus-visible pseudo-class',
              description: 'Apply focus styles only when it\'s helpful to the user (e.g., keyboard navigation) while avoiding distracting outlines for mouse users, using `:focus-visible`.',
              codeLessons: [
                {
                  lessonTitle: 'Using :focus-visible for Better Focus Styles',
                  codeSnippet: `button:focus {
  outline: 2px solid blue; /* Default, often too aggressive for mouse users */
}

/* Only show outline for keyboard navigation */
button:focus:not(:focus-visible) {
  outline: none; /* Remove default outline for mouse clicks */
}
button:focus-visible {
  outline: 2px solid orange; /* Custom, clear outline for keyboard/programmatic focus */
}`,
                  explanation: '`:focus-visible` ensures that a focus indicator is shown only when it\'s helpful (e.g., keyboard navigation). This allows designers to remove the default `:focus` outline for mouse clicks while retaining it for keyboard users, improving both aesthetics and accessibility.',
                  imageUrl: 'https://example.com/images/focus-visible.png', // Placeholder for focus-visible visual
                },
              ],
            },
            {
              title: 'Styling for screen readers (sr-only patterns)',
              description: 'Learn common CSS patterns (e.g., `sr-only` classes) to visually hide content while keeping it accessible to screen readers.',
              codeLessons: [
                {
                  lessonTitle: 'Screen Reader Only (sr-only) CSS',
                  codeSnippet: `.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`,
                  explanation: 'This `sr-only` class is a common pattern to visually hide content but keep it available to screen readers. It makes the element incredibly small and clips its content while retaining its presence in the accessibility tree.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-8-viewport-units-responsive-images',
          title: 'Lesson 8: Viewport Units & Responsive Images (CSS Aspect)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Deep dive into vw, vh, vmin, vmax for typography and spacing',
              description: 'Advanced usage of viewport units for creating truly fluid typography and spacing that scales perfectly with the viewport size.',
              codeLessons: [
                {
                  lessonTitle: 'Fluid Typography with Viewport Units',
                  codeSnippet: `h1 {
  font-size: 5vw; /* Font size is 5% of viewport width */
}
.hero-text {
  font-size: calc(2rem + 2vw); /* Combination of rem and vw for minimum size and scaling */
  line-height: 1.2;
}
.spacing {
  margin-top: 10vh; /* Margin is 10% of viewport height */
}`,
                  explanation: 'Shows `vw` for font size that scales directly with viewport width. `calc()` is used for fluid typography to ensure a minimum font size (`rem`) plus a scaling factor (`vw`). `vh` is used for vertical spacing that adapts to screen height.',
                  imageUrl: 'https://example.com/images/fluid-typography.png', // Placeholder for fluid typography visual
                },
              ],
            },
            {
              title: 'Using object-fit and object-position for images and videos',
              description: 'Control how images and videos resize and are cropped within their content boxes using `object-fit` and `object-position`.',
              codeLessons: [
                {
                  lessonTitle: 'Object-fit for Image Cropping',
                  codeSnippet: `img.avatar {
  width: 100px;
  height: 100px;
  object-fit: cover; /* Image covers the area, cropping if necessary */
  object-position: top center; /* Positions the top center of the image */
  border-radius: 50%;
}
video.banner {
  width: 100%;
  height: 200px;
  object-fit: contain; /* Video fits within the area, letterboxing if necessary */
}`,
                  explanation: '`object-fit: cover` ensures the image fills the container, cropping parts if its aspect ratio doesn\'t match. `object-fit: contain` ensures the entire image is visible, potentially adding empty space (letterboxing). `object-position` shifts the image within its box.',
                  imageUrl: 'https://example.com/images/object-fit-example.png', // Placeholder for object-fit visual
                },
              ],
            },
            {
              title: 'CSS-based solutions for responsive images (e.g., using background-image with background-size: cover/contain)',
              description: 'Explore techniques to make background images responsive using `background-size` and media queries, as an alternative to HTML `<img>` approaches.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-9-css-tricks-advanced-techniques',
          title: 'Lesson 9: CSS-Tricks & Advanced Techniques',
          duration: '75 min',
          subtopics: [
            {
              title: 'clip-path for complex shapes',
              description: 'Create non-rectangular shapes for elements using the `clip-path` property with various functions (polygon, circle, inset, path).',
              codeLessons: [
                {
                  lessonTitle: 'Creating Custom Shapes with clip-path',
                  codeSnippet: `div.diamond {
  width: 200px;
  height: 200px;
  background-color: hotpink;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* Creates a diamond shape */
}
img.circle-clip {
  width: 150px;
  height: 150px;
  object-fit: cover;
  clip-path: circle(50% at 50% 50%); /* Clips image into a circle */
}`,
                  explanation: '`clip-path` allows clipping an element to a custom shape. `polygon()` defines a shape with coordinates, while `circle()` and `inset()` provide simpler geometric shapes, enabling unique visual designs.',
                  imageUrl: 'https://example.com/images/clip-path-shapes.png', // Placeholder for clip-path shapes
                },
              ],
            },
            {
              title: 'filter property for visual effects (blur, grayscale, sepia, etc.)',
              description: 'Apply various Photoshop-like visual effects to elements (images, videos, HTML content) using the `filter` property.',
              codeLessons: [
                {
                  lessonTitle: 'Image Filters',
                  codeSnippet: `img.grayscale { filter: grayscale(100%); }
img.blur { filter: blur(5px); }
img.sepia { filter: sepia(70%); }
img.combo { filter: brightness(1.2) contrast(1.5) hue-rotate(90deg); }`,
                  explanation: 'The `filter` property applies graphical effects like `grayscale`, `blur`, and `sepia` to an element. Multiple filters can be chained for complex effects, allowing for creative image manipulation directly in CSS.',
                  imageUrl: 'https://example.com/images/css-filters.png', // Placeholder for CSS filters visual
                },
              ],
            },
            {
              title: 'mix-blend-mode and background-blend-mode for artistic effects',
              description: 'Blend elements or background layers with the content below them using various blend modes (e.g., `multiply`, `screen`, `overlay`), similar to graphic design software.',
              codeLessons: [
                {
                  lessonTitle: 'Mix-Blend-Mode Example',
                  codeSnippet: `/* HTML */
<div class="background-image">
  <h1 class="blended-text">Blend Me</h1>
</div>

/* CSS */
.background-image {
  background: url('abstract.jpg') no-repeat center/cover;
  width: 300px;
  height: 200px;
}
.blended-text {
  color: white;
  font-size: 3em;
  mix-blend-mode: overlay; /* Blends text with background below */
}`,
                  explanation: '`mix-blend-mode` specifies how an element\'s content should blend with its direct background. `overlay` blends the colors based on their lightness, creating interesting visual interactions between text and images.',
                  imageUrl: 'https://example.com/images/mix-blend-mode.png', // Placeholder for mix-blend-mode visual
                },
              ],
            },
            {
              title: 'Custom cursors',
              description: 'Change the mouse cursor for specific elements using the `cursor` property, including custom image cursors.',
              codeLessons: [],
            },
            {
              title: 'CSS counters',
              description: 'Automatically number elements using CSS counters, useful for ordered lists, sections, or nested structures without explicit HTML numbering.',
              codeLessons: [
                {
                  lessonTitle: 'CSS Counters Example',
                  codeSnippet: `/* HTML */
<ol class="chapter-list">
  <li>Section Title
    <ol><li>Sub-section 1</li><li>Sub-section 2</li></ol>
  </li>
  <li>Section Title
    <ol><li>Sub-section 1</li></ol>
  </li>
</ol>

/* CSS */
body { counter-reset: chapter section; } /* Initialize counters */

.chapter-list li {
  counter-increment: chapter; /* Increment chapter counter */
  counter-reset: section; /* Reset section counter for new chapter */
}
.chapter-list li::before {
  content: counter(chapter) ". "; /* Display chapter number */
}

.chapter-list li ol li {
  counter-increment: section; /* Increment section counter */
}
.chapter-list li ol li::before {
  content: counter(chapter) "." counter(section) " "; /* Display chapter.section */
}`,
                  explanation: 'CSS counters allow automatic numbering of elements. `counter-reset` initializes a counter, and `counter-increment` increases it. `content: counter()` displays the current value, enabling nested numbering like "1.1", "1.2", "2.1".',
                  imageUrl: 'https://example.com/images/css-counters.png', // Placeholder for CSS counters visual
                },
              ],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-10-design-systems-component-libraries',
          title: 'Lesson 10: Design Systems & Component Libraries (CSS Perspective)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Role of CSS in a Design System',
              description: 'Understand how CSS forms the stylistic foundation of a design system, defining the visual language and consistency across products.',
              codeLessons: [],
            },
            {
              title: 'Tokenization of CSS (colors, spacing, typography)',
              description: 'Learn about design tokens (abstract values representing visual design decisions like colors, fonts, spacing) and how they are implemented with CSS variables for centralized control and consistency.',
              codeLessons: [
                {
                  lessonTitle: 'Design Tokens with CSS Variables',
                  codeSnippet: `:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-text: #212529;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  /* Typography */
  --font-family-body: 'Arial', sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.5;
}

button.primary {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
}`,
                  explanation: 'This demonstrates using CSS variables as design tokens for colors, spacing, and typography. Defining these central values on `:root` allows for consistent application across all components and easy global updates or theming, forming the core of a design system\'s CSS.',
                  imageUrl: 'https://example.com/images/design-tokens-css.png', // Placeholder for design tokens visual
                },
              ],
            },
            {
              title: 'Building reusable, themed components with CSS',
              description: 'Apply architectural principles (like BEM or utility-first) and CSS variables to build components that are reusable and can be easily themed or customized.',
              codeLessons: [],
            },
            {
              title: 'Documenting CSS styles within a design system',
              description: 'Importance of clear documentation for CSS styles, variables, and components within a design system for collaboration and consistency.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'css-advanced-lesson-11-internationalization-rtl',
          title: 'Lesson 11: Internationalization (i18n/L10n) & RTL (CSS Aspect)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Logical Properties: margin-inline-start, padding-block-end, inset',
              description: 'Learn to use modern logical CSS properties that define styles relative to the flow direction (e.g., text direction, block direction) rather than physical directions (top, right, bottom, left).',
              codeLessons: [
                {
                  lessonTitle: 'Using Logical Properties for RTL Support',
                  codeSnippet: `/* Traditional (physical) properties */
.box {
  margin-left: 20px;
  padding-top: 10px;
}

/* Logical properties (adapts to writing mode) */
.box-logical {
  margin-inline-start: 20px; /* Equivalent to margin-left in LTR, margin-right in RTL */
  padding-block-start: 10px; /* Equivalent to padding-top in horizontal writing modes */
  inset-inline-start: 0; /* Logical equivalent of left: 0 or right: 0 */
  border-inline-end: 1px solid red; /* Logical border */
}`,
                  explanation: 'Logical properties like `margin-inline-start` and `padding-block-start` automatically adjust their meaning based on the writing direction of the document. For Left-to-Right (LTR) languages, `margin-inline-start` is `margin-left`; for Right-to-Left (RTL) languages, it becomes `margin-right`, simplifying internationalization.',
                  imageUrl: 'https://example.com/images/logical-properties.png', // Placeholder for logical properties visual
                },
              ],
            },
            {
              title: 'direction and unicode-bidi properties for RTL languages',
              description: 'Understand how the `direction` property (along with HTML\'s `dir` attribute) and `unicode-bidi` control the text direction and embedding level for languages like Arabic and Hebrew.',
              codeLessons: [],
            },
            {
              title: 'Using CSS to adapt layouts for different writing modes',
              description: 'Strategies for creating layouts that seamlessly adapt to different writing modes (e.g., horizontal LTR, horizontal RTL, vertical) using logical properties and flexible layout models.',
              codeLessons: [],
            },
          ],
        },
      ],
      projects: [
        {
          id: 'css-advanced-project-1',
          title: 'Project 1: Create a Complex Multi-Step Animation or Parallax Effect',
          description: 'Design a webpage with a visually complex CSS animation. This could be: 1) A multi-step `keyframes` animation on a hero image or text, involving multiple `transform` and `opacity` changes with different `animation-timing-function` and `animation-fill-mode` values. 2) A basic parallax scrolling effect using `background-attachment: fixed` or CSS `transform` on scroll (potentially with light JavaScript for scroll events if needed). Focus on making it smooth and performant.',
          checkpoint: 'Profile the animation in Chrome DevTools Performance tab (or similar). Identify if there are any layout shifts or repaints ("jank"). Ensure the animation is smooth at 60fps where possible, and that `will-change` hints are applied if beneficial.',
        },
        {
          id: 'css-advanced-project-2',
          title: 'Project 2: Style a Small UI Kit using a BEM Methodology',
          description: 'Create an HTML page with a small set of UI components (e.g., buttons with different variants, a card component, a simple form input group, an alert message). Style these components strictly following the BEM (Block, Element, Modifier) naming convention. Focus on making the CSS modular, reusable, and easy to understand based on its class names.',
          checkpoint: 'Review your CSS class names for adherence to the BEM standard (`block__element--modifier`). Inspect the HTML to confirm correct class usage. Assess the CSS for modularity and avoid overly nested selectors that break BEM principles.',
        },
        {
          id: 'css-advanced-project-3',
          title: 'Project 3: (Conceptual) Plan CSS Architecture for a New Feature',
          description: 'Given a new feature description (e.g., a "Product Comparison Table" or an "Interactive Dashboard Widget"), conceptually plan how you would structure its CSS using one of the methodologies discussed (e.g., CSS Modules, utility-first principles, or a highly component-driven approach like CSS-in-JS). Outline the pros and cons of your chosen approach for this specific feature and explain why you chose it. (No code required, just a detailed plan).',
          checkpoint: 'Your plan should clearly articulate the chosen methodology and justify its selection for the given feature. It should identify key CSS considerations (scoping, reusability, maintainability) and explain how the methodology addresses them. Discuss potential challenges and how you might mitigate them.',
        },
        {
          id: 'css-advanced-project-4',
          title: 'Project 4: (Simulated) Identify and Propose Critical CSS for a Page',
          description: 'Take a relatively complex HTML page (either a provided sample or a real-world site). Manually identify the CSS rules that are absolutely necessary for rendering the initial "above-the-fold" content. Propose a strategy for extracting this critical CSS, inlining it into the HTML, and asynchronously loading the rest of the stylesheet. Explain how this would improve FCP and LCP.',
          checkpoint: 'Your proposal should accurately pinpoint the critical CSS rules. Clearly describe the steps for extraction and inlining. Explain the technical mechanisms for asynchronously loading the remaining CSS (`media="print"`, `onload`, `preload`). Quantify the expected impact on FCP/LCP based on typical browser rendering behavior.',
        },
        {
          id: 'css-advanced-project-5',
          title: 'Project 5: Analyze and Debug CSS Rendering Performance',
          description: 'Find or create a simple webpage with a known CSS performance issue (e.g., a complex animation that causes jank, a scroll effect that is choppy, or a large layout shift). Use Chrome DevTools (specifically the "Performance" tab and "Rendering" panel) to record and analyze the rendering pipeline. Identify the specific CSS properties or operations causing repaints/reflows and propose concrete CSS/HTML fixes to improve performance.',
          checkpoint: 'Successfully use the DevTools Performance tab to record a trace. Identify where "Layout" and "Paint" events are happening excessively. Pinpoint the CSS properties responsible for the performance bottleneck. Propose specific, actionable changes (e.g., using `transform` instead of `left`/`top`, `will-change`, batching DOM reads/writes) to fix the issue and explain *why* these fixes work.',
        },
        {
          id: 'css-advanced-project-6',
          title: 'Project 6: (Conceptual) Explore CSS Houdini Examples',
          description: 'Research and conceptually explore a practical application of CSS Houdini (e.g., a custom `Paint Worklet` for a unique border/background, or a `Layout Worklet` for a novel grid system). Explain the problem it solves that traditional CSS cannot, and how Houdini allows for its implementation. Provide a high-level overview of the HTML, CSS, and JavaScript (worklet) code that would be involved. (No actual coding or browser support for all features is required, focus on understanding the concept).',
          checkpoint: 'Your explanation should clearly define the problem and how Houdini addresses it by exposing the CSS engine. Describe the role of each part (HTML, CSS custom properties, JS worklet). Demonstrate an understanding of why this is an "advanced" topic beyond standard CSS capabilities.',
        },
        {
          id: 'css-advanced-project-7',
          title: 'Project 7: Enhance Component Accessibility with CSS Media Features',
          description: 'Take an existing interactive component (e.g., a modal, a carousel, or a button with animations) from a previous project. Enhance its accessibility using advanced CSS media features and pseudo-classes. Specifically: 1) Use `prefers-reduced-motion` to disable or simplify animations for users who prefer it. 2) Implement `prefers-color-scheme` to provide a dark mode option. 3) Ensure `:focus-visible` styles are distinct and helpful for keyboard users, while minimizing distracting outlines for mouse clicks.',
          checkpoint: 'Test the component\'s accessibility: - Change system motion settings to "reduce" and verify animations are modified/disabled. - Switch system to dark mode and confirm the component\'s appearance changes. - Navigate to the component using only the keyboard and observe the clear `:focus-visible` outline. Click the component with the mouse and verify the outline is less intrusive or absent.',
        },
        {
          id: 'css-advanced-project-8',
          title: 'Project 8: Design a Responsive Image Gallery using `object-fit` and Viewport Units',
          description: 'Build an image gallery layout. Use CSS Grid or Flexbox for the overall grid structure. For each image in the gallery, use fixed aspect ratio containers (e.g., `padding-bottom` trick or `aspect-ratio` property). Within these containers, use the `<img>` element with `object-fit: cover` and `object-position` to ensure images always fill their allocated space beautifully, regardless of their original aspect ratio. Experiment with fluid image titles or descriptions using `vw` units.',
          checkpoint: 'Resize the browser window and observe how the image gallery adapts. Ensure images are consistently cropped or scaled to fit their containers without distortion (`object-fit`). Verify that `object-position` works as expected. Check that any text elements using `vw` units scale fluidly with the viewport.',
        },
        {
          id: 'css-advanced-project-9',
          title: 'Project 9: Create a Unique Banner with `clip-path` and `filter` Effects',
          description: 'Design a hero banner section for a webpage. Apply a complex, non-rectangular shape to the banner using the `clip-path` property (e.g., a polygon, or a custom SVG path). On the background image or foreground elements within the banner, apply various `filter` effects (e.g., `grayscale`, `blur`, `brightness`, `contrast`, `hue-rotate`) to create a distinctive visual style. Optionally, experiment with `mix-blend-mode` for a layered artistic effect.',
          checkpoint: 'Visually inspect the banner. Confirm that `clip-path` creates the desired custom shape. Verify that the `filter` effects are applied and create the intended visual transformation. If `mix-blend-mode` is used, ensure the blending effect is as expected. Test cross-browser compatibility if time permits.',
        },
        {
          id: 'css-advanced-project-10',
          title: 'Project 10: (Conceptual) Outline CSS for a Small Design System',
          description: 'Imagine you are starting a new project and need to build a small design system for its UI. Outline the core CSS architecture for this system. Focus on: 1) How you would use CSS Variables for design tokens (colors, spacing, typography, breakpoints). 2) How you would structure the CSS for reusable components (e.g., buttons, alerts, form inputs) based on a chosen methodology (BEM, utility-first, etc.). 3) How you would ensure consistency and scalability across components. Provide conceptual code snippets for tokens and a single component.',
          checkpoint: 'Your outline should present a clear, logical structure for the CSS in a design system. It should demonstrate how CSS variables are used for tokenization. The chosen component styling should reflect the chosen methodology and show how consistency is achieved through token usage. Explain the benefits of your proposed structure for scalability.',
        },
        {
          id: 'css-advanced-project-11',
          title: 'Project 11: Adapt a Layout for Right-to-Left (RTL) Languages',
          description: 'Take a simple, existing HTML layout (e.g., a navigation bar or a card component with text and an icon). Modify its CSS to support Right-to-Left (RTL) reading direction in addition to Left-to-Right (LTR). This primarily involves replacing physical CSS properties (like `margin-left`, `left`, `border-left`) with their logical equivalents (`margin-inline-start`, `inset-inline-start`, `border-inline-start`). Set the HTML `dir="rtl"` attribute on the `<body>` or root element to simulate RTL context and observe the layout changes.',
          checkpoint: 'Toggle the `dir="rtl"` attribute on your HTML and observe the layout. Confirm that elements that were left-aligned are now right-aligned (and vice versa) without explicitly changing the CSS values for `left`/`right`. Ensure padding, margins, and borders behave correctly in the RTL context due to logical properties.',
        },
      ],
    },
  ],
};

export default css3Course;