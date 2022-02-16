# File formats and encodings


## Identifying file types

* How do you identifiy a file format?
* How your operating system does it?  
  By filename extensions
* Why this is naive?
```
  1. Copy the 'index.html' you created yesterday and rename the new file to something like 'index.pdf'
  2. Look at it in your file explorer
  3. Try to open it by double clicking
```
* But also...
```
  1. Create a sample.docx file (with any content, even empty)
  2. Rename it to sample.zip
  3. Try to open it by double clicking
```
* ...as well as.. 
  What's the format of the file with the `.bin` extension? [answer from Google](https://fileinfo.com/extension/bin)

* Is there a better way to recognize the file type?  
  Yes, we can try to actually analyse its content, e.g. with the `file` command
```
 1. In the cli go to the folder containing your newly created 'index.pdf' file
 2. Execute: `file index.pdf`
```

* Even when looking into the file contant the result might be surprising
```
 echo 'rot,blau,gelb' > farben.csv
 file -i --mime farben.csv
```

## File formats

### Binary formats

"Files you can't open in a plain text editor", e.g.

* Images: jpg, png, etc.
* Movies & sound: avi, mkv, mp4, mpeg, mp3, etc.
* Old Ms Office files: .doc, .xls, .ppt
* PDF (although not entirely...)

There are various reasons for using binary formats:

* The data stored in a file have no good text representation (e.g. images, movies, sound)
* Compression.
* Performance.
* Protecting intelectual rights - only you know how to read (decode) the data stored in a file.

### Text formats

"Files you can open in a plain text editor", e.g.

* txt: plain text file
* csv, tsv: delimited values "database" files
* xml, json: a general "database" file formats
* html, md: files storing markup data (text data along with information on how to display them)
* js, php, py, r, cpp, etc.: source code in various programming languages
* and many, many more (e.g. [IANA-registered list of text formats](https://www.iana.org/assignments/media-types/media-types.xhtml#text)]

There are various reasons for using text formats:

* Are easy to access and read
* Can be effectively processed with general tools (ones you know after the command line lectures :-) )
```
EXAMPLE
```
* Can be easily compared and versioned
```
EXAMPLE
```

### File formats hierarchy

File formats form a hierarchy with more specialized ones being build on top of more generic ones, e.g.

```
text file -+
           +-> XML --+            a "generic" text format for storing structured data
           |         +-> TEI      uses XML to store text data
           |         +-> HTML     uses XML to store WWW webpages
           |         +-> RDF/XML  uses XML to store RDF data
           |         +-> MARC/XML uses XML to store MARC data (library catalog data)
           |
           +-> JSON -+            a "generic" text format for storing structured data
                     +-> geoJSON  uses JSON to store spatial data
                     +-> JSON-LD  uses JSON to store RDF data
ZIP -+        just a compressed set of arbitrary files
     +-> DOCX a compressed set of files representing an Ms Word document
```

* It means a file can be (and often is) "in many formats" at the same time!  
  e.g. an HTML file is at the same time also an XML file as well as a text file
* It is convenient as it allows to reuse the same tools, e.g.
    * you can edit any text file in plain text editor (like the Atom one we are using)
    * you can search for a file containing a given phrase using `grep` no matter in any text file
    * you can extract and transform data stored in a JSON file using the [jq](https://stedolan.github.io/jq/) program
* If it's so convenient to work with "generic" file formats, why do we need specialized ones?

### Does file format determines the way the file is displayed?

Depending on the program used to open a file, it can look completely different:

* open a [CSV file](TODO) in a spreadsheet app (e.g. Ms Excel) and in a plain text editor (Atom)
* open an [HTML file](TODO) in a web browser and in a plain text editor (Atom)
* open an [SVG file](TODO) in a web browser and in a plain text editor (Atom)

Is one representation better than other?

### File formats conversion

* Many file formats can be converted between each other, e.g.
    * https://pandoc.org/
    * [csv2json](https://www.csvjson.com/csv2json)
    * Ms Office/Libre Office/Google Docs being able to save both in .docx and .odt, .xlsx and .ods, etc.
* But sometimes it's tricky.  
  When?
```
EXAMPLES - CSV vs JSON, Ms Office/Libre Office
```

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

# Opened Data Formats

TODO
