# Command line 2

## General

* **References:** Much of the content of these sessions is summarized at our [Command line quick reference](command_resources.md) page.
* **Credit:** Our materials are based on the Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/) course
* **Something to play with:** Follow the instructions at <http://swcarpentry.github.io/shell-novice/setup.html> to copy some practice files.

## General review

### A directory tree sample

![Directory tree sample](images/directory_tree_sample.png)

### Paths

* **Absolute path**: `/Users/mamo/Desktop/shell-lesson-data` (starts with a slash, which means "root directory", i.e. uppermost directory of the filesystem)
	* This is the one you get when you type `pwd`
* **Relative path**
	* `shell-lesson-data` (starting from `/Users/mamo/Desktop/`)
	* `Desktop/shell-lesson-data` (starting from `Users/mamo/Desktop`)
	* `..` (starting from `/Users/mamo/Desktop/shell-lesson-data/exercise-data`)
	* `../shell-lesson-data` (if we imagine to start from another directory contained in `/Users/mamo/Desktop/`)

### What are we using?

* We are using a **shell** based on a **command line interface** (**CLI**) to interact with the operating system.
* More specifically, we are using **bash**, which is very popular in Unix and Unix-like operating systems (like macOS and Linux), but can also be installed on Windows.
* When we refer to a CLI-based shell, we usually just say "the shell" or "the command line".

### The basics of the command line

* General structure of a command: `commmand -option(s) argument(s)`, e.g. `ls -F shell-lesson-data`
* `cd` to go to a directory
* `ls` to show what is inside a directory
* Need help? `man ls` or `ls --help`

## Working with directories and files

We already considered these topics at the end of yesterday's session. Here is a recap of all the commands and their most important options, and a table to remember the names of the commands.

| Command | Explanation |
| ------- | ----------- |
| cp | copy |
| mv | move |
| rm | remove |
| mkdir | make directory |
| rmdir | remove directory |

### Working with directories

