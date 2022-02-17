# File formats and encodings

## Identifying a file format

* How do you identifiy a file format?
* How your operating system does it?  
  > By filename extensions
* Why this is naive?
  > 1. Download any image, e.g. [this JPEG](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/images/arpanet.jpg) (right click on the link and choose "Save target element as..." to download instead of opening it in the browser)
  > 2. Open it by double clicking
  > 3. Change its name to `arpanet.html`
  > 4. Try to open it by double clicking
* but also...
  > 1. Download any Ms Word file, e.g. [this one](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/sample.docx)
  > 2. Rename it to sample.zip
  > 3. Try to open it by double clicking
* ...and... 
  What's the format of the file with the `.bin` extension?
  > [Ask Google](https://fileinfo.com/extension/bin)
* Is there a better way to recognize the file type?  
  > Yes, we can try to actually analyse its content, e.g. with the `file` command
  ```
   1. In the cli go to the folder containing the arpanet.html
   2. Execute: `file arpanet.html`
  ```
* Even when looking into the file content the result might be surprising
  ```
  echo 'rot,blau,gelb' > farben.csv
  file -i --mime farben.csv
  ```

## File formats

There are two broad file format kinds binary and text.

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
* xml, json: general structured data file formats
* html, md: files storing formatted texts
* js, php, py, r, cpp, etc.: source code in various programming languages
* and many, many more (e.g. [IANA-registered list of text formats](https://www.iana.org/assignments/media-types/media-types.xhtml#text))

There are various reasons for using text formats:

* All of them can be read and edited using just a plain text editor.  
  Which doesn't mean it's always the most convenient way.
* They are easy to compare and version.  
  (you should have seen it during the git lecture)

### File formats hierarchy

* Can a file be in more than one format at the same time?
  > Sure it can, e.g.
  > 1. Download a [sample HTML file](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/sample.html) (right click on the link and choose "Save target element as..." to download instead of opening it in the browser).
  > 2. Open it in a browser (just double click on it)
  > 3. Make a copy of it and rename the copy to sample.xml
  > 4. Open sample.xml in a browser (just double click on it)
  > 5. Make a copy of it and rename the copy to sample.txt
  > 6. Open sample.txt in a plain text editor (e.g. Atom)
  >
  > As we can see an HTML file is also an XML file as well as a plain text file at the same time
* File formats form a hierarchy with more specialized ones being build on top of more generic ones, e.g.
  ```
  text file -+                      any file which can be read in a plain text editor
             +-> XML --+            a generic text format for storing structured data in text files
             |         +-> TEI      uses XML to store text data
             |         +-> HTML     uses XML to store WWW webpages
             |         +-> RDF/XML  uses XML to store RDF data
             |         +-> MARC/XML uses XML to store MARC data (library catalog data)
             |
             +-> JSON -+            another generic format for storing structured data in text files
                       +-> geoJSON  uses JSON to store spatial data
                       +-> JSON-LD  uses JSON to store RDF data
  ZIP -+        just a compressed set of arbitrary files
       +-> DOCX a compressed set of files representing an Ms Word document
  ```

### File format conversion

* Many file formats can be converted between each other, e.g.
    * [pandoc](https://pandoc.org/) allows conversion between many different formatted text formats
    * [csv2json](https://www.csvjson.com/csv2json) can convert CSV to JSON and vice versa
    * Ms Office/Libre Office/Google Docs being able to save both in .docx and .odt, .xlsx and .ods, etc.
    * and there are plenty others - google it!
* But sometimes it's tricky.  
  When?

## Problems specific to plain text files

### Character sets

* **The issue: there's no common agreement on how computers should internally store characters and different parties doing it in a different way lead to trouble.**
* A bit of history:
  * Historically we tried to store characters as compact as possible which limited the number of characters which can be represented.
  * Initially (ASCII, 1963) it was only around 100 useful characters.
    This left no space for characters specific to non-English alphabets (even 10 digits and 26 letters in small and big caps is already 62 characters and we also need space, coma, period, brackets, etc.).
  * This has been quickly (still in '60s) extended with additional 128 characters which was enough to handle (almost) any single language.  
    This lead to creation of hundreds (!) of encoding standards which we call [code pages](https://en.wikipedia.org/wiki/Code_page).
  * It took until 1991 to come up with a standard allowing to represent (hopefully) any character in a uniform way - the [Unicode](https://en.wikipedia.org/wiki/Unicode) -
    but it still has a few implementations ([UTF-8](https://en.wikipedia.org/wiki/UTF-8), [UTF-16](https://en.wikipedia.org/wiki/UTF-16), [UTF-32](https://en.wikipedia.org/wiki/UTF-32) and few others).
* Why code pages are troublesome?
  > 1. You have to know file code page to read it properly but this information is not contained in the file
  >    * Download and open in Atom a sample [Windows-1252-encoded file](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/windows_1252.txt) (right click on the link and choose "Save target element as..." to download instead of opening it in the browser).  
  >      Choose the encoding using the `Edit->Select Encoding` dialog so it's displayed properly.
  >    * Download and open in Atom a sample [ISO-8859-1-encoded file](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/iso_8859-1.txt).  
  >      Choose the encoding using the `Edit->Select Encoding` dialog so it's displayed properly.
  >    * Download and open in Atom a sample [file in unknown encoding](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/mysterious_encoding.txt).  
  >      It contains the same text as in the `iso_8859-1.txt` but can you guess the encoding so its displayed properly?
  > 2. You can't store characters from different encodings in one file, e.g. you can't have a file containing `Jürgen Żółtak` (a mix of German and Polish characters)
* Unfortunately code pages are still wildly used, e.g. in:
  * PDFs (!)
  * filenames in ZIP files created by Windows (!)
  * Many apps working with plain text files under Windows (!)
  * Legacy data created before Unicode gained momentum
* What can go wrong with Unicode?
  * There are many ways of encoding Unicode data: [UTF-8](https://en.wikipedia.org/wiki/UTF-8), [UTF-16](https://en.wikipedia.org/wiki/UTF-16), [UTF-32](https://en.wikipedia.org/wiki/UTF-32).
    (Have we learnt nothing from code pages mess?)
  * To avoid problems with unknown file encoding a [BOM](https://en.wikipedia.org/wiki/Byte_order_mark) has been invented.  
    Unfortunately or not BOM has never been widely adopted.
    Anyway if you have BOM-aware app (unfortunately Atom is not among them) and a file containing the BOM mark, the automated encoding recognition works:
    > * Download and open a [UTF-16-encoded file](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/utf_16.txt) with BOM
    > * Download and open [UTF-32-encoded file](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/utf_32.txt) with BOM
    > * Download and open [UTF-32-encoded file](https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/2022S/lectures/files/utf_32_nobom.txt) without BOM
* **UTF-8 without BOM is the most portable Unicode encoding.**  
  Just use it in every new file you create.
  * If you're using Mac or Unix, it's just a default.
  * If you're using Windows, make sure your app is set up to save files using UTF-8.

#### Character sets conversion

There are various tools allowing to convert files between characters sets, e.g.

> * With Atom
>   1. Install the "convert-file-encoding" Atom package by runing `apm install convert-file-encoding` in the cli
>   2. Open a file in Atom
>   3. Use the `Packages->Convert to encoding->...` menu item
>   4. Save the file
> * Use the `iconv` app in the cli, e.g.:
>   `iconv -f CP1252 -t UTF-8 fileInWindows1252Encoding.txt > fileConvertedToUTF8.txt`

### Line endings

* For historical reasons there are two characters used to denote the end of a line in plain text files: a `Carriage Return` (`\r`) and a `Line Feed` (`\n`). 
  (If you're wondering why think of how [old printers](https://en.wikipedia.org/wiki/Teleprinter) used to work).
* Different operating systems use them in a different way:
  * Windows default is `\r\n`
  * Unix/current Mac default is `\n`
  * Legacy MacOS default is `\r`
* Most apps just handle all conventions listed above but it does make a difference for file comparison (e.g. in git)
* There are ways to convert line ending style:
  * On Windows: with [Notepad++](https://notepad-plus-plus.org) or `dos2unix` and `unix2dos`
    * When you install git on Windows you can choose if the conversion should be performed automatically when you pull/push data from remote repositories.
  * On Mac: either install `dos2unix` via Homebrew (`brew install dos2unix`)
  * On Unix: use `dos2unix` and `unix2dos`

## Problems related to file names and paths

* Path separators:
  * `\` (Windows non-bash),
  * `/` (Unix, Mac but works in pretty many places in Windows as well)

* Characters allowed in file and folder names
  * Differ between operating systems or even filesystems, e.g. `windows:will:not:store:it.txt` is a valid file name under Linux but not under Windows
  * Some characters are allowed but may require special handling in the cli, e.g. a space.
    > 1. Rename any file in a way its name contains a space
    > 2. Try to copy it in the cli now.  
    >    How to do it properly?
  * To be on the safe side avoid characters other then letters, digits, a dot, an underscore and a dash.

## Keep your data Opened Data

This topic is far to broad to discuss in details during an introductory course but it's still worth to mention that:

* The same information can be stored in a different way, e.g.
  * you can prepare a text as a .docx, [LaTeX](https://en.wikipedia.org/wiki/LaTeX), [markdown](https://en.wikipedia.org/wiki/Markdown), [TEI-XML](https://en.wikipedia.org/wiki/Text_Encoding_Initiative#TEI_guidelines) or publish it as an HTML webpage,
  * you can store your database as .xlsx, [.csv](https://en.wikipedia.org/wiki/Comma-separated_values), [JSON](https://en.wikipedia.org/wiki/JSON), [XML](https://en.wikipedia.org/wiki/XML), [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) or using a dedicated database software (e.g. a [relational database](https://en.wikipedia.org/wiki/Relational_database) or a [triplestore](https://en.wikipedia.org/wiki/Triplestore)),
  * etc.
* The format you choose impacts how easy it will be to reuse the data (see e.g. [5 Star Opened Data](https://en.wikipedia.org/wiki/Linked_data#5-star_linked_open_data)).
  * Use formats which can be processed using free tools.
    * Something to think about - "free" as in "a free beer" or like in "freedom of speach"?
      See e.g. [here](https://en.wikipedia.org/wiki/Gratis_versus_libre/)
  * Think about licensing.
    * Take a look on [CreativeCommons](https://en.wikipedia.org/wiki/Creative_Commons_license). 
    * Honor licenses of data you are using (in academia you are most likely to violate [attribution](https://en.wikipedia.org/wiki/Attribution_(copyright)) and "share [derived work](https://en.wikipedia.org/wiki/Derivative_work) under same license" obligations).
    * The "free beer" vs "freedom of speach" question applies also here.
  * Separate data from presentation and keep your data structured (make it easy to process your data in an automated way).
  * Follow your scientific community standards.
  * Don't forget about the metadata.
  * Deposit outcomes of your work in public repositories (e.g. [Zenodo](https://zenodo.org/)) so others can find and access them.
* Read about:
  * [Opened Data](https://en.wikipedia.org/wiki/Open_data) and [Linked Data](https://en.wikipedia.org/wiki/Linked_data)
  * Remember any data you create during your studies or work can be useful for others...  
    ...but sharing it in reusable way involves admittedly quite some work.

