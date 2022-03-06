# Command line 2

## General

* **References:** Much of the content of these sessions is summarized at our [Command line quick reference](command_resources.md) page.
* **Credit:** Our materials are based on the Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/) course
* **Etherpad:** We’ll create an [Etherpad](https://etherpad.net) where participants who wish to do so can take notes collaboratively. For a quick overview of Etherpad functionality see <http://archive.flossmanuals.net/etherpad/>.
* **Something to play with:** Follow the instructions at <http://swcarpentry.github.io/shell-novice/setup.html> to copy some practice files.

## General review (see also below)

* `whoami`
* `pwd`
* `clear` (`Ctrl+l` on Windows and Ubuntu, `Cmd+k` on macOS)
* `ls` (`-l`, `-a`, `-G`, `-lh`, `-d`, `-d */`, `-1`, `-F`); `ls /Users/djb/Documents/data-shell`

## History and tab completion

### Review

* `history` (up and down arrows)
* `!580` (execute the 580th command from the history)
* `!!` (execute the previous command)
* `tab`: 1) Filename completion, 2) Command completion
* Editing the command line: `Ctrl + a`, `Ctrl + e`, `Ctrl + u`, `Option + click` (Mac only)
* `file /Users/djb/Documents/myfile.txt`

### And something new

* `$!`: last word of last command
* `Ctrl+r`: initiate (or continue) history search

## Getting around the file system review

* `cd` or `cd ~`: go to your home directory
* `cd -`: go back to the directory you came from
* `cd ..` go up one level
* `cd /Users/djb/Documents/data-shell`: go to specified directory

## Working with directories

* `mkdir`: make directory
	* What’s a good name for a directory?
	* What’s a good directory structure for a project?
* `mkdir -p a/b/c`: create intermediate directories
* `rmdir`: remove empty directory
* `rm -rf:` remove directory and its contents recursively (careful!)

## Working with files

* `cp`: copy
	* `cp oldfile newfile` copy a file
	* `cp oldfile1 oldfile2 newdirectory`: copy multiple files
	* `cp -r olddirectory newdirectory` copy directory recursively
* `mv`: rename / move
	* Rename a file or directory
	* Move a file or directory to a different location (optionally rename)
* `rm`: delete (careful—deletion is forever!)
* `rm -i`: delete after asking permission
* Editing and saving files (in your editor of choice)
	* Windows default is Notepad, Mac default is TextEdit
	* In this course, we will use [Atom](https://atom.io/)
	* Alternatives are:
		* [BBEdit](https://www.barebones.com/products/bbedit/) (only Mac)
		* [Notepad++](https://notepad-plus-plus.org/) (only Windows)
		* [Visual Studio Code](https://code.visualstudio.com/) (Mac, Windows, Linux)
	* Or use `vim` from the command line
	* What’s a good filename?
* `less /Users/djb/Documents/myfile.txt` (`space`, `b`, `q`, `/`, `?`, `n`, `G` , `G1`)

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
| q | exit |
[Some essential commands for less]

## Wildcards (“globbing”; annoyingly different from regex)

### Examples

* `*.xml ` (files ending in “.xml”)
* `*.x?l` (files ending in “.x” followed by any single letter followed by “l”, e.g., XML [xml], XSLT [xsl], XProc [xpl] files)
* `*.x[ms]l` (files ending in “.x” followed by “m” or “s” followed by “l”, e.g., XML and XSLT files, but not XProc)

### Regex vs globbing

* Regex: `*` and `?` are repetition indicators for the preceding item
* Globbing: `*` and `?` are wildcards
* Glob `*` = regex `.*`
* Glob `?` = regex `.?`

Practice with `ls` in data-shell/molecules

## Reading from and writing to files

* stdin, stdout, stderr
* `<`: input from file
* `>`: output to file (careful: overwrites existing files with the same name)
* `>>`: append to file (creates file if it doesn’t already exist)
* `2>`: error messages to file (`2> /dev/null`)

Save file listings with `ls`, file contents with `cat`, or command-line text with `echo`.

## Filters

### About filters

* Filters are programs that accept input on stdin and produce output on stdout.
* Stdin defaults to the keyboard and stdout defaults to the screen, but both can be redirected to or from a file or a pipe.
* Filters can be chained together to form computational pipelines.

### First filters

* `cat` (one or more files)
* `wc` (`-l` lines, `-w` words, `-c` characters)

Redirect input, contrast `wc file`, `wc < file`

### Filters and piping

* `|` pipes output of process on the left into input of process on the right
* `head` (`-10`, or any other number, or `-n 10`)
* `tail` (`-10`, or any other number, or `-n 10`)
* `sort` (`-r` reverse, `-u` unique, `-n` numeric); numeric vs alphabetic sorting
* `uniq` (only on sorted input)

### Practice

In `data-shell/north-pacific-gyre/2012-07-03` (experimental results; imagine hundreds of files):

* `wc -l *.txt`
* `wc -l *.txt | sort -n | head -n 5` (one is too short; bad data)
* `wc -l *.txt | sort -n | tail -n 5` (notice “Z”)
* `ls *Z.txt`
* `ls *AB[].txt`
* `ls *[^AB].txt`