* `mkdir`: make directory
	* WhatÕs a good name for a directory? And more in general: what's a good filename?
		* Avoid spaces (otherwise you'll be forced to use quotes `"..."` for arguments or backslashes `\`)
		* Avoid beginning hyphens, otherwise file and directory names might be mistaken for options/flags
	* WhatÕs a good directory structure for a project?
* `mkdir -p a/b/c`: create intermediate directories
* `rmdir`: remove empty directory
* `rm -rf:` remove directory and its contents recursively (careful!)
* `rm -ri`: remove directory asking for confirmation (for single files)

### Working with files

* `cp`: copy
	* `cp oldfile newfile` copy a file
	* `cp oldfile1 oldfile2 newdirectory`: copy multiple files
	* `cp -r olddirectory newdirectory` copy directory recursively
* `mv`: rename / move
	* Rename a file or directory
	* Move a file or directory to a different location (optionally rename)
	* Be careful! It will automatically overwrite files with the same name, unless you add `-i` to make it interactive (will ask for permission)
* An easy way to create an empty file: `touch test.txt`
* `rm`: delete (carefulÑdeletion is forever!)
* `rm -i`: delete after asking permission

### Editing and saving files

An easy way to create an empty file: `touch some_file`

You can use a text editor to edit and save files:
* Windows default is Notepad, Mac default is TextEdit
* In this course, we will use [Atom](https://atom.io/)
* Alternatives are:
	* [BBEdit](https://www.barebones.com/products/bbedit/) (only Mac)
	* [Notepad++](https://notepad-plus-plus.org/) (only Windows)
	* [Visual Studio Code](https://code.visualstudio.com/) (Mac, Windows, Linux)
* Or use `vim` or `emacs` from the command line (<https://en.wikipedia.org/wiki/Editor_war>)
* WhatÕs a good filename?
	* Avoid spaces (otherwise you'll be forced to use quotes `"..."` for arguments or backslashes `\`)
	* Avoid beginning hyphens, otherwise file and directory names might be mistaken for options/flags
* Check the contents of a file
	* `cat /Users/djb/Documents/myfile.txt`
		* Not very useful to navigate through a long text
	* `less /Users/djb/Documents/myfile.txt`
		* The text will be organized into pages, and you can use the following commands to navigate through it:

| Keystroke | Action |
| --------- | ------ |
| space | forward one window |
| b | backward one window |
| d | forward one half-window |
| u | backward one half-window |
| g | go to first line |
| G | go to last line |
| /pattern | search forward for pattern |
| ?pattern | search backward for pattern |
| n/N | next/previous search result |
| q | exit |

## Wildcards ("globbing")

For this and the next sections, see <https://swcarpentry.github.io/shell-novice/04-pipefilter/index.html>, on which we will base our exercises.

We will be using some special characters that allow to search for undetermined characters:
* `*` = zero or more undetermined characters
* `?` = exactly one undetermined character
* `[abc]` = a set, i.e. _one_ character to be chosen among `a`, `b`, and `c`

### Examples

* `*.xml ` (files ending in Ò.xmlÓ; the place occupied by `*` may be empty or contain one or more characters)
* `*.x?l` (files ending in Ò.xÓ followed by any single letter followed by ÒlÓ, e.g., XML [xml], XSLT [xsl], XProc [xpl] files)
* `*.x[ms]l` (files ending in Ò.xÓ followed by ÒmÓ **or** ÒsÓ followed by ÒlÓ, e.g., XML and XSLT files, but not XProc)

### Regex vs globbing

**Globbing** is annoyingly different from **regex**. We will see what regex is in the following session, so don't worry if you don't understand everything here!

* Regex: `*` and `?` are repetition indicators for the preceding item
* Globbing: `*` and `?` are wildcards
* Glob `*` = regex `.*`
* Glob `?` = regex `.?`

## Reading from and writing to files

![Standard input and output of a command](images/input_output_command.png)

Every command reads some data from the input (which in the shell is called **stdin**, i.e. _standard input device_) and sends out the results to the output (**stdout**, i.e. _standard output device_). If there are any errors, the command will output them to another channel (**sterr** i.e. _standard error device_).

We usually **input** data into a command by writing its argument(s) with the _keyboard_, and we see the **output** of the command _on the screen_. But what if we could change this? For example write the output to a file, or take the input from a file?

* **stdin**:
	* `<`: input from file
* **stdout**:
	* `>`: output to file (careful: overwrites existing files with the same name)
	* `>>`: append to file (creates file if it doesnÕt already exist)
* **stderr**:
	* `2>`: error messages to file (`2> /dev/null` means that the error messages will basically disappear)

For example, we can save the list of contents of a directory in a text file by simply writing this:
* `ls > some_file.txt`
* `ls some_directory > some_file.txt`

## Filters

### About filters

* Filters are programs that accept input on **stdin** and produce output on **stdout**.
* Filters transform the input according to some criterion and send the transformed data to the output.

### Some useful filters

* `cat` (one or more files)
* `wc` (`-l` lines, `-w` words, `-c` characters)
* `sort` (`-r` reverse, `-u` unique, `-n` numeric)
	* Numeric (`-n`) vs alphabetic (no option) sorting

### Some more filters

* `head` (`-10`, or any other number, or `-n 10`)
* `tail` (`-10`, or any other number, or `-n 10`)
* `uniq` (only on sorted input)

### Redirect input of filters

Contrast `wc file`, `wc < file`:
* In the first case, the command will just take the string `file` as its input
* In the second case, you need to have a file with name `file` that acts as input

## Piping

* You can chain commands together thanks to a `pipe`, represented as `|` in the Unix shell.
	* Mac Austrian keyboard: `Option + 7`
	* Windows Austrian keyboard: `Alt Gr + 7`
* `|` pipes output of process on the left into input of process on the right
	* For example: `wc -l *.pdb | sort -n`
	* This means that the output of `wc -l *.pdb` will function as the input of the commmand after `|`, i.e. `sort -n`.
* Piping is particularly useful with filters, that can be chained together to form computational pipelines. Basically, these are the first steps for programming!

### Practice

We will try to build together the following pipeline, to be used in the directory `shell-lesson-data/exercise-data/proteins`:

`wc -l *.pdb | sort -n | head -n 1`

The best way to understand what a pipeline does is **building it up "gradually"**: try the _first_ command and see the output on the screen; then add the _second_ command and compare the output to the previous one; then add the _third_ command and compare the output again; and so on, like this:

1. `wc -l *.pdb`
2. `wc -l *.pdb | sort -n`
3. `wc -l *.pdb | sort -n | head -n 1`

## A very quick look at scripts

Let's say that you have finally built a nice pipeline of commands that you might want to reuse later. Where do you store it? Can you use it without having to type the whole pipeline again?

You can save it in a **shell script**.
* A shell script is nothing else than a program that tells the shell what to do.
* It has the extension `.sh`
* It is basically a file of text which contains the commands that must be executed by the shell.

For example, in our case, let's call our script `script1.sh`:
* Create a file `script1.sh` with a text editor (for example, `nano script1.sh` or just a GUI-based editor, like Atom)
* Write in the first line of the file `#!/bin/bash`. This indicates that the commands must be executed by the shell.
* Add the command you want to execute, like `wc -l *.pdb | sort -n | head -n 1`
* Save the final result
* Make this executable: in the directory where the script is contained, type `chmod 755 script1.sh`
* Execute the script with `./script1.sh` (you have to specify that the script is in your current directory by adding `./`)

Be careful!
* This script will execute the commands in the directory where it is stored. So, it will look for all files `*.pdb` in its directory.
* If you want to use it in another directory, you must either move the script or recall it from the directory where you want to use it (this would require a longer and complicated path).
* However, the easiest way is to include a variable, so that you can specify to the script where it should be applied: instead of writing `*.pdb` in its code, you can write `$@`. This means that the shell will automatically replace `$@` with whatever you input as argument of the script, e.g. `./script1.sh exercise-data/*.pdb`. This will also allow you to use the script to check for other kinds of formats too, e.g. `./script1.sh *.txt`

This is just the tip of the iceberg: scripts would require at least a whole session for itself (or even a whole course), but I hope you already got the gist of what makes the shell such a powerful tool. The shell is not only a way of interacting with the operating system, but it is also a **programming language**.

## History and tab completion

### Review

* `history` (up and down arrows)
* `tab`: 1) Filename completion, 2) Command completion
* Editing the command line: `Ctrl + a`, `Ctrl + e`, `Ctrl + u`, `Option + click` (Mac only)

### And something new

* `!580` (execute the 580th command from the history)
* `!!` (execute the previous command)
* `!$`: last word of last command
* `Ctrl+r`: initiate (or continue) history search

