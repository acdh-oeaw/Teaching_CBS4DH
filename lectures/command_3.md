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
 * a good example for `<`: use it to e.g. search in a file with `grep` and then write the search results into another file; see [answer on StackExchange](https://unix.stackexchange.com/questions/283374/what-does-the-left-chevron-triangle-bracket-do)  
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

### Some new commands
* `wget` and `curl`: get stuff from web, the second works on MacOS; to use it with git bash on Windows you'll have to [install it](https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058)

* `ln`: symbolic links (or just symlinks); much like a desktop shortcut on Windows
```
ln -s /path/to/file /path/to/symlink
ls -la
```

* `chmod`: (change mode) used to change access permissions; permissions are split into read, write, and execute and can be assigned for the owner, a group, and all others. See more on [Wikipedia](https://en.wikipedia.org/wiki/Chmod) or in [this tutorial](https://catcode.com/teachmod/). A special permission also exists for reading directories
* `chown`: (change owner) used to change the owner of a file or directory `chown newuser /path/to/file`
* `sudo`: (super do) used to execute a command as root user (i. e. admin), e. g. `sudo chmod` or to get a [sandwich made for you](https://xkcd.com/149/)

* `which`: helps to find where a program is actually stored on your system, e. g. for `ls` try `which ls`
* `workon`: used in combination with [Virtual Environments](https://en.wikipedia.org/wiki/Virtual_environment_software). Helps to keep a clean system and not clutter it with multiple versions of e. g. [Python](https://www.python.org/)

* `grep`: used to search for things; this already brings us to: [regular expressions 1](lectures/regex_1.md)

### Finding commands and files
* `help`: list all shell built-ins
* `which`: search `$PATH`, one result (the one that will be executed if you type the command), not for shell built-ins or aliases
* `whereis`: search standard locations, multiple results, not for shell built-ins or aliases
* `find / -name java -print 2> /dev/null`: find all files named `java` starting at the file system root, not for shell built-ins or aliases
* `type`: includes shell built-ins and aliases!



### Fun commands
* See [this article](https://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/)
