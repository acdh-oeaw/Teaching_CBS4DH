# Web technologies

## Introduction

This activity provides a hands-on introduction to the principal technologies that make web pages work: HTML, CSS, and JavaScript. These are large technologies that cannot be learned in a day, but the good news is that it doesn’t take much practice to become familiar and comfortable with the features you use most. There are links at the bottom of this page to tutorials and references, which you can visit to learn more.

## The web “stack”

The main front-end web technologies include:

* HTML: HyperText Markup Language. HTML provides a set of tags for web documents, with rules for their use. There are several versions of HTML; new projects should use [HTML5](https://www.w3.org/TR/html5/). We recommend using strict XML syntax.
* CSS: Cascading Style Sheets. There are several versions of CSS; new projects should use [CSS Snapshot 2017
W3C Working Group Note, 31 January 2017](https://www.w3.org/TR/CSS/).
* JavaScript: JavaScript enables the user to interact with the page in the browser.

You can author HTML, CSS, and JavaScript in \<oXygen/\>.

## HTML

### About HTML

HTML is a tag set controlled by a schema (rules for which tags are permitted in which contexts). All content that will appear in the web page goes inside the `<body>` element. A typical page has some of the following components:

* Headers (`<h1>` through `<h6>`)
* Paragraphs (`<p>`)
* Lists (`<ul>` for bulleted lists, `<ol>` for numbered list). The only children allowed for these list are `<li>` (list item).
* Tables. Not covered in this exercise.

You’ll use some of these shortly.

### Looking at HTML

1. Start \<oXygen/\>.
2. Open [schedule/week_1/web/web\_exercise\_1.html](web/web_exercise_1.html) in \<oXygen/\>.
3. Start a web browser.
4. Open the same file in your browser (`Ctrl+o` [Windows] or `Cmd+o` [Mac OS] to open a file from the filesystem).

### Working with HTML

You should see something like the following in \<oXygen/\>:

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>HTML exercise 1</title>
    </head>
    <body>
        <h1>HTML exercise 1</h1>
        <h2>This is a level 2 header, or subheading</h2>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        <ul>
            <li>This is the first item in a list.</li>
            <li>This is the second item in the same list.</li>
        </ul>
        <p>This is one last paragraph.</p>
    </body>
</html>
```


* The only part of the HTML file that is rendered inside the browser window is the part inside the `<body>` tags. Notice that we’ve used several of the element types described earlier.
* Modify the text of the HTML file in \<oXygen/\>. You might add additional paragraphs (`<p>`) elements or headers (`<h1>` through `<h6>`). You can change the bulleted list to a numbered one by changing the wrapper from `<ul>` to `<ol>` (you need to change both the start and end tag, although if you change the start tag first, \<oXygen/\> will usually change the end tag automatically to match).
* If you see a green square in the upper right corner of the editor windows, your HTML is valid. If not, it isn’t, and you need to fix it. For example, a `<p>` cannot contain another `<p>` because paragraphs in text are not normally nested inside one another. \<oXygen/\> will try to identify the location of the error and highlight it with a squiggly red line, although it sometimes isn’t able to tell because an error in one place could become apparent only elsewhere in the document.
* When you have a green square, save your document from within \<oXygen/\> and then reload it into the browser, observing the changes.

## Styling HTML with CSS

### About CSS

* HTML browsers have default styling built in for HTML, which the user can customize or override with CSS. 
* CSS is typically defined in a separate file, which is associated with the HTML through a `<link>` element in the `<head>` of the HTML file. Storing the CSS outside the HTML page makes it easy to apply the same CSS to multiple files to achieve a consistent appearance.
* CSS instructions consist of a *selector* (which identifies what type of element will be styled) followed by a set of rules enclosed in curly braces. Each rule consist of a *property* and a *value*, separated by a colon, and multiple rules are separated by semicolons. For example `css p {font-weight: bold; color: red;}` embolds all `<p>` elements (since the selector value is `p`) in the document and colors them (since the property name is `color`) red (since the property value is “red”). Selectors can be fine-tuned to target elements only in specific contexts or with specific attributes; we’ll see a bit of that below.

### Looking at CSS

Open [schedule/week_1/web/web\_exercise\_2.html](web/web_exercise_2.html) in \<oXygen/\>. It should look something like:

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>HTML exercise 2</title>
        <link rel="stylesheet" type="text/css" href="web_exercise_2.css"/>
    </head>
    <body>
        <h1>HTML exercise 2</h1>
        <h2>This is a level 2 header, or subheading</h2>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        <ul>
            <li>This is the first item in a list.</li>
            <li>This is the second item in the same list.</li>
        </ul>
        <p>This is one last paragraph.</p>
    </body>
</html>
```

2. Notice that except for the filename and title, the only difference is that this file has added a `<link>` element in the `<head>`, which uses the `@href` attribute to point to the CSS file.
3. Open the HTML file in a browser and notice that paragraphs are red and bold.
4. Open [schedule/week_1/web/web\_exercise\_2.css](web/web_exercise_2.css) in \<oXygen/\> and notice that it implements the commands described above, which are responsible for the color and weight of the paragraphs. Your CSS file should look something like:

```css
p{
    color: red;
    font-weight: bold;
}
```

### Working with CSS

5. Add a CSS rule to color list items (`<li>`). You can find a list of recognized color names at <https://www.w3schools.com/colors/colors_names.asp> (and there are also ways to specify colors that don’t have names). 
6. Bolding is set with the `font-weight` property, but italics are turned on by setting the `font-style` property to “italic”. Italicize the `<h1>` header by creating a new rule with `h1` as the selector, `font-style` as the property name, and “italic” as the property value.
7. You can set a `background-color` property for any element, or for the entire page. Try it! (To specify a property for the entire page, create a CSS rule with a selector for “body”, since the `<body>` element contains everything on the page.)
8. Try changing the size of an element with the `font-size` property. Values can be absolute (e.g., “50px” for 50 pixels) or relative (e.g., “small” or “smaller”). 

## JavaScript

### About JavaScript

* JavaScript can be used to animate a page, so that it responds to user actions, such as clicking on or mousing over some text.

### The HTML and CSS behind our JavaScript

Open [schedule/week_1/web/web\_exercise\_3.html](web/web_exercise_3.html) in \<oXygen/\>. It should look something like:

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>HTML exercise 3</title>
        <link rel="stylesheet" type="text/css" href="web_exercise_3.css" />
        <script type="text/javascript" src="web_exercise_3.js">/**/</script>
    </head>
    <body>
        <h1>HTML exercise 3</h1>
        <h2>This is a level 2 header, or subheading</h2>
        <button type="button" value="red" id="redButton">Red</button>
        <button type="button" value="green" id="greenButton">Green</button>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        <ul>
            <li>This is the first item in a list.</li>
            <li>This is the second item in the same list.</li>
        </ul>
        <p>This is one last paragraph.</p>
    </body>
</html>
```

2. Notice that except for the filename and title, there are only two differences between this file and the last one. The first difference is that this file has added a `<script>` element in the `<head>`, which uses the `@src` attribute to point to the separate JavaScript file. The second is that we’ve created two `<button>` elements. The `@value` of the button is the text that it displays. As we’ll see below, the `@id` values let the CSS select the buttons separately, so that it can color them differently.
3. Open the HTML file in a browser. Notice that the page looks the same as the one in the CSS exercise, except for the addition of the buttons.

Open [schedule/week_1/web/web\_exercise\_3.css](web/web_exercise_3.css) in \<oXygen/\>. It should look something like:

```css
p{
    color: red;
    font-weight: bold;
}
#redButton{
    background-color: pink;
}
#greenButton{
    background-color: lightgreen;
}
```

1. A CSS selector that begins with a hash mark matches the element in the document that has the text after the hash mark as an `@id` value. We use that feature to color the buttons differently. 
5. CSS supports “red” and “green” as colors, but it’s difficult to read black text against them because they’re dark, so we’ve chosen lighter alternatives. Change the background colors to “red” and “green”, reload the page in the browser, and notice the difference. We could, alternatively, have kept real red and green as backgrounds and changed the value of the `color` property (which controls the color of the foreground text) from the default “black” to something easier to read against a dark background.

### Interact with JavaScript

Click the red or green buttons in the web browser and see how the color of the paragraphs changes.

### How the JavaScript works

Open [schedule/week_1/web/web\_exercise\_3.js](web/web_exercise_3.js) in \<oXygen/\>. It should look something like:

```javascript
window.addEventListener('DOMContentLoaded', init, false);
function init() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0, length = buttons.length; i < length; i++) {
        buttons[i].addEventListener('click', toggleColor, false);
    }
}
function toggleColor() {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0, length = paragraphs.length; i < length; i++) {
        paragraphs[i].style.color = this.value;
    }
}
```

This JavaScript has three parts: a bootstrap line that gets it started (just linking to it isn’t enough; we also have to tell it to run), an initialization function that we’ve called `init()`, and a `toggleColor()` function that will change the color of the paragraphs when the user clicks a button.

#### The bootstrap line

The first line tells the browser to run the `init()` function (lines 2 through 7) when the page finishes loading. This fires only once.

#### The `init()` function

The `init()` function fires automatically, thanks to the bootstrap line, as soon as the page has finished loading. It finds all of the `<button>` elements (there are two of them), loops over them, and tells them both to listen for click events, that is, to do something when they are clicked. The something they are told to do is to fire the `toggleColor()` function. The `init()` function also fires only once.

#### The `toggleColor()` function

The `toggleColor()` function fires whenever the user clicks a button because in the `init()` function we told the buttons to listen for and respond to clicks. When `toggleColor()` fires, it finds all of the paragraphs, loops over them, and changes their color. The button that was clicked is represented in the function by the magic word `this`, and the expression `this.value` returns the value of the `@value` attribute on the `<button>` element that was clicked. Since those values are “red” and “green”, we can use them directly to set the color style property of the paragraphs.

#### Watch the JavaScript work

This use of JavaScript to modify the CSS of a page that has already loaded is sometimes called DHTML (dynamic HTML). When the browser first loads and renders the HTML, it converts the character-by-character file into a tree in memory (HTML, like XML, is a tree), and what it renders in the browser window is the tree, decorated with CSS. Our JavaScript routine works by rewriting the tree in memory; the original HTML and CSS files don’t change, but the in-memory tree does.

You can see this in action by opening your browser developer view as follows:

* **In Chrome**: `Cmd+Opt+j` (Mac) or `Ctrl+Shift+j` (Windows)
* **In Firefox:** `Cmd+Opt+k` (Mac) or `Ctrl+Shift+k` (Windows)
* **In Safari:** If you haven’t done so already, you need to enable the developer tools with Preferences → Advanced → Show Develop menu in menu bar. You can then open the developer view with `Cmd+Opt+i`.

We’ll explain the next steps in Chrome, but they have equivalents in the other browsers:

1. In the debugger area, click on the label “Elements”. This will show the HTML of the page you are viewing. This isn’t the literal HTML from the page you loaded; it has been recreated by serializing the in-memory DOM tree.
2. Reload the page with `Cmd+r` (Mac) or `Ctrl+r` (Windows) to erase any lingering effects from having clicked previously on buttons.
3. Look at one of the `<p>` elements in the debugger panel and click on one of the buttons. You’ll see the in-memory DOM tree change to add the CSS styling directly to the `<p>` elements.

When you’re developing JavaScript and don’t get what you expect, you can use the developer interface to examine what’s happening under the hood.

## Tutorials and reference

* Mozilla Developer Network [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* Mozilla Developer Network [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* Mozilla Developer Network [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Validation

You should ensure that your HTML and CSS are valid, that is, that they conform to the requirements of the standard. It isn’t enough to verify that they look correct in the browser, since if they aren’t valid, they may not look correct in a different browser (including your own when the next upgrade is released).

\<oXygen/\> validates HTML and CSS, but if you post your files to the Internet, you should also validate them on line:

* For HTML: W3C [Markup validation service](https://validator.w3.org/)
* For CSS: W3C [CSS validation service](https://jigsaw.w3.org/css-validator/)

## A note about PHP

PHP (which stands for PHP: Hypertext Preprocessor, a recursive acronym) is a technology that builds all or part of a page dynamically on the server before sending it back to the user. For example, the user can input data into a query form and the server will customize the response according to that input. PHP is commonly used to interact with databases (including XML databases), such as on e-commerce shopping sites. We omit PHP from this session because of lack of time. 

## Markdown and pandoc
[Markdown outline](markdown_outline.md)