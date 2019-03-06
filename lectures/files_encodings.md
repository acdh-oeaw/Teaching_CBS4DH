# Files and encodings


## Identifying file types

* How do you identifiy a file format?
* How your operating system does it: filename extensions
<details>
  <summary>Why this is kind of silly in many cases</summary>

  1. Copy the 'index.html' you created yesterday and rename the new file to something like 'index.pdf'
  2. Look at it in your file explorer
  3. Try to open it by double clicking
</details>

* Another way to do it:
<details>
  <summary>the magical `file` commands</summary>
 1. In the cli go to the folder containing your newly created 'index.pdf' file
 2. Execute: `file index.pdf`
 3. kj
</details>

* Why `file` is not completely infallible

## Aim for 07.03.
* file formats and encoding
* txt, csv

* md examples (https://en.wikipedia.org/wiki/2011)

* https://pandoc.org/

* html/xml; unpack docx
* json format

* encoding
  * https://ianus-fdz.de/it-empfehlungen/textdokumente?qt-textdokumente=2#text-kodierungpraxis
  * utf-8
  * Atom: install package (convert-file-encoding); change encoding
  * csv in utf-8 in excel


## Character sets and file formats

* Where it all began: ASCII
* 8-bit character encodings (and why they're called that)
  * Windows: ANSI / code pages
  * Mac: MacOS encodings
  * Unix: ISO-8859 encodings
* Unicode and encodings thereof
  * The Unicode set
  * Problems of encoding and how they can be solved
  * Byte order marks in encodings other than UTF-8 (UTR-16, UCS-4)
    * Corollary: there is **never** a reason to choose "UTF-8 with BOM" for your encoding!
  * Unicode-enabled Windows uses UTF-16 by default
  * Unicode-enabled Mac and Linux use UTF-8
* CSV and TSV: comma-separated values and tab-separated values
* Why UTF-8 is preferred by most people: backwards compatibility
* How to know what you have: the `file` command
* How to change what you have: your text editor
  * [Example on Notepad++](images/programs_1_ansi.png)
  * [Example on BBEdit](images/programs_1_bbedit.png)
* How to change what you have on the command line: `iconv -f CP1251 -t UTF-8 oldfile.txt > newfile.txt`
* How to get up close and personal with the bits: `xxd -l 1000 filename` or `xxd filename` for the whole file


## Why we recommend text editors instead of word processors

We will write a 'Hello World' script in Python, for demonstration purposes.

* In Word or OpenOffice
* In TextEdit on Mac (WordPad, alas, has got cleverer, but it's still pretty awkward to use...!)
* Why don't these work?

## Operating system conventions everyone should know about

* Line endings (EOL):
  * Windows default is CRLF (\r\n, 0x0d 0x0a)
  * Unix/current Mac default is LF (\n, 0x0a)
  * Legacy MacOS default is CR (\r, 0x0d)
  * Use `xxd` to see what kind of line endings you have.
  * Convert line endings on Windows: `dos2unix` and `unix2dos`
  * Convert line endings on Mac: either install `dos2unix` via Homebrew (`brew install dos2unix`), or [use Perl](https://stackoverflow.com/a/14155400) (e.g. `perl -pi -e 's/\r\n|\n|\r/\n/g'` for converting to Unix). We recommend installing the utilities via Homebrew!

* Path separators:
  * `\` (Windows non-bash),
  * `/` (Unix, Mac)
  * Why you can't put `:` in a file name, and what happens if you try


## Shells within shells

* `ls -l`
* user, group, other
* `chown` (You probably can’t change ownership on shared systems and don’t need to do it on your own machine. This command is useful if you install something incorrectly.)
* `chmod` (“644”, “664” for files; “755”, “775” for directories)
* Bash is a shell, but there are other shells
* Running `python` - different syntax, different commands
* Running `telnet` - another different syntax, more different commands
* Running `bash` within `bash` and process listing

## Getting around the directory stack

* review of `cd` and `cd -`
* `pushd`
* `popd`
* `dirs -v` (verbose); `dirs -c` (clear)


# Programs and files 2

## Repeating things and variables

 Declare a variable with just its name, but refer to it with a leading `$`. For example:

```bash
for file in *.txt; do wc -l $file; done
```

The preceding declares a variable called `file`, which will be equal to all files in the current directory that end in `.txt` and then reports the number of lines in each.

In the first example below, `%` removes a matching string at the end of the filename (in this case, `.txt`), and we then append something else (in this case, `.bak`). This changes the extension on all `.txt` files to `.bak`; for example, it changes `obdurodon.txt` to `obdurodon.bak`. The second example keeps the `.txt` and appends `.bak` after it, changing `obdurodon.txt` to `obdurodon.txt.bak`.

Both commands as written, with `cp`, make copies, but if you replace `cp` with `mv`, they rename files.

```bash
for file in *.txt; do cp ${file%txt}bak; done
for file in *.txt; do cp $file $file.bak; done
```

## The environment

* `env`: show all environment variables
* `$PATH`: list of directories where the shell looks for executable files, starting at the beginning
* `echo $PATH`: show the value of the `$PATH` variable

### More about `$PATH`

* Your working directory is not automatically in your path. Why might that be the case?
* To execute a file in the current directory, specify the directory as part of the command, e.g., `./command` runs a command called `command` that’s located in the current working directory.

## Finding commands and files

* `help`: list all shell built-ins
* `which`: search `$PATH`, one result (the one that will be executed if you type the command), not for shell built-ins or aliases
* `whereis`: search standard locations, multiple results, not for shell built-ins or aliases
* `find / -name java -print 2> /dev/null`: find all files named `java` starting at the file system root, not for shell built-ins or aliases
* `type`: includes shell built-ins and aliases!

## System locale (`$LOCALE` and `$LC_*`)

 Declare a variable with just it’s name, but refer to it with a leading `$`. Example:

 ```bash
 for file in *.txt; do wc -l $file; done
 ```
 The preceding declares a variable called `file`, which will be equal to all files in the current directory that end in `.txt`, and then reports the number of lines in each.

* How to find your locale: the `locale` command
* What the different `LC_*` variables are for
* What happens when your locale changes: playing with `date`

## Misc
* `diff`
* `locale`: view your locale
* `diff` and `wdiff`
