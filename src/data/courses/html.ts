import { Course } from '../courses'; // Assuming your Course interface is in a file named courses.ts

const html5Course: Course = {
  id: 'html5-frontend-developers',
  title: 'HTML5 for Front-End Developers',
  description: 'A comprehensive curriculum designed to equip front-end developers with deep knowledge of HTML5, from fundamental document structure to advanced APIs, web components, and performance optimizations.',
  icon: 'Code', // Using a generic code icon for a programming course
  color: 'bg-orange-600', // A suitable color for an HTML-focused course
  estimatedHours: 90, // This is a rough estimate, adjust as needed
  totalLessons: 22, // Total count of lessons across all sections
  sections: [
    {
      id: 'html-section-basics',
      title: 'Section 1: Basics (Beginner-Friendly, Core Foundations)',
      level: 'basic',
      lessons: [
        {
          id: 'html-basics-lesson-1-intro-document-structure',
          title: 'Lesson 1: Introduction to HTML & Document Structure',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is HTML? History & Evolution (HTML5 focus)',
              description: 'Understand HTML as the standard markup language for creating web pages, tracing its evolution to HTML5, and its role in structuring web content.',
              codeLessons: [],
            },
            {
              title: 'Basic Document Structure: <!DOCTYPE html>, <html>, <head>, <body>',
              description: 'Learn the essential tags that form the backbone of every HTML document, defining its type, root element, metadata, and visible content.',
              codeLessons: [
                {
                  lessonTitle: 'Minimal HTML5 Document',
                  codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML5 Page</title>
</head>
<body>
    <h1>Hello, HTML5!</h1>
    <p>This is a basic webpage structure.</p>
</body>
</html>`,
                  explanation: 'This code snippet demonstrates the absolute minimum required for a valid HTML5 document, including the `DOCTYPE`, `html`, `head`, and `body` tags.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Metadata: <meta>, <title>, <link>, <style>',
              description: 'Explore the `<head>` section elements for defining page title, character set, viewport, linking external stylesheets, and embedding internal styles.',
              codeLessons: [
                {
                  lessonTitle: 'Using Meta, Title, and Link Tags',
                  codeSnippet: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Website</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Internal CSS rules go here */
        body { font-family: sans-serif; }
    </style>
</head>`,
                  explanation: 'This example shows how `meta` tags set character encoding and viewport for responsiveness, `title` defines the browser tab title, and `link`/`style` handle CSS.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Semantic HTML: Why it matters',
              description: 'Understand the importance of using HTML elements that convey meaning (semantics) for accessibility, SEO, and maintainability.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-basics-lesson-2-text-formatting-semantic-elements',
          title: 'Lesson 2: Text Formatting & Semantic Elements',
          duration: '75 min',
          subtopics: [
            {
              title: 'Headings (<h1> to <h6>)',
              description: 'Learn to use headings for structuring content hierarchy, crucial for readability and accessibility.',
              codeLessons: [],
            },
            {
              title: 'Paragraphs (<p>)',
              description: 'The fundamental element for block-level text content.',
              codeLessons: [],
            },
            {
              title: 'Text Formatting: <strong>, <em>, <mark>, <small>, <sub>, <sup>, <del>, <ins>',
              description: 'Explore inline elements for emphasizing, marking, and denoting various text styles.',
              codeLessons: [
                {
                  lessonTitle: 'Text Formatting Examples',
                  codeSnippet: `<p>This is a <strong>strong</strong> word.</p>
<p>This is <em>emphasized</em> text.</p>
<p>You can <mark>highlight</mark> important parts.</p>
<p>The chemical formula for water is H<sub>2</sub>O.</p>
<p>The price was <del>$20</del> <ins>$15</ins>.</p>`,
                  explanation: 'Demonstrates common text formatting tags that convey semantic meaning in addition to visual styling.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Quotations: <blockquote>, <q>, <cite>',
              description: 'Properly mark up block and inline quotations, and cite sources.',
              codeLessons: [],
            },
            {
              title: 'Code Formatting: <code>, <pre>, <kbd>, <samp>, <var>',
              description: 'Elements specifically designed for displaying code snippets, keyboard input, sample output, and variables.',
              codeLessons: [
                {
                  lessonTitle: 'Code Formatting Examples',
                  codeSnippet: `<p>Use the <code>console.log()</code> function.</p>
<pre>
  <code>
    function greet(name) {
      return "Hello, " + name + "!";
    }
  </code>
</pre>
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>`,
                  explanation: 'Illustrates the use of `<code>` for inline code, `<pre>` for preformatted blocks of code, and `<kbd>` for keyboard input.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Semantic Text Elements: <time>, <abbr>, <address>, <bdo>',
              description: 'Dive into more specific semantic elements for date/time, abbreviations, contact information, and text direction overrides.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-basics-lesson-3-links-navigation',
          title: 'Lesson 3: Links & Navigation',
          duration: '60 min',
          subtopics: [
            {
              title: 'Anchor Tag (<a>): Hyperlinks (internal, external)',
              description: 'The cornerstone of the web, enabling navigation between pages and resources.',
              codeLessons: [
                {
                  lessonTitle: 'Internal and External Links',
                  codeSnippet: `<a href="https://www.google.com" target="_blank">Visit Google</a>
<a href="#section-about">Go to About Section</a>
<a href="contact.html">Contact Us</a>`,
                  explanation: 'Examples of an external link opening in a new tab, an internal link to an ID on the same page, and a relative link to another HTML file.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Attributes: href, target, rel',
              description: 'Understand essential attributes for link destinations, opening behavior, and relationship to the current document.',
              codeLessons: [],
            },
            {
              title: 'Navigation Lists: <ul>, <ol>, <li>',
              description: 'Structured lists for unordered (bullet points) and ordered (numbered) items, commonly used for navigation menus.',
              codeLessons: [
                {
                  lessonTitle: 'Unordered and Ordered Lists',
                  codeSnippet: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About Us</a></li>
  </ul>
</nav>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>`,
                  explanation: 'Shows an unordered list used for a navigation menu within a `nav` element and a basic ordered list for sequential steps.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Definition Lists: <dl>, <dt>, <dd>',
              description: 'Lists for terms and their descriptions, suitable for glossaries or FAQ sections.',
              codeLessons: [],
            },
            {
              title: 'Image Links & Email Links',
              description: 'Create clickable images and direct links to email addresses.',
              codeLessons: [
                {
                  lessonTitle: 'Image and Email Links',
                  codeSnippet: `<a href="https://example.com/product-page">
  <img src="product.jpg" alt="Product Image" width="100">
</a>
<a href="mailto:info@example.com?subject=Inquiry">Email Us</a>`,
                  explanation: 'An image wrapped in an anchor tag makes the image clickable. The `mailto:` protocol creates an email link, optionally pre-filling the subject.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'html-basics-lesson-4-images-multimedia',
          title: 'Lesson 4: Images & Multimedia',
          duration: '75 min',
          subtopics: [
            {
              title: 'Image Tag (<img>): src, alt, width, height',
              description: 'Embed images into web pages, ensuring accessibility with the `alt` attribute and controlling dimensions.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Image Embedding',
                  codeSnippet: `<img src="nature.jpg" alt="A scenic view of mountains and a lake" width="600" height="400">`,
                  explanation: 'This tag embeds an image, providing its source (`src`), a descriptive alternative text (`alt`) for accessibility and when the image fails to load, and explicit `width` and `height` attributes.',
                  imageUrl: 'https://example.com/images/sample-nature-image.jpg', // Placeholder image
                },
              ],
            },
            {
              title: 'Figure and Figcaption (<figure>, <figcaption>)',
              description: 'Group images, diagrams, code snippets, etc., with a caption for semantic clarity.',
              codeLessons: [
                {
                  lessonTitle: 'Image with Figcaption',
                  codeSnippet: `<figure>
  <img src="chart.png" alt="Sales growth chart">
  <figcaption>Figure 1: Quarterly Sales Growth</figcaption>
</figure>`,
                  explanation: 'The `figure` element wraps an image (or other content) and its associated `figcaption`, providing a semantic grouping for content and its description.',
                  imageUrl: 'https://example.com/images/sample-chart-image.png', // Placeholder image
                },
              ],
            },
            {
              title: 'HTML5 Audio (<audio>): src, controls, autoplay, loop, <source>',
              description: 'Embed audio files directly into web pages, with controls and multiple source options for browser compatibility.',
              codeLessons: [
                {
                  lessonTitle: 'Embedding Audio with Multiple Sources',
                  codeSnippet: `<audio controls autoplay loop>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`,
                  explanation: 'This shows an audio player with default controls, set to autoplay and loop. Multiple `source` tags are provided for different file formats to ensure broader browser compatibility.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'HTML5 Video (<video>): src, controls, autoplay, loop, poster, <source>',
              description: 'Embed video files, offering similar controls and source options as audio, plus a `poster` attribute for a thumbnail.',
              codeLessons: [
                {
                  lessonTitle: 'Embedding Video with Poster and Multiple Sources',
                  codeSnippet: `<video controls poster="thumbnail.jpg" width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`,
                  explanation: 'Similar to audio, this embeds a video player. The `poster` attribute displays an image before the video loads, and multiple `source` tags ensure compatibility.',
                  imageUrl: 'https://example.com/images/sample-video-poster.jpg', // Placeholder image
                },
              ],
            },
            {
              title: 'Embedding content: <iframe> (basics)',
              description: 'Use iframes to embed content from another source into your HTML document (e.g., YouTube videos, Google Maps).',
              codeLessons: [
                {
                  lessonTitle: 'Basic Iframe Embedding',
                  codeSnippet: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        width="560" height="315" frameborder="0" allowfullscreen></iframe>`,
                  explanation: 'This `iframe` embeds a YouTube video. `frameborder="0"` removes the default border, and `allowfullscreen` enables full-screen mode.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'html-basics-lesson-5-tables',
          title: 'Lesson 5: Tables',
          duration: '60 min',
          subtopics: [
            {
              title: 'Basic Table Structure: <table>, <thead>, <tbody>, <tfoot>',
              description: 'Learn the fundamental elements for creating semantic data tables with distinct header, body, and footer sections.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Table Structure',
                  codeSnippet: `<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$1200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Prices are subject to change</td>
    </tr>
  </tfoot>
</table>`,
                  explanation: 'This shows the logical structure of an HTML table using `<thead>`, `<tbody>`, and `<tfoot>` for semantic grouping of content.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Table Rows and Cells: <tr>, <th>, <td>',
              description: 'Define table rows (`<tr>`), header cells (`<th>`), and data cells (`<td>`).',
              codeLessons: [],
            },
            {
              title: 'Attributes: colspan, rowspan',
              description: 'Span cells across multiple columns (`colspan`) or rows (`rowspan`) for complex table layouts.',
              codeLessons: [
                {
                  lessonTitle: 'Table with colspan and rowspan',
                  codeSnippet: `<table>
  <thead>
    <tr>
      <th>Category</th>
      <th colspan="2">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Electronics</td>
      <td>Product A</td>
      <td>Price X</td>
    </tr>
    <tr>
      <td>Product B</td>
      <td>Price Y</td>
    </tr>
  </tbody>
</table>`,
                  explanation: 'This example uses `colspan` to merge two header cells and `rowspan` to make a category cell span two rows, creating a more complex table layout.',
                  imageUrl: 'https://example.com/images/table-colspan-rowspan.png', // Placeholder for table layout visual
                },
              ],
            },
            {
              title: 'Semantic Table Elements for Accessibility',
              description: 'Enhance table accessibility using `<caption>`, `<colgroup>`, `<col>`, and `scope` attribute on `<th>`.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-basics-lesson-6-forms-part-1-basic-inputs',
          title: 'Lesson 6: Forms & User Input (Part 1: Basic Inputs)',
          duration: '75 min',
          subtopics: [
            {
              title: 'Form Tag (<form>): action, method',
              description: 'The fundamental container for user input, defining where and how form data is sent (e.g., `GET` or `POST`).',
              codeLessons: [
                {
                  lessonTitle: 'Basic Form Structure',
                  codeSnippet: `<form action="/submit-form" method="POST">
  <button type="submit">Submit</button>
</form>`,
                  explanation: 'The `form` tag defines the endpoint (`action`) and HTTP method (`method`) for submitting the form data.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Input Types: text, password, email, number, date, color, range, url, tel, search',
              description: 'Explore a wide variety of HTML5 input types for specific data entry, offering better user experience and built-in validation.',
              codeLessons: [
                {
                  lessonTitle: 'Various HTML5 Input Types',
                  codeSnippet: `<label for="username">Username:</label>
<input type="text" id="username" name="username">

<label for="user-email">Email:</label>
<input type="email" id="user-email" name="user_email">

<label for="age">Age:</label>
<input type="number" id="age" name="age" min="0" max="120">

<label for="fav-color">Favorite Color:</label>
<input type="color" id="fav-color" name="fav_color">`,
                  explanation: 'Shows different `input` types (`text`, `email`, `number`, `color`) which provide specialized keyboards on mobile devices and browser-level validation hints.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Labels (<label>) for accessibility',
              description: 'Properly associate labels with form controls for improved accessibility, allowing screen readers to announce the purpose of input fields.',
              codeLessons: [
                {
                  lessonTitle: 'Associating Label with Input',
                  codeSnippet: `<label for="full-name">Full Name:</label>
<input type="text" id="full-name" name="full_name">

<label>Your Message:
  <textarea name="message"></textarea>
</label>`,
                  explanation: 'Demonstrates two ways to associate a `label` with an input: using the `for` attribute referencing the input\'s `id`, or by wrapping the input element within the `label` tag.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Textarea (<textarea>)',
              description: 'A multi-line text input control for longer user messages.',
              codeLessons: [],
            },
            {
              title: 'Buttons (<button>, <input type="submit">, <input type="reset">)',
              description: 'Different ways to create interactive buttons for form submission, resetting, or general actions.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-basics-lesson-7-forms-part-2-advanced-inputs-validation',
          title: 'Lesson 7: Forms & User Input (Part 2: Advanced Inputs & Validation)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Checkboxes (<input type="checkbox">)',
              description: 'Allow users to select zero or more options from a set.',
              codeLessons: [
                {
                  lessonTitle: 'Checkbox Example',
                  codeSnippet: `<label>
  <input type="checkbox" name="newsletter" value="subscribe" checked> Subscribe to Newsletter
</label>
<label>
  <input type="checkbox" name="terms" value="agree" required> I agree to terms and conditions
</label>`,
                  explanation: 'Shows checkboxes, one pre-checked and another marked as `required`, demonstrating their usage for boolean choices or multiple selections.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Radio Buttons (<input type="radio">)',
              description: 'Allow users to select exactly one option from a set of mutually exclusive choices.',
              codeLessons: [
                {
                  lessonTitle: 'Radio Button Group',
                  codeSnippet: `<p>Select your favorite fruit:</p>
<label><input type="radio" name="fruit" value="apple" checked> Apple</label><br>
<label><input type="radio" name="fruit" value="banana"> Banana</label><br>
<label><input type="radio" name="fruit" value="orange"> Orange</label>`,
                  explanation: 'Radio buttons with the same `name` attribute form a group, ensuring only one can be selected at a time.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Select (<select>) with option and optgroup',
              description: 'Create dropdown lists for selecting a single or multiple options, with `optgroup` for categorizing options.',
              codeLessons: [
                {
                  lessonTitle: 'Select with Optgroup',
                  codeSnippet: `<label for="country">Country:</label>
<select id="country" name="country">
  <optgroup label="Europe">
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </optgroup>
  <optgroup label="North America">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </optgroup>
</select>`,
                  explanation: 'Demonstrates a `select` dropdown with options categorized into `optgroup` elements for better organization.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Datalist (<datalist>)',
              description: 'Provide a list of suggested options for an input field, combining the flexibility of text input with pre-defined suggestions.',
              codeLessons: [
                {
                  lessonTitle: 'Input with Datalist Suggestions',
                  codeSnippet: `<label for="browser">Choose your browser from the list:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>`,
                  explanation: 'The `datalist` provides a list of `option` suggestions for the `input` field, but the user is not restricted to these options.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Fieldset and Legend (<fieldset>, <legend>)',
              description: 'Group related form controls visually and semantically, providing a caption for the group.',
              codeLessons: [
                {
                  lessonTitle: 'Fieldset and Legend Example',
                  codeSnippet: `<fieldset>
  <legend>Contact Information</legend>
  <label for="contact-email">Email:</label>
  <input type="email" id="contact-email" name="contact_email">
  <label for="contact-phone">Phone:</label>
  <input type="tel" id="contact-phone" name="contact_phone">
</fieldset>`,
                  explanation: 'The `fieldset` visually groups related form elements, and the `legend` provides a title for that group, improving form structure and accessibility.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'HTML5 Form Validation Attributes: required, minlength, maxlength, pattern, type',
              description: 'Utilize built-in browser validation attributes to provide client-side form validation without JavaScript.',
              codeLessons: [
                {
                  lessonTitle: 'HTML5 Validation Attributes',
                  codeSnippet: `<label for="user-age">Age (min 18):</label>
<input type="number" id="user-age" name="user_age" min="18" required>

<label for="postcode">Postcode (e.g., 12345):</label>
<input type="text" id="postcode" name="postcode" pattern="[0-9]{5}" title="Five digit postcode" required>`,
                  explanation: 'Shows `required` for mandatory fields, `min` for number input, and `pattern` for regular expression validation, providing immediate feedback to the user before submission.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
      ],
      quiz: {
        id: 'html-basics-quiz-1',
        title: 'Quiz 1: HTML Basics & Forms',
        questions: [
          {
            id: 'qb1',
            question: 'Which of the following HTML5 elements is used to provide an alternative text for an image?',
            options: ['`src`', '`alt`', '`title`', '`description`'],
            correctAnswer: 1, // alt
          },
          {
            id: 'qb2',
            question: 'What is the correct way to link an external CSS file to an HTML document?',
            options: [
              '`<style src="styles.css"></style>`',
              '`<link rel="stylesheet" href="styles.css">`',
              '`<css href="styles.css">`',
              '`<script src="styles.css"></script>`',
            ],
            correctAnswer: 1, // <link rel="stylesheet" href="styles.css">
          },
          {
            id: 'qb3',
            question: 'Which HTML element is specifically designed for multi-line text input?',
            options: ['`<input type="text">`', '`<textarea>`', '`<input type="paragraph">`', '`<p>`'],
            correctAnswer: 1, // textarea
          },
          {
            id: 'qb4',
            question: 'The `target="_blank"` attribute on an `<a>` tag will:',
            options: [
              'Open the linked document in the same window/tab.',
              'Open the linked document in a new window or tab.',
              'Open the linked document in a pop-up window.',
              'Prevent the link from opening.',
            ],
            correctAnswer: 1, // Open the linked document in a new window or tab.
          },
          {
            id: 'qb5',
            question: 'Which of these is NOT a semantic HTML5 element?',
            options: ['`<header>`', '`<section>`', '`<div>`', '`<article>`'],
            correctAnswer: 2, // <div>
          },
          {
            id: 'qb6',
            question: 'To associate a `<label>` with an `<input>` element for accessibility, you should use:',
            options: [
              'The `name` attribute on the label.',
              'The `id` attribute on the label and the `for` attribute on the input.',
              'The `for` attribute on the label and the `id` attribute on the input.',
              'Wrap the input inside a `div` and put the label next to it.',
            ],
            correctAnswer: 2, // The `for` attribute on the label and the `id` attribute on the input.
          },
          {
            id: 'qb7',
            question: 'Which attribute makes a form field mandatory for submission?',
            options: ['`optional`', '`validate`', '`required`', '`must-fill`'],
            correctAnswer: 2, // required
          },
          {
            id: 'qb8',
            question: 'What is the purpose of the `<figure>` and `<figcaption>` elements?',
            options: [
              'To define a mathematical figure.',
              'To create a diagram with multiple layers.',
              'To group media content (like images or code) with a caption.',
              'To define a dynamic graph.',
            ],
            correctAnswer: 2, // To group media content (like images or code) with a caption.
          },
          {
            id: 'qb9',
            question: 'Which attribute is used to make a table cell span across multiple columns?',
            options: ['`rowspan`', '`colspan`', '`cellspan`', '`span-cols`'],
            correctAnswer: 1, // colspan
          },
          {
            id: 'qb10',
            question: 'What is the role of `<!DOCTYPE html>`?',
            options: [
              'It declares the character encoding of the document.',
              'It defines the title of the HTML document.',
              'It declares the document type and version of HTML being used.',
              'It links an external stylesheet to the document.',
            ],
            correctAnswer: 2, // It declares the document type and version of HTML being used.
          },
          {
            id: 'qb11',
            question: 'Which HTML5 input type is best suited for selecting a date from a calendar?',
            options: ['`type="text"`', '`type="datetime"`', '`type="date"`', '`type="calendar"`'],
            correctAnswer: 2, // type="date"
          },
          {
            id: 'qb12',
            question: 'The `<datalist>` element provides:',
            options: [
              'A predefined set of options for a `<select>` element.',
              'A list of pre-filled values that are mandatory for an `<input>` field.',
              'A list of suggested options for an `<input>` field, allowing user to type freely.',
              'A mechanism for storing data locally in the browser.',
            ],
            correctAnswer: 2, // A list of suggested options for an `<input>` field, allowing user to type freely.
          },
          {
            id: 'qb13',
            question: 'Which tag is used to create an ordered list?',
            options: ['`<ul>`', '`<ol>`', '`<li>`', '`<dl>`'],
            correctAnswer: 1, // <ol>
          },
          {
            id: 'qb14',
            question: 'What is the primary benefit of using semantic HTML?',
            options: [
              'It makes your webpage load faster.',
              'It automatically applies default CSS styles.',
              'It provides meaning to the content for browsers and assistive technologies.',
              'It is easier to write than non-semantic HTML.',
            ],
            correctAnswer: 2, // It provides meaning to the content for browsers and assistive technologies.
          },
          {
            id: 'qb15',
            question: 'Which HTML element is used to embed another HTML document within the current one?',
            options: ['`<embed>`', '`<object>`', '`<iframe>`', '`<srcdoc>`'],
            correctAnswer: 2, // <iframe>
          },
        ],
      },
      projects: [
        {
          id: 'html-project-1',
          title: 'Project 1: Create a Basic Personal Webpage',
          description: 'Create a simple HTML page with correct `DOCTYPE`, `head`, and `body` structure. Include a title in the browser tab and a main heading within the body. You can link an empty `styles.css` file to prepare for future styling.',
          checkpoint: 'Verify correct `DOCTYPE` and essential tags (`html`, `head`, `body`, `title`, `h1`). Ensure the linked stylesheet attribute is present and correctly pointing to `styles.css`.',
        },
        {
          id: 'html-project-2',
          title: 'Project 2: Design a Simple Blog Post',
          description: 'Craft an HTML page resembling a blog post. Use `<h1>` for the post title, `<p>` for paragraphs, `<strong>` for important text, `<em>` for emphasis, and use `<q>` or `<blockquote>` for quotes. Include a `<time>` element for the publication date and an `<abbr>` for any abbreviations.',
          checkpoint: 'Ensure appropriate use of semantic text elements for readability and accessibility. Check that text formatting tags are applied correctly.',
        },
        {
          id: 'html-project-3',
          title: 'Project 3: Build a Simple Navigation Menu',
          description: 'Create an HTML page with multiple sections (e.g., "Home", "About", "Services", "Contact"). Implement a navigation menu using an unordered list (`<ul>` with `<li>` and `<a>`) that links to these sections within the same page (using fragment identifiers).',
          checkpoint: 'Verify that all navigation links correctly jump to their respective sections on the page. Ensure the navigation list is structured semantically.',
        },
        {
          id: 'html-project-4',
          title: 'Project 4: Embed an Image Gallery and Multimedia',
          description: 'On an HTML page, embed at least three images, each wrapped in a `<figure>` with a `<figcaption>`. Include a short audio track and a video clip using `<audio>` and `<video>` tags, ensuring they have controls and multiple `<source>` options. Optionally, embed a public YouTube video using an `<iframe>`.',
          checkpoint: 'Test media playback (audio and video) and ensure images are displayed correctly with their captions. Check that `alt` attributes are descriptive for all images.',
        },
        {
          id: 'html-project-5',
          title: 'Project 5: Design a Product Pricing Table',
          description: 'Create a product pricing table using HTML `<table>` elements. Include `<thead>`, `<tbody>`, and `<tfoot>`. Use `<th>` for table headers and `<td>` for data cells. Implement `colspan` and `rowspan` to create a visually interesting and logically structured layout (e.g., merging cells for categories or summary rows).',
          checkpoint: 'Ensure table data is structured logically with appropriate header, body, and footer sections. Verify that `colspan` and `rowspan` attributes are applied correctly and the table renders as intended.',
        },
        {
          id: 'html-project-6',
          title: 'Project 6: Build a Simple Contact Form',
          description: 'Develop an HTML form for contacting support. Include input fields for name (`text`), email (`email`), subject (`text`), and a message (`textarea`). Use `label` elements for all inputs. Add a submit button and a reset button.',
          checkpoint: 'Verify that all form elements are functional and that `label` elements are correctly associated with their corresponding input fields using `for` and `id` attributes. Test form submission (it will likely go to a non-existent endpoint, but confirm the browser tries to submit).',
        },
        {
          id: 'html-project-7',
          title: 'Project 7: Create a Detailed Survey Form with Validation',
          description: 'Design a survey form incorporating various input types: checkboxes, radio buttons, a `select` dropdown with `optgroup`, and an `input` with `datalist`. Group related inputs using `<fieldset>` and `<legend>`. Apply HTML5 validation attributes (`required`, `minlength`, `maxlength`, `pattern`, `type`) to at least half of your input fields.',
          checkpoint: 'Test client-side validation by trying to submit the form with invalid or missing data. Observe browser default validation messages. Ensure all input types work as expected and that `fieldset` and `legend` correctly group elements.',
        },
      ],
    },
    {
      id: 'html-section-medium',
      title: 'Section 2: Medium (Job-Ready, Real-World Topics)',
      level: 'intermediate',
      lessons: [
        {
          id: 'html-medium-lesson-1-semantic-html5-structure',
          title: 'Lesson 1: Semantic HTML5 Structure',
          duration: '60 min',
          subtopics: [
            {
              title: 'New Semantic Elements: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>, <figure>, <figcaption>',
              description: 'Explore the purpose and correct usage of HTML5\'s structural semantic elements to build well-organized and meaningful web pages.',
              codeLessons: [
                {
                  lessonTitle: 'Full Semantic Page Structure',
                  codeSnippet: `<body>
  <header>
    <h1>Website Title</h1>
    <nav>...</nav>
  </header>
  <main>
    <section>
      <h2>Section Title</h2>
      <article>
        <h3>Article Title</h3>
        <p>...</p>
      </article>
      <aside>...</aside>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>`,
                  explanation: 'This illustrates how new HTML5 semantic tags are used to define logical regions of a webpage, improving clarity for developers, browsers, and accessibility tools.',
                  imageUrl: 'https://example.com/images/html5-semantic-layout.png', // Placeholder for HTML5 layout diagram
                },
              ],
            },
            {
              title: 'Structuring a Web Page with HTML5 Semantics',
              description: 'Apply best practices for using these elements to create a logical and accessible document outline.',
              codeLessons: [],
            },
            {
              title: 'Importance for SEO and Accessibility',
              description: 'Understand how semantic HTML directly benefits search engine optimization (SEO) and makes web content more accessible to assistive technologies.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-medium-lesson-2-geolocation-drag-drop',
          title: 'Lesson 2: HTML5 APIs - Geolocation & Drag and Drop',
          duration: '75 min',
          subtopics: [
            {
              title: 'Geolocation API: Accessing user\'s location',
              description: 'Learn how to programmatically obtain the user\'s geographical position using `navigator.geolocation`.',
              codeLessons: [
                {
                  lessonTitle: 'Getting Current Geolocation',
                  codeSnippet: `if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log('Latitude:', latitude, 'Longitude:', longitude);
      // Display on map or use for weather app
    },
    (error) => {
      console.error('Geolocation error:', error.message);
      // Handle permission denied, position unavailable etc.
    }
  );
} else {
  console.log('Geolocation is not supported by this browser.');
}`,
                  explanation: 'This code snippet checks for Geolocation API support and, if available, requests the current position. It includes basic success and error handling for user permissions or location unavailability.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Error Handling in Geolocation',
              description: 'Properly manage scenarios where geolocation access is denied or the position cannot be determined.',
              codeLessons: [],
            },
            {
              title: 'Drag and Drop API: draggable, ondragstart, ondragover, ondrop',
              description: 'Implement native drag-and-drop functionality for elements within a web page, enabling interactive interfaces.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Drag and Drop Example',
                  codeSnippet: `<div id="drag-me" draggable="true" style="border: 1px solid black; padding: 10px;">Drag Me!</div>
<div id="drop-zone" style="border: 2px dashed blue; padding: 20px; min-height: 50px;">Drop Here!</div>

const dragMe = document.getElementById('drag-me');
const dropZone = document.getElementById('drop-zone');

dragMe.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', dragMe.textContent);
});

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault(); // Allows drop
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  dropZone.textContent = 'Dropped: ' + data;
});`,
                  explanation: 'This example shows how to make an element `draggable` and how to define a `drop-zone` using `dragstart`, `dragover` (with `preventDefault`), and `drop` event listeners. `dataTransfer` is used to pass data.',
                  imageUrl: 'https://example.com/images/drag-drop.png', // Placeholder for drag and drop visual
                },
              ],
            },
            {
              title: 'Data Transfer Object',
              description: 'Understand the `DataTransfer` object, used to hold data that is being dragged during a drag-and-drop operation.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-medium-lesson-3-local-session-storage',
          title: 'Lesson 3: HTML5 APIs - Local Storage & Session Storage',
          duration: '45 min',
          subtopics: [
            {
              title: 'localStorage and sessionStorage overview',
              description: 'Revisit these browser-based storage mechanisms, comparing their persistence and scope.',
              codeLessons: [],
            },
            {
              title: 'Storing and retrieving data (setItem, getItem, removeItem, clear)',
              description: 'Learn the basic API methods for interacting with `localStorage` and `sessionStorage`.',
              codeLessons: [
                {
                  lessonTitle: 'Using localStorage API',
                  codeSnippet: `// Store data
localStorage.setItem('username', 'Alice');
localStorage.setItem('lastVisit', new Date().toISOString());

// Retrieve data
const user = localStorage.getItem('username');
console.log('User:', user); // Alice

// Remove data
localStorage.removeItem('lastVisit');

// Clear all data for the domain
// localStorage.clear();`,
                  explanation: 'Demonstrates common operations like `setItem` (store), `getItem` (retrieve), and `removeItem` (delete a specific key) for `localStorage`. `clear()` removes everything.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Differences and Use Cases',
              description: 'Identify appropriate scenarios for using `localStorage` (e.g., user preferences, offline data) versus `sessionStorage` (e.g., temporary session data, single-session forms).',
              codeLessons: [],
            },
            {
              title: 'Handling JSON data with Storage APIs',
              description: 'Learn how to store and retrieve JavaScript objects by converting them to/from JSON strings.',
              codeLessons: [
                {
                  lessonTitle: 'Storing and Retrieving JSON in localStorage',
                  codeSnippet: `const userSettings = { theme: 'dark', notifications: true };

// Store as JSON string
localStorage.setItem('settings', JSON.stringify(userSettings));

// Retrieve and parse back to object
const storedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(storedSettings.theme); // dark`,
                  explanation: 'Since Web Storage APIs only store strings, `JSON.stringify()` is used to convert JavaScript objects to strings before storing, and `JSON.parse()` to convert them back when retrieving.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'html-medium-lesson-4-canvas-svg-introduction',
          title: 'Lesson 4: HTML5 APIs - Canvas & SVG (Introduction)',
          duration: '90 min',
          subtopics: [
            {
              title: 'Canvas Element (<canvas>): Basic drawing with JavaScript',
              description: 'Introduction to the `<canvas>` element for drawing graphics on the fly using JavaScript, pixel by pixel.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Canvas Rectangle',
                  codeSnippet: `<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // Get 2D rendering context

// Draw a red rectangle
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 150, 75); // x, y, width, height`,
                  explanation: 'This demonstrates how to get a 2D rendering context from a `<canvas>` element and draw a simple red rectangle using JavaScript, highlighting the pixel-based nature of Canvas.',
                  imageUrl: 'https://example.com/images/canvas-rectangle.png', // Placeholder for canvas output
                },
              ],
            },
            {
              title: 'Drawing Shapes: Rectangles, Circles, Lines',
              description: 'Learn fundamental drawing operations on the canvas context for various geometric shapes.',
              codeLessons: [],
            },
            {
              title: 'Text and Images on Canvas',
              description: 'Draw text and place images onto the canvas element.',
              codeLessons: [],
            },
            {
              title: 'Introduction to SVG (Scalable Vector Graphics)',
              description: 'Learn about SVG as an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.',
              codeLessons: [
                {
                  lessonTitle: 'Basic SVG Circle',
                  codeSnippet: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`,
                  explanation: 'This SVG code draws a yellow circle with a green stroke. SVG graphics are resolution-independent and defined by XML markup, making them scalable without loss of quality.',
                  imageUrl: 'https://example.com/images/svg-circle.png', // Placeholder for SVG circle output
                },
              ],
            },
            {
              title: 'Differences between Canvas and SVG',
              description: 'Compare Canvas (pixel-based, good for complex graphics/games) and SVG (vector-based, good for scalable diagrams/icons) and their respective use cases.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-medium-lesson-5-web-workers-sse',
          title: 'Lesson 5: HTML5 APIs - Web Workers & Server-Sent Events (SSE)',
          duration: '60 min',
          subtopics: [
            {
              title: 'Web Workers: Running scripts in the background',
              description: 'Understand Web Workers as a way to run JavaScript in a background thread, preventing blocking of the main UI thread during heavy computations.',
              codeLessons: [
                {
                  lessonTitle: 'Simple Web Worker Example',
                  codeSnippet: `// main.js
const worker = new Worker('worker.js');

worker.onmessage = (event) => {
  console.log('Result from worker:', event.data);
};

worker.postMessage(1000000000); // Send large number to worker for calculation

// worker.js
self.onmessage = (event) => {
  let sum = 0;
  for (let i = 0; i < event.data; i++) {
    sum += i;
  }
  self.postMessage(sum); // Send result back to main thread
};`,
                  explanation: 'This example shows `main.js` creating a `Worker` and sending a message. `worker.js` performs a heavy calculation without blocking the main thread and sends the result back using `postMessage`.',
                  imageUrl: 'https://example.com/images/web-worker-flow.png', // Placeholder for Web Worker flow diagram
                },
              ],
            },
            {
              title: 'Communicating with Web Workers (postMessage, onmessage)',
              description: 'Learn the messaging API for sending data between the main thread and a Web Worker.',
              codeLessons: [],
            },
            {
              title: 'Use Cases for Web Workers (e.g., heavy computations)',
              description: 'Identify scenarios where Web Workers are beneficial, such as image processing, large data calculations, or complex animations.',
              codeLessons: [],
            },
            {
              title: 'Server-Sent Events (SSE): One-way communication from server to client',
              description: 'Learn about SSE as a mechanism for a server to push updates to a client over a single HTTP connection, ideal for live feeds or notifications.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Server-Sent Events Client',
                  codeSnippet: `const eventSource = new EventSource('/events');

eventSource.onopen = (event) => {
  console.log('SSE connection opened.');
};

eventSource.onmessage = (event) => {
  console.log('Received message:', event.data);
  // Update UI with event.data
};

eventSource.onerror = (error) => {
  console.error('SSE error:', error);
  eventSource.close();
};`,
                  explanation: 'This JavaScript code uses the `EventSource` API to establish a connection for Server-Sent Events, listening for `open`, `message`, and `error` events to receive real-time updates from the server.',
                  imageUrl: 'https://example.com/images/sse-flow.png', // Placeholder for SSE flow diagram
                },
              ],
            },
            {
              title: 'EventSource API',
              description: 'Detailed usage of the `EventSource` object for consuming SSE streams.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-medium-lesson-6-audio-video-advanced',
          title: 'Lesson 6: HTML5 Audio & Video Advanced',
          duration: '60 min',
          subtopics: [
            {
              title: 'Media Events: play, pause, ended, timeupdate, volumechange',
              description: 'Utilize various JavaScript events fired by `<audio>` and `<video>` elements to react to media playback state changes.',
              codeLessons: [
                {
                  lessonTitle: 'Controlling Video with JavaScript Events',
                  codeSnippet: `<video id="myVideo" src="my-video.mp4" controls></video>
<button id="playPauseBtn">Play/Pause</button>

const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

video.addEventListener('play', () => {
  playPauseBtn.textContent = 'Pause';
  console.log('Video started playing');
});

video.addEventListener('pause', () => {
  playPauseBtn.textContent = 'Play';
  console.log('Video paused');
});

video.addEventListener('ended', () => {
  console.log('Video finished');
});`,
                  explanation: 'This example shows how to programmatically control video playback (play/pause) using a button and how to react to `play`, `pause`, and `ended` events to update the UI and log status.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'JavaScript Control of Media Playback',
              description: 'Programmatically control media elements (play, pause, seek, volume) using JavaScript.',
              codeLessons: [],
            },
            {
              title: '<track> element for captions/subtitles',
              description: 'Add timed text tracks (e.g., captions, subtitles, descriptions) to audio and video elements for accessibility.',
              codeLessons: [
                {
                  lessonTitle: 'Video with Text Track (Captions)',
                  codeSnippet: `<video controls src="my-video.mp4">
  <track kind="captions" src="captions_en.vtt" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`,
                  explanation: 'The `<track>` element adds a timed text track to a video, enabling captions or subtitles for accessibility. The `src` points to a WebVTT file.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Responsive Media (using CSS, but HTML\'s role in source selection)',
              description: 'Understand how HTML attributes like `srcset` and `<picture>` along with CSS are used to deliver responsive images and media.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-medium-lesson-7-forms-advanced-accessibility',
          title: 'Lesson 7: HTML5 Forms - Advanced Features & Accessibility',
          duration: '75 min',
          subtopics: [
            {
              title: 'Customizing Form Validation Messages',
              description: 'Override default browser validation messages for a more user-friendly experience using JavaScript.',
              codeLessons: [
                {
                  lessonTitle: 'Customizing Validation Messages',
                  codeSnippet: `<input type="email" id="email" required>
<span id="email-error" aria-live="polite"></span>

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('invalid', () => {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = 'Please enter your email address.';
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email format (e.g., user@example.com).';
  }
});

emailInput.addEventListener('input', () => {
  // Clear the error message when user starts typing
  emailError.textContent = '';
});`,
                  explanation: 'This JavaScript snippet demonstrates how to listen for the `invalid` event on an input and set a custom error message based on the `ValidityState` object, providing more specific feedback than default browser messages.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'output element',
              description: 'Use the `<output>` element to display the result of a calculation or user action within a form.',
              codeLessons: [
                {
                  lessonTitle: 'Using the Output Element',
                  codeSnippet: `<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0"> +
  <input type="number" id="b" value="0"> =
  <output name="result" for="a b"></output>
</form>`,
                  explanation: 'The `output` element dynamically displays the sum of two number inputs as the user types, using the `oninput` event on the form.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'ARIA Attributes for Forms: aria-describedby, aria-required, aria-invalid',
              description: 'Enhance form accessibility for screen reader users by providing additional context and state information using ARIA attributes.',
              codeLessons: [
                {
                  lessonTitle: 'ARIA Attributes for Form Accessibility',
                  codeSnippet: `<label for="password">Password</label>
<input type="password" id="password" aria-describedby="password-hint" aria-required="true" aria-invalid="false">
<div id="password-hint">Password must be at least 8 characters long.</div>
`,
                  explanation: '`aria-describedby` links the input to an element providing additional instructions. `aria-required` explicitly marks it as mandatory for assistive technologies, and `aria-invalid` indicates validation state.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Keyboard Accessibility for Forms',
              description: 'Ensure that all form controls are fully navigable and usable by keyboard alone, including proper tab order (`tabindex`).',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-medium-lesson-8-microdata-rdfa-introduction',
          title: 'Lesson 8: HTML5 Microdata & RDFa (Introduction)',
          duration: '60 min',
          subtopics: [
            {
              title: 'What is Microdata?',
              description: 'Introduction to Microdata as a way to embed structured data within HTML content to describe specific items (e.g., events, products, recipes).',
              codeLessons: [],
            },
            {
              title: 'itemscope, itemtype, itemprop attributes',
              description: 'Learn the core Microdata attributes for defining an item, its type (vocabulary), and its properties.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Schema.org Product Microdata',
                  codeSnippet: `<div itemscope itemtype="http://schema.org/Product">
  <h1 itemprop="name">Advanced Widget</h1>
  <img itemprop="image" src="widget.jpg" alt="Advanced Widget">
  <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
    Rated <span itemprop="ratingValue">4.5</span>/5 based on <span itemprop="reviewCount">10</span> reviews.
  </div>
  <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    Price: <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price">99.99</span>
  </div>
  <span itemprop="description">A state-of-the-art widget for all your needs.</span>
</div>`,
                  explanation: 'This HTML uses Microdata attributes (`itemscope`, `itemtype`, `itemprop`) with `Schema.org` vocabulary to describe a product, making the content understandable by search engines for rich snippets.',
                  imageUrl: 'https://example.com/images/schema-product.png', // Placeholder for rich snippet example
                },
              ],
            },
            {
              title: 'Common Microdata Vocabularies (e.g., Schema.org)',
              description: 'Focus on `Schema.org` as the most widely adopted vocabulary for structured data.',
              codeLessons: [],
            },
            {
              title: 'Introduction to RDFa Lite',
              description: 'A brief overview of RDFa Lite as another method for embedding structured data, contrasting it with Microdata.',
              codeLessons: [],
            },
            {
              title: 'Benefits for SEO and Rich Snippets',
              description: 'Understand how structured data helps search engines display rich snippets in search results, improving visibility and click-through rates.',
              codeLessons: [],
            },
          ],
        },
      ],
      projects: [
        {
          id: 'html-medium-project-1',
          title: 'Project 1: Rebuild a Non-Semantic Webpage with HTML5 Semantics',
          description: 'Take a provided non-semantic HTML page (e.g., one built primarily with `<div>` elements) and refactor its structure to use appropriate HTML5 semantic elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. Ensure the page outline is logical and clear.',
          checkpoint: 'Review the page structure using browser developer tools (e.g., Firefox Accessibility Inspector "Show Accessibility Tree" or Chrome "Elements" tab outline view) to confirm the logical flow and semantic accuracy. Ensure elements like `nav` correctly wrap navigation links.',
        },
        {
          id: 'html-medium-project-2',
          title: 'Project 2: Create a Basic Drag-and-Drop Interaction',
          description: 'Build a simple HTML page where you can drag an element (e.g., an image or a `<div>`) from one area and drop it into another. Implement the `draggable` attribute and handle `dragstart`, `dragover`, and `drop` events with JavaScript. The goal is to demonstrate the basic functionality of the Drag and Drop API.',
          checkpoint: 'Test that the draggable element can be successfully dragged and dropped into the designated area, and that the drop zone reacts as expected (e.g., changes text or accepts the element). Confirm that `event.preventDefault()` is used correctly for `dragover` to enable dropping.',
        },
        {
          id: 'html-medium-project-3',
          title: 'Project 3: Build a Simple To-Do List with localStorage',
          description: 'Create a basic to-do list application where users can add and remove tasks. Implement `localStorage` to ensure that the tasks persist even after the browser is closed and reopened. Use `JSON.stringify()` and `JSON.parse()` to handle storing and retrieving the task array.',
          checkpoint: 'Verify data persistence: add tasks, close the browser tab/window, reopen the page, and confirm tasks are still there. Test adding and removing tasks and ensure `localStorage` updates correctly. Ensure proper JSON conversion.',
        },
        {
          id: 'html-medium-project-4',
          title: 'Project 4: Draw a Simple Graphic on Canvas or Embed SVG',
          description: 'On an HTML page, either: 1) Use the `<canvas>` element and JavaScript to draw a simple geometric shape (e.g., a square, circle, or a few lines) and maybe some text. OR 2) Embed a simple SVG graphic directly within your HTML (e.g., a circle, rectangle, or a path).',
          checkpoint: 'Confirm that your graphic is rendered correctly on the page. If using Canvas, ensure JavaScript is correctly drawing the elements. If using SVG, verify its scalability by resizing the browser window.',
        },
        {
          id: 'html-medium-project-5',
          title: 'Project 5: Implement a Simple Web Worker Calculation',
          description: 'Create an HTML page with a button and a display area. When the button is clicked, start a computationally intensive task (e.g., calculating a large prime number or summing a huge range of numbers) in a separate Web Worker. Display a "Calculating..." message on the main thread and update the display area with the result once the worker sends it back. This demonstrates non-blocking UI.',
          checkpoint: 'Test that the UI remains responsive (e.g., you can still click other buttons or scroll) while the calculation is running in the background. Verify that the correct result is displayed once the worker finishes.',
        },
        {
          id: 'html-medium-project-6',
          title: 'Project 6: Build a Custom Video Player Interface',
          description: 'Embed an `<video>` element on an HTML page, but hide the default browser controls. Instead, use JavaScript to create your own custom "Play/Pause" button, a "Mute/Unmute" button, and a progress bar (can be a simple `input type="range"` or a custom `div`) that reflects video progress and allows seeking. You should use media events like `play`, `pause`, `timeupdate`, and `volumechange`.',
          checkpoint: 'Ensure that your custom controls accurately reflect and manipulate the video playback state (play/pause, volume, seeking). Test that all JavaScript event listeners are functioning as expected.',
        },
        {
          id: 'html-medium-project-7',
          title: 'Project 7: Enhance Form Accessibility with ARIA',
          description: 'Take a complex form (from Project 7 of Section 1 or a new one). Add appropriate WAI-ARIA attributes such as `aria-describedby` for instructions, `aria-required` for required fields (even if HTML5 `required` is present), and dynamically set `aria-invalid` based on validation state (using JavaScript). Also, ensure proper tab order and focus management.',
          checkpoint: 'Perform a basic accessibility audit. Use browser developer tools to inspect elements and confirm ARIA attributes are correctly applied. If possible, try navigating the form with only the keyboard to test tab order and focus behavior.',
        },
        {
          id: 'html-medium-project-8',
          title: 'Project 8: Mark Up Content with Schema.org Microdata',
          description: 'Choose a specific type of content (e.g., a recipe, an event listing, or a product page) and create an HTML page for it. Use `Schema.org` vocabulary and apply `itemscope`, `itemtype`, and `itemprop` attributes to mark up the relevant information (e.g., recipe ingredients, event date/location, product name/price/rating).',
          checkpoint: 'Use Google\'s Rich Results Test tool (or a similar Schema validator) to paste your HTML code and validate that the Microdata is correctly parsed and understood, potentially qualifying for rich snippets in search results.',
        },
      ],
    },
    {
      id: 'html-section-advanced',
      title: 'Section 3: Advanced (Senior-Level, System-Oriented)',
      level: 'advanced',
      lessons: [
        {
          id: 'html-advanced-lesson-1-custom-elements-shadow-dom',
          title: 'Lesson 1: Custom Elements & Shadow DOM (Web Components Foundation)',
          duration: '90 min',
          subtopics: [
            {
              title: 'What are Web Components?',
              description: 'Introduction to Web Components as a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags.',
              codeLessons: [],
            },
            {
              title: 'Custom Elements V1: customElements.define(), connectedCallback, disconnectedCallback, attributeChangedCallback',
              description: 'Learn the JavaScript API for defining new HTML elements, including lifecycle callbacks for reacting to their insertion, removal, and attribute changes.',
              codeLessons: [
                {
                  lessonTitle: 'Creating a Simple Custom Element',
                  codeSnippet: `class MyCustomButton extends HTMLElement {
  constructor() {
    super(); // Always call super() first
    this.attachShadow({ mode: 'open' }); // Attach Shadow DOM
    this.shadowRoot.innerHTML = \`<button><slot>Default Button</slot></button>\`;

    // Example of a lifecycle callback (connectedCallback)
    // this.addEventListener('click', this._onClick);
  }

  // Lifecycle callback when element is added to DOM
  connectedCallback() {
    console.log('MyCustomButton added to DOM');
  }

  // static get observedAttributes() { return ['label']; }
  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (name === 'label') {
  //     // Update logic based on attribute change
  //   }
  // }
}

customElements.define('my-custom-button', MyCustomButton);`,
                  explanation: 'This code defines a `MyCustomButton` custom element. It extends `HTMLElement`, attaches a Shadow DOM for encapsulation, and uses `connectedCallback` to react when it\'s added to the document. The `<slot>` allows distributing content into the button.',
                  imageUrl: 'https://example.com/images/web-component-structure.png', // Placeholder for web component structure
                },
              ],
            },
            {
              title: 'Shadow DOM: attachShadow(), encapsulation benefits',
              description: 'Deep dive into Shadow DOM for encapsulating component styles and structure, preventing conflicts with the main document.',
              codeLessons: [],
            },
            {
              title: 'Slots (<slot>) for content distribution',
              description: 'Understand how slots work to allow users of a custom element to inject their own content into specific locations within the component\'s Shadow DOM.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-2-html-templating-html-imports',
          title: 'Lesson 2: HTML Templating & HTML Imports (Modern Alternatives)',
          duration: '60 min',
          subtopics: [
            {
              title: '<template> element for reusable HTML structures',
              description: 'Learn about the `<template>` element as a standard way to define inert, clonable HTML content that is not rendered until activated by JavaScript.',
              codeLessons: [
                {
                  lessonTitle: 'Using HTML Template with JavaScript',
                  codeSnippet: `<template id="product-card-template">
  <style> .card { border: 1px solid #ccc; padding: 10px; margin: 10px; } </style>
  <div class="card">
    <h3></h3>
    <p>Price: <span></span></p>
  </div>
</template>

const template = document.getElementById('product-card-template');
const content = template.content.cloneNode(true); // Clone the inert content

content.querySelector('h3').textContent = 'Dynamic Product';
content.querySelector('span').textContent = '$29.99';

document.body.appendChild(content);`,
                  explanation: 'This demonstrates cloning the `content` of a `<template>` element and then populating it with dynamic data using JavaScript before appending it to the DOM. The template\'s styles are also cloned.',
                  imageUrl: 'https://example.com/images/template-element.png', // Placeholder for template element diagram
                },
              ],
            },
            {
              title: 'content property of <template>',
              description: 'Understand how to access the actual DOM subtree contained within a `<template>` element via its `content` property.',
              codeLessons: [],
            },
            {
              title: 'Using <template> with JavaScript',
              description: 'Practical examples of dynamically instantiating and populating content from templates using JavaScript.',
              codeLessons: [],
            },
            {
              title: '(Historical Context: HTML Imports - briefly explain its deprecation and alternatives like ES Modules)',
              description: 'Briefly discuss HTML Imports as a deprecated Web Component standard and explain why ES Modules are the modern, preferred alternative for importing HTML and other resources.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-3-html-offline-web-apps',
          title: 'Lesson 3: HTML and Offline Web Applications (Service Workers Interaction)',
          duration: '75 min',
          subtopics: [
            {
              title: 'Relationship between HTML and Service Workers',
              description: 'Understand how Service Workers intercept network requests, including those for HTML files, to enable offline capabilities.',
              codeLessons: [],
            },
            {
              title: 'Caching Strategies for HTML files',
              description: 'Implement common Service Worker caching strategies (e.g., Cache First, Network Fallback) specifically for HTML documents.',
              codeLessons: [
                {
                  lessonTitle: 'Caching HTML in Service Worker (Cache First)',
                  codeSnippet: `// sw.js (Service Worker file)
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' || 
      (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
        .catch(() => {
          // Serve a generic offline HTML page if both cache and network fail
          return caches.match('/offline.html');
        })
    );
  }
});`,
                  explanation: 'This Service Worker snippet intercepts navigation requests (for HTML pages). It attempts to serve the HTML from the cache first. If not found in cache, it tries the network. As a fallback, it serves a pre-cached `/offline.html` page if both cache and network fail.',
                  imageUrl: 'https://example.com/images/service-worker-html-caching.png', // Placeholder for SW HTML caching flow
                },
              ],
            },
            {
              title: 'manifest.webmanifest for PWAs (revisit basics from PWA lesson)',
              description: 'Revisit the role of the Web App Manifest file in defining PWA characteristics, including the start URL for offline launch.',
              codeLessons: [],
            },
            {
              title: 'Fallback HTML pages for offline scenarios',
              description: 'Create and configure a simple HTML page to be served when the user is offline and the requested page is not in the cache.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-4-script-tag-advanced-usage-module-loading',
          title: 'Lesson 4: <script> Tag - Advanced Usage & Module Loading',
          duration: '75 min',
          subtopics: [
            {
              title: 'defer and async attributes revisited (deep dive into parsing behavior)',
              description: 'A deeper look at the `defer` and `async` attributes on the `<script>` tag, explaining their impact on HTML parsing, script downloading, and execution order.',
              codeLessons: [
                {
                  lessonTitle: 'Script Loading Behaviors',
                  codeSnippet: `<script src="script1.js"></script>

<script src="script2.js" async></script>

<script src="script3.js" defer></script>`,
                  explanation: 'This reiterates the different behaviors of `script` tags. `async` scripts execute as soon as they are loaded, potentially out of order. `defer` scripts execute in order after HTML parsing is complete, before `DOMContentLoaded`.',
                  imageUrl: 'https://example.com/images/script-async-defer.png', // Placeholder for script loading diagram
                },
              ],
            },
            {
              title: 'ES Modules in the Browser (<script type="module">)',
              description: 'Learn how to use native ECMAScript Modules (`ESM`) directly in the browser using `<script type="module">` for modular JavaScript development.',
              codeLessons: [
                {
                  lessonTitle: 'Using ES Modules in HTML',
                  codeSnippet: `<script type="module" src="./main.js"></script>

import { sayHello } from './utils.js';
sayHello('World');

// utils.js
export function sayHello(name) {
  console.log(\`Hello, \${name}!\`);
}`,
                  explanation: 'This shows how `type="module"` in the `<script>` tag enables native ES Module imports/exports, allowing browser-supported modular JavaScript without a bundler.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Import Maps for module resolution',
              description: 'Introduction to Import Maps for controlling how modules are resolved by the browser, simplifying complex module paths and enabling polyfills.',
              codeLessons: [
                {
                  lessonTitle: 'Basic Import Map Example',
                  codeSnippet: `<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js",
      "my-utils/": "./src/utils/"
    }
  }
</script>
<script type="module">
  import { debounce } from "lodash"; // Resolved via import map
  import { formatName } from "my-utils/string-helpers.js"; // Resolved via import map
</script>`,
                  explanation: 'An `importmap` allows you to map module specifiers to actual URLs, making imports cleaner and more portable without needing full paths or bundlers in development.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Dynamic Imports (import())',
              description: 'Learn about `import()` for lazy-loading JavaScript modules on demand, improving initial page load performance.',
              codeLessons: [
                {
                  lessonTitle: 'Dynamic Import Example',
                  codeSnippet: `// main.js
const loadGreeterButton = document.getElementById('loadGreeter');
loadGreeterButton.addEventListener('click', async () => {
  const { greetUser } = await import('./greeter.js'); // Dynamically load
  greetUser('Alice');
});

// greeter.js
export function greetUser(name) {
  alert(\`Greetings, \${name}!\`);
}`,
                  explanation: 'This example uses `import()` to asynchronously load the `greeter.js` module only when a button is clicked, demonstrating code splitting and lazy loading for better performance.',
                  imageUrl: '🎓',
                },
              ],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-5-html-security-considerations',
          title: 'Lesson 5: HTML Security Considerations',
          duration: '60 min',
          subtopics: [
            {
              title: 'Sanitizing User Input (XSS prevention at the HTML level)',
              description: 'Understand how malicious scripts can be injected through unsanitized user input into HTML (Cross-Site Scripting - XSS) and basic principles of sanitization.',
              codeLessons: [
                {
                  lessonTitle: 'Basic XSS Example and Prevention',
                  codeSnippet: `// Vulnerable: Directly inserting user input into innerHTML
// const userInput = "<img src='x' onerror='alert(\"XSS!\")'>";
// document.getElementById('user-content').innerHTML = userInput;

// Safer: Using textContent or a robust sanitization library
const safeUserInput = "<img src='x' onerror='alert(\"XSS!\")'>"; // User input
document.getElementById('user-content').textContent = safeUserInput; // Renders as plain text`,
                  explanation: 'This demonstrates a simple XSS vulnerability (injecting a script via an `onerror` attribute) and its prevention by using `textContent`, which escapes HTML, preventing script execution. For complex cases, robust sanitization libraries are recommended.',
                  imageUrl: 'https://example.com/images/xss-prevention.png', // Placeholder for XSS visual
                },
              ],
            },
            {
              title: 'Content Security Policy (CSP) and HTML meta tag',
              description: 'Learn to use Content Security Policy (CSP) via a `<meta>` tag in HTML to mitigate XSS and other injection attacks by specifying allowed sources for content.',
              codeLessons: [
                {
                  lessonTitle: 'Implementing CSP via Meta Tag',
                  codeSnippet: `<head>
  <meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' https://trusted.cdn.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://cdn.example.com;
    form-action 'self';
    frame-ancestors 'none';
  ">
  </head>`,
                  explanation: 'This `meta` tag defines a Content Security Policy. `default-src self restricts most resources to the same origin. `script-src` allows scripts from `self` and a trusted CDN. `unsafe-inline` is often needed for inline styles but should be avoided for scripts if possible.',
                  imageUrl: 'https://example.com/images/csp-example.png', // Placeholder for CSP diagram
                },
              ],
            },
            {
              title: 'rel="noopener" and rel="noreferrer" for security',
              description: 'Understand the importance of adding `rel="noopener"` and `rel="noreferrer"` to `<a>` tags with `target="_blank"` to prevent reverse tabnabbing and protect user privacy.',
              codeLessons: [
                {
                  lessonTitle: 'Secure External Link',
                  codeSnippet: `<a href="https://evil.com" target="_blank" rel="noopener noreferrer">Visit External Site Safely</a>`,
                  explanation: 'Adding `rel="noopener noreferrer"` to external links opened in new tabs (`target="_blank"`) prevents the new tab from controlling the opening window (`noopener`) and hides the referrer information (`noreferrer`), improving security and privacy.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'HTML Injection Vulnerabilities',
              description: 'Recognize common ways malicious HTML can be injected into a page, leading to defacement, phishing, or XSS.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-6-accessibility-deep-dive',
          title: 'Lesson 6: Accessibility Deep Dive with HTML5',
          duration: '90 min',
          subtopics: [
            {
              title: 'Advanced ARIA Roles and Attributes',
              description: 'A more in-depth look at WAI-ARIA roles, states, and properties to enhance the semantic meaning and interactivity of custom UI components for assistive technologies.',
              codeLessons: [
                {
                  lessonTitle: 'Accessible Tab Component with ARIA',
                  codeSnippet: `<div role="tablist" aria-label="My Sections">
  <button role="tab" id="tab1" aria-selected="true" aria-controls="panel1" tabindex="0">Tab 1</button>
  <button role="tab" id="tab2" aria-selected="false" aria-controls="panel2" tabindex="-1">Tab 2</button>
</div>
<div id="panel1" role="tabpanel" aria-labelledby="tab1">
  Content for Tab 1.
</div>
<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>
  Content for Tab 2.
</div>`,
                  explanation: 'This example demonstrates ARIA roles (`tablist`, `tab`, `tabpanel`) and states (`aria-selected`, `aria-controls`, `aria-labelledby`) to create an accessible tab interface, ensuring screen readers understand the component\'s structure and state.',
                  imageUrl: 'https://example.com/images/aria-tabs.png', // Placeholder for accessible tabs visual
                },
              ],
            },
            {
              title: 'WAI-ARIA Authoring Practices Guide (APG)',
              description: 'Introduce the WAI-ARIA Authoring Practices Guide as the authoritative resource for implementing accessible UI patterns.',
              codeLessons: [],
            },
            {
              title: 'Focus Management and Tab Order',
              description: 'Best practices for managing focus, especially in dynamic UIs (modals, dialogs), and ensuring a logical tab order for keyboard navigation.',
              codeLessons: [],
            },
            {
              title: 'Live Regions (aria-live) for dynamic content updates',
              description: 'Learn how to use `aria-live` attributes to announce dynamic content changes (e.g., success messages, error alerts) to screen readers without requiring a full page refresh.',
              codeLessons: [
                {
                  lessonTitle: 'Live Region for Status Updates',
                  codeSnippet: `<div id="status-message" aria-live="polite" aria-atomic="true"></div>
<button onclick="updateStatus()">Perform Action</button>

function updateStatus() {
  const statusDiv = document.getElementById('status-message');
  statusDiv.textContent = 'Action successfully completed!';
}`,
                  explanation: 'The `aria-live="polite"` attribute tells screen readers to announce changes to the `status-message` div without interrupting the user. `aria-atomic="true"` ensures the entire region\'s content is read on change.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Accessible SVGs',
              description: 'Techniques for making Scalable Vector Graphics (SVGs) accessible to assistive technologies, including `<title>`, `<desc>`, and `aria-hidden` attributes.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-7-html-performance-optimizations',
          title: 'Lesson 7: HTML Performance Optimizations',
          duration: '90 min',
          subtopics: [
            {
              title: 'Critical Rendering Path optimization from HTML perspective (early CSS/JS loading)',
              description: 'Apply HTML-specific strategies to optimize the Critical Rendering Path, ensuring core content renders as quickly as possible.',
              codeLessons: [
                {
                  lessonTitle: 'Optimizing Critical CSS/JS Loading',
                  codeSnippet: `<style>/* critical CSS here */</style>

<link rel="preload" href="non-critical.css" as="style" onload="this.rel='stylesheet'">

<script src="non-critical.js" defer></script>`,
                  explanation: 'This code snippet illustrates techniques to optimize the Critical Rendering Path: inlining essential CSS, asynchronously loading non-critical CSS using `preload`, and deferring non-critical JavaScript to prevent blocking HTML parsing and rendering.',
                  imageUrl: 'https://example.com/images/crp-optimization.png', // Placeholder for CRP optimization diagram
                },
              ],
            },
            {
              title: 'Image Optimization: srcset, sizes, <picture>',
              description: 'Implement responsive image techniques using `srcset`, `sizes` attributes on `<img>`, and the `<picture>` element for art direction and format control.',
              codeLessons: [
                {
                  lessonTitle: 'Responsive Image with srcset and sizes',
                  codeSnippet: `<img
  srcset="small.jpg 480w,
          medium.jpg 800w,
          large.jpg 1200w"
  sizes="(max-width: 600px) 480px,
         (max-width: 900px) 800px,
         1200px"
  src="medium.jpg"
  alt="A beautiful landscape"
>`,
                  explanation: 'The `srcset` attribute provides multiple image sources with their widths, and `sizes` describes how the image will be displayed at different viewport widths. The browser then picks the most appropriate image.',
                  imageUrl: 'https://example.com/images/srcset-sizes.png', // Placeholder for srcset/sizes visual
                },
                {
                  lessonTitle: 'Art Direction with <picture> element',
                  codeSnippet: `<picture>
  <source media="(min-width: 800px)" srcset="large-desktop.jpg">
  <source media="(min-width: 450px)" srcset="medium-tablet.jpg">
  <img src="small-mobile.jpg" alt="A landscape with specific art direction">
</picture>`,
                  explanation: 'The `picture` element allows for "art direction" by providing different image sources based on media queries, serving entirely different images for different contexts, not just different resolutions.',
                  imageUrl: 'https://example.com/images/picture-element.png', // Placeholder for picture element visual
                },
              ],
            },
            {
              title: 'Lazy Loading for Images and Iframes (loading="lazy")',
              description: 'Utilize the native `loading="lazy"` attribute to defer loading of off-screen images and iframes until they are near the viewport.',
              codeLessons: [
                {
                  lessonTitle: 'Native Lazy Loading Example',
                  codeSnippet: `<img src="image.jpg" alt="Description" loading="lazy">
<iframe src="video.html" loading="lazy"></iframe>`,
                  explanation: 'The `loading="lazy"` attribute enables the browser to lazy-load images and iframes that are not immediately visible, improving initial page load performance.',
                  imageUrl: '🎓',
                },
              ],
            },
            {
              title: 'Preload, Prefetch, Preconnect hints in <link>',
              description: 'Leverage resource hints (`preload`, `prefetch`, `preconnect`) in the `<head>` to proactively optimize the loading of critical or future resources.',
              codeLessons: [
                {
                  lessonTitle: 'Resource Hints Example',
                  codeSnippet: `<head>
  <link rel="preload" href="/fonts/myfont.woff2" as="font" type="font/woff2" crossorigin>

  <link rel="prefetch" href="/next-page-data.json" as="fetch" crossorigin>

  <link rel="preconnect" href="https://api.example.com">
</head>`,
                  explanation: '`preload` tells the browser to fetch a resource immediately that will be needed soon. `prefetch` hints at a resource that might be needed later. `preconnect` establishes an early connection to a domain to reduce latency for future requests.',
                  imageUrl: 'https://example.com/images/resource-hints.png', // Placeholder for resource hints diagram
                },
              ],
            },
            {
              title: 'Minimizing DOM Depth and Complex Layouts',
              description: 'Understand how deeply nested DOM structures and complex CSS layouts can impact rendering performance and strategies to simplify them.',
              codeLessons: [],
            },
          ],
        },
        {
          id: 'html-advanced-lesson-8-html-server-side-rendering-static-site-generation',
          title: 'Lesson 8: HTML and Server-Side Rendering (SSR) / Static Site Generation (SSG)',
          duration: '60 min',
          subtopics: [
            {
              title: 'How HTML is generated in SSR/SSG contexts',
              description: 'Understand the server-side process of generating full HTML documents before sending them to the client, contrasting it with client-side rendering.',
              codeLessons: [],
            },
            {
              title: 'Hydration process (for SSR with client-side frameworks)',
              description: 'Deep dive into "hydration," the process where a client-side JavaScript framework takes over an SSR-generated HTML page and attaches its interactive capabilities.',
              codeLessons: [
                {
                  lessonTitle: 'SSR Hydration Conceptual Flow',
                  codeSnippet: `// Server: Renders full HTML string with initial state
// <div id="root"><h1>Hello from Server</h1><button>Click Me</button></div>

// Client: Downloads JavaScript bundle
// Appears as static content initially

// Client-side JavaScript then "hydrates"
// Attaches event listeners, makes component interactive
// ReactDOM.hydrate(<App />, document.getElementById('root'));`,
                  explanation: 'This illustrates the hydration concept: the server sends ready-to-render HTML, and then client-side JavaScript "hydrates" it by attaching event listeners and making it interactive, enabling a fast initial paint and full interactivity.',
                  imageUrl: 'https://example.com/images/ssr-hydration-flow.png', // Placeholder for SSR hydration flow
                },
              ],
            },
            {
              title: 'Trade-offs of different rendering strategies for HTML delivery',
              description: 'Compare the advantages and disadvantages of CSR, SSR, and SSG in terms of performance, SEO, complexity, and user experience.',
              codeLessons: [],
            },
            {
              title: 'Tools and Frameworks (e.g., Next.js, Eleventy - focus on HTML output)',
              description: 'Briefly touch upon popular frameworks (like Next.js for SSR/SSG with React, Eleventy for SSG) and how they leverage these HTML generation techniques.',
              codeLessons: [],
            },
          ],
        },
      ],
      projects: [
        {
          id: 'html-advanced-project-1',
          title: 'Project 1: Create a Simple Custom Element with Shadow DOM and Slots',
          description: 'Build a basic Web Component. Define a custom element (e.g., `<my-card>`) using `customElements.define()`. Inside its `constructor`, attach a Shadow DOM and define a simple structure (e.g., a header and a paragraph). Use the `<slot>` element to allow dynamic content to be projected into your custom element. Apply some basic internal CSS within the Shadow DOM to demonstrate encapsulation.',
          checkpoint: 'Verify that the custom element renders correctly in the browser. Inspect the element in developer tools to confirm that the Shadow DOM is active and its styles are encapsulated (not leaking to the main document, and main document styles are not affecting it). Test content projection through slots.',
        },
        {
          id: 'html-advanced-project-2',
          title: 'Project 2: Build a List Dynamically by Cloning a `<template>`',
          description: 'Create an HTML page with a `<template>` element that defines the structure for a single list item (e.g., a product entry with a name and price). Use JavaScript to fetch an array of data (can be a local JS array or simulated fetch) and, for each item in the array, clone the template, populate its content dynamically, and append it to a list container in the main HTML.',
          checkpoint: 'Ensure that the list items are dynamically generated from the template and correctly populated with data. Confirm that the template content is cloned and not directly modified from the inert template.',
        },
        {
          id: 'html-advanced-project-3',
          title: 'Project 3: Make a Static Site Offline-Capable with a Service Worker',
          description: 'Take a very simple static HTML page (e.g., your personal webpage from Project 1 in Section 1) and make it fully offline-capable. This involves: 1) Creating and registering a Service Worker (`sw.js`). 2) In `sw.js`, using the `install` event to `cache.addAll()` your HTML, CSS, and any essential images. 3) In `sw.js`, using the `fetch` event to implement a "cache first, then network" strategy for all requests, and include a fallback to a pre-cached `/offline.html` if no match is found. 4) Create a `manifest.webmanifest` file and link it in your HTML `head`.',
          checkpoint: 'Test offline functionality: go offline in your browser (e.g., in Chrome DevTools "Network" tab, select "Offline"). Try to refresh or navigate to your page. It should load correctly. Also, verify the PWA manifest by attempting to "Add to Home Screen" or "Install App" if supported by your browser.',
        },
        {
          id: 'html-advanced-project-4',
          title: 'Project 4: Refactor JavaScript to use ES Modules and Dynamic Imports',
          description: 'Start with an existing JavaScript application (can be a small one, even if it\'s just a few functions in one file). Refactor it to use native ES Modules (`<script type="module">`). Separate at least two functions into different `.js` files and import them. Additionally, implement dynamic `import()` for at least one less critical feature that should only load when explicitly needed (e.g., a heavy validation logic, a modal handler).',
          checkpoint: 'Verify that the application still functions correctly after refactoring to ES Modules. Use browser developer tools to confirm that modules are loaded correctly. Test the dynamic import by triggering the feature that loads it and ensure the associated script file is fetched only when needed.',
        },
        {
          id: 'html-advanced-project-5',
          title: 'Project 5: Implement a Basic Content Security Policy',
          description: 'On an HTML document, implement a Content Security Policy (CSP) using the `<meta>` tag in the `<head>`. Start with a strict `default-src \'self\'` and then explicitly allow scripts and styles from your own domain. If you use any external resources (e.g., a public CDN for a font or a small script), add them to the CSP. Intentionally try to violate your CSP (e.g., by adding an inline script or loading an image from an unauthorized domain) and observe the browser console warnings/errors.',
          checkpoint: 'Use browser developer tools (Console and Security tabs) to check for CSP violations. Ensure your permitted resources load correctly and that unauthorized content is blocked. Verify the CSP is active and correctly configured in the HTTP response headers (often seen in the Security tab).',
        },
        {
          id: 'html-advanced-project-6',
          title: 'Project 6: Make a Complex UI Component Fully Accessible',
          description: 'Choose a complex interactive HTML component (e.g., a custom dropdown menu, a modal dialog, or an accordion). Implement it using a combination of HTML5 semantic elements and advanced ARIA attributes (e.g., `role`, `aria-expanded`, `aria-haspopup`, `aria-controls`, `aria-labelledby`, `aria-live` if dynamic content is involved). Ensure it is fully navigable and usable with only a keyboard.',
          checkpoint: 'Conduct a thorough manual accessibility review. Navigate the component using only the keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys). Use a screen reader (e.g., NVDA on Windows, VoiceOver on Mac, or a browser extension) to experience how the component is announced. Verify that all interactive elements are properly announced and their states (expanded/collapsed, selected) are communicated.',
        },
        {
          id: 'html-advanced-project-7',
          title: 'Project 7: Optimize a Webpage\'s HTML for Performance',
          description: 'Take a relatively resource-heavy HTML page (e.g., one with many images, multiple stylesheets, and JavaScript files). Implement HTML-level performance optimizations: 1) Use `srcset` and `sizes` for responsive images. 2) Apply `loading="lazy"` to off-screen images/iframes. 3) Use `<link rel="preload">` for critical CSS/fonts. 4) Use `<script defer>` or `<script type="module">` for non-critical JavaScript. 5) Minimize unnecessary DOM depth if possible. The goal is to improve the page\'s Core Web Vitals.',
          checkpoint: 'Use Google Lighthouse or WebPageTest to run a performance audit on your optimized page. Compare the scores and metrics (e.g., LCP, FCP, TTI) before and after optimizations. Inspect the network waterfall in browser developer tools to observe the loading order and timing of resources.',
        },
        {
          id: 'html-advanced-project-8',
          title: 'Project 8: (Conceptual/Exploratory) Analyze SSR/SSG HTML Output',
          description: '(This project is more analytical than hands-on coding). Choose a well-known website built with SSR (e.g., a Next.js app) or SSG (e.g., a Gatsby or Eleventy site). Use your browser\'s "View Page Source" (not inspect element) to see the initial HTML delivered from the server. Compare this to the HTML you see in the "Elements" tab after the page has fully loaded and JavaScript has run. Observe how client-side JavaScript "hydrates" or modifies the initial server-rendered HTML. Write down your observations about the initial HTML structure, presence of data, and how the DOM changes.',
          checkpoint: 'Document your findings on the difference between the initial server-rendered HTML source and the final client-side rendered DOM. Identify elements that appear to be server-rendered versus those added/modified by client-side JavaScript. Understand the concept of hydration through practical observation.',
        },
      ],
    },
  ],
};

export default html5Course;