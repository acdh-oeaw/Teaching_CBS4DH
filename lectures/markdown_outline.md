# Markdown and pandoc

## What is Markdown?

Markdown is a simplified alternative to HTML for creating web pages. The rationale for using Markdown is that it requires less code than HTML, since Markdown formatting instructions are briefer than HTML tags, and Markdown doesn’t use end tags. By employing white space, hash marks, and other special characters, Markdown allows you to format simply and use built-in CSS formatting to present your material online.

So what’s the downside? There are at least two:

* Markdown is less powerful than HTML, which is to say that there are structures that can be modeled with HTML but not with Markdown. 
* Markdown doesn’t have the sort of validation support that you get when you author HTML in a validating editor, such as \<oXygen/\>. Most errors in Markdown aren’t illegal; they just don’t do what you’re trying to accomplish. That makes it easier to do something wrong without noticing, or to not know where an error was made.

Markdown is widely used on GitHub and in Jupyter Notebook, so you’ve already encountered it in both of those contexts in our Institute.


## Markdown guidelines

The standard filename extension for a Markdown file is `.md`.

Markdown paragraphs are plain text separated by blank lines, and the instructions for other common formatting effects are listed below There are many Markdown guides available online, ranging from a basic [Markdown syntax](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) page to a more detailed [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Headers

* h1: type `# My title`
* h2: type `## My secondary title`
* h3: type `### My tertiary title`

The hash marks must begin at the start of a line, and you must have a space after the last hash mark.

### Lists 
An unordered list item uses the asterisk at the beginning of the line, like below:

```markdown
* milk
* eggs
* bread
```

Ordered lists use a number followed by a period:

```markdown
1. hummus
1. spinach
1. butter
```

It doesn’t what the number is; the Markdown renderer will change the numbers you type into an ordered sequence that begins with “1”.

The reserved character (either asterisk or digit+period) must be set off by a space directly after it. Otherwise the Markdown processor will think it’s part of plain paragraph text, and won’t format it as a list.

### Links

If you want the link text to be shown, surround it with angle brackets:

```markdown
<http://www.github.com>
```

If you want to display your own text, but make it a clickable link, put the text inside square brackets, followed (immediately, with no intervening spaces) by the URL in parentheses, e.g.:

```markdown
[Github](http://www.github.com)
```

### Code

An inline code snippet is demarcated with backticks, e.g.:

```markdown
For a long directory listing, type `ls -l`.
```

A code block is set off by triple backticks, e.g.:

	```
	for i in range(10):
		print(i)
	```

A code block that has been *fenced* in this way will be rendered as:

```
for i in range(10):
	print(i)
```

The Markdown rendering engine can color-code or otherwise format some types of code if you specify the language. For example:

	```python
	for i in range(10):
		print(i)
	```

will be rendered as:

```python
for i in range(10):
	print(i)
```

### Flavors

Markdown has many *flavors*, or syntax variations, for different Markdown processing contexts. This means that your Markdown may be rendered one way in your editor and a different way when you push it to GitHub and read it there. These differences are not generally significant, but the only way to be sure is to check. We use Github flavored Markdown (GFM) because we publish to a GitHub repo, but there are many [others](https://github.com/jgm/CommonMark/wiki/Markdown-Flavors).

These syntax variations exist because of different implementations of the Markdown parser.  Markdown itself cannot be read as HTML, so when you upload a .md document to Github, the site is doing some extra work to essentially convert your document into valid HTML.  The parsers that do this all work a little bit differently, so those 'quirks' become different flavors of Markdown.

### Editing Markdown

* \<oXygen/\> opens files that end in “.md” in a split-screen Markdown editor, with raw code on the left and rendered HTML on the right.  Note that pretty print is disabled in Markdown, so editing paragraphs longer than a few sentences becomes tedious.
* [MacDown](https://macdown.uranusjr.com/) is a popular open source Markdown editor for MacOS, also with a split-screen interface.
* There are [many more](https://github.com/jgm/CommonMark/wiki/Markdown-Flavors)!
* Markdown can also be edited in any plain text editor, though you lose the automatic translation feature.
## What is Pandoc?

[Pandoc](http://pandoc.org/) is a tool for converting a file from one format (including forms of markup) to another. For example, you might have a text file written in Markdown that you want to convert to LaTeX, HTML, or a number of other formats. Pandoc allows you to do this on the command line.

### Installing Pandoc

#### Mac OS X

Use the Mac OS X package installer at the Pandoc [download page](https://github.com/jgm/pandoc/releases/tag/1.19.2.1). You’ll also need to install LaTeX for PDF output. We recommend [MacTeX](https://tug.org/mactex/).

#### Windows

Use the Windows package installer at the Pandoc [download page](https://github.com/jgm/pandoc/releases/tag/1.19.2.1). You’ll also need to install LaTeX if you want to be able to produce PDF output. We recommend [MiKTeX](https://miktex.org/).

#### Linux

Try checking your package manager, since Pandoc might already be in your respository. If it is not already there, try installing with `apt-get install haskell-platform`. You’ll also need to install LaTeX for PDF output. We recommend [TeX Live](http://www.tug.org/texlive/), which can be installed through your package manager with `apt-get install texlive`.

### Using Pandoc

Pandoc has no graphic user interface, so you will interact with it on the command line.

### Verify that Pandoc is installed

In your terminal window, type:

	pandoc --version

If Pandoc is properly installed, a message with information about the installed version should appear.

### Create a subdirectory

Navigate to your Documents directory. To create a subdirectory called “pandoc-test”, type:

	mkdir pandoc-test

Then navigate to the `pandoc-test` directory by typing:

	cd pandoc-test

### Convert a file

	npp test1.md

Open a text editor from your current directory, creating a new file. You can use your default plain text editor, or an editing environment that incorporates Markdown support, such as \<oXygen/\>. Type your Markdown here.  No need for namespaces or headers right now.  Try to incorporate as many of Markdown syntax pieces as you can in a small space.  Save and exit.

At a command line, make sure that you are in the `pandoc-test` directory, and then type `ls` to view all of the files. You should see the `test1.md` file that you just created. Now we can try to convert this Markdown file to a different format.

#### To HTML

`pandoc test1.md -s -o test1.html`

#### To LaTeX

`pandoc test1.md -s -o test1.tex`

#### To a Word document

`pandoc test1.md -s -o test1.docx`

#### To a PDF

`pandoc test1.md -s -o test1.pdf`

### Check that the file has been converted

Type `ls` again. You should now see the newly converted file with the appropriate file extension. Try opening the file to see the converted version.

### Other conversions

Pandoc does more than just convert Markdown documents to other formats. For a list of the input and output formats recognized and supported by Pandoc, see their [main page](http://pandoc.org/). A file converted by Pandoc may need additional manual editing to bring it into conformity with your desired output, but it may nonetheless let you automate a large part of a conversion task. Try converting an arbitrary Word document to HTML using Pandoc and then open the output file in a web browser (within your browser, type `Ctrl+o` on Windows or `Cmd+o` on Mac to open a file from the file system).
