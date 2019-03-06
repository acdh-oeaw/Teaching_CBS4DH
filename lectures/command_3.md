# Command line 3

## General

* **References:** Much of the content of these sessions is summarized at our [Command line quick reference](command_resources.md) page.
* **Credit:** Our materials are based on the Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/) course
* **Something to play with:** Follow the instructions at <http://swcarpentry.github.io/shell-novice/setup.html> to copy some practice files.

## Review day 1
* Lessons 1-4 from: http://swcarpentry.github.io/shell-novice/


### Text editors
* [Atom](https://atom.io/)
* nano
* [Notepad++](https://notepad-plus-plus.org/)
* [BBEdit](https://www.barebones.com/products/bbedit/)
* Emacs, Vim, Gedit
* [see comparison list on Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_text_editors)

### Command line

#### commands and flags:
* `ls` (`-l`, `-a`, `-G`, `-lh`, `-d`, `-d */`, `-1`, `-F`)
* `whoami`
* `pwd`, `cd`, and absolute and relative paths (`.  /  ..  ~`)
* `mkdir`, `rmdir`
* `mv`, `cp`, `rm` (`-r`)
* `touch`
* `clear`

#### Wildcards
* `*`
* `?`
* `[]`

#### more commands
* `>`, `>>`, `<`
* `less` (space, b, q)
* filter: `cat`, `wc` (`-l`, `-w`, `-c`), `sort` (`-n`), `head`, `tail`,  `uniq`
* `echo`
* `cut`
* pipeline with `|`

#### get help
* `man` and `--help`
* https://explainshell.com/
* google it

## More CLI

* Lessons 5-7 from: http://swcarpentry.github.io/shell-novice/ (lesson 6 only short)

### Special keys in the cli
* Control (+ x, l, r)
* Up and down arrow (full list `history`)
* Tab

### Some extra commands
* `wget`
* `chmod`
* symbolic links
* `grep` brings us to: regular expressions

### Finding commands and files
* `help`: list all shell built-ins
* `which`: search `$PATH`, one result (the one that will be executed if you type the command), not for shell built-ins or aliases
* `whereis`: search standard locations, multiple results, not for shell built-ins or aliases
* `find / -name java -print 2> /dev/null`: find all files named `java` starting at the file system root, not for shell built-ins or aliases
* `type`: includes shell built-ins and aliases!



### Fun commands
* See [this article](https://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/)
