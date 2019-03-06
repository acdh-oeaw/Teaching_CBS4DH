# Files and encodings


## Identifying file types

* How do you identifiy a file format?
* How your operating system does it: filename extensions
* Why this is kind of silly in many cases
```
  1. Copy the 'index.html' you created yesterday and rename the new file to something like 'index.pdf'
  2. Look at it in your file explorer
  3. Try to open it by double clicking
```

* Another way to do it: the magical `file` commands
```
 1. In the cli go to the folder containing your newly created 'index.pdf' file
 2. Execute: `file index.pdf`
```

* Why `file` is not completely infallible
```
 echo 'rot,blau,gelb' > farben.csv
 file -i --mime farben.csv
```

## File formats
### Simple format
* TXT: plain text file

### Binary formats
* PDF
* Images: jpg, png ...

### Text based formats (i.e. can be read with text editor)
* CSV and TSV: comma-separated values and tab-separated values
* HTML
```
 In a web browser open up any webpage
 Press CTRL+U. Now you see HTML.
```
* XML: just like HTML, but with more elements.
  * There ary many xml-based file formats (svg, x3d, odt, docx ...)
  ```
   1. Create a document in MS Word or LibreOffice. Save it as docx or odt.
   2. Rename the file and change the format bit to '.zip'
   3. Unzip the file
  ```
* Markdown (.md): e.g. [Wiki -> Edit source](https://en.wikipedia.org/wiki/2011) or [GitHub](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
* JSON ([Example on Wikipedia](https://en.wikipedia.org/wiki/JSON#JSON_sample))


#### Converting between mark up formats
* https://pandoc.org/
* A lot of dedicated online tools exist as well; just google for it. E.g. [csv2json](https://www.csvjson.com/csv2json)


## Character sets and encoding

* [Short German explanation](https://ianus-fdz.de/it-empfehlungen/textdokumente?qt-textdokumente=2#text-kodierungpraxis)
* [Short, but not so short introduction in English](http://www.steves-internet-guide.com/guide-data-character-encoding/)
* Where it all began: ASCII (i = 105 = 1101001), try `man ascii`
* 8-bit character encodings (and why they're called that) (i = 105 = 01101001)
  * Windows: ANSI / code pages
  * Mac: MacOS encodings
  * Unix: ISO-8859 encodings
* Unicode and encodings thereof
  * The [Unicode](https://www.unicode.org/versions/Unicode12.0.0/) set
  * Problems of encoding and how they can be solved
  * Byte order marks in encodings other than UTF-8 (UTR-16, UCS-4)
    * Corollary: there is **never** a reason to choose "UTF-8 with BOM" for your encoding!
  * Unicode-enabled Windows uses UTF-16 by default
  * Unicode-enabled Mac and Linux use UTF-8
* Why UTF-8 is preferred by most people: backwards compatibility
* [Table with characters](https://www.rapidtables.com/code/text/index.html)
* How to change the encoding: your text editor
  * [Example on Notepad++](images/programs_1_ansi.png)
  * [Example on BBEdit](images/programs_1_bbedit.png)
  * Atom (not in basic installation yet)
  ```
  Install package: convert-file-encoding
  Now Atom can do some basic conversion of encodings
  ```
* How to change what you have on the command line (Windows-1252 to UTF-8): `iconv -f CP1252 -t UTF-8 oldfile.txt > newfile.txt`
* How to get up close and personal with the bits
```
xxd -l 1000 filename
xxd filename
xxd -b filename
```

## Operating system conventions everyone should know about

* Line endings (EOL):
  * Windows default is CRLF (\r\n, 0x0d 0x0a)
  * Unix/current Mac default is LF (\n, 0x0a)
  * Legacy MacOS default is CR (\r, 0x0d)
  * Use `xxd` to see what kind of line endings you have.
  * Convert line endings on Windows: with Notepad++ or `dos2unix` and `unix2dos`
  * Convert line endings on Mac: either install `dos2unix` via Homebrew (`brew install dos2unix`), or [use Perl](https://stackoverflow.com/a/14155400) (e.g. `perl -pi -e 's/\r\n|\n|\r/\n/g'` for converting to Unix). We recommend installing the utilities via Homebrew!

* Path separators:
  * `\` (Windows non-bash),
  * `/` (Unix, Mac)
  * Why you can't put `:` in a file name, and what happens if you try
