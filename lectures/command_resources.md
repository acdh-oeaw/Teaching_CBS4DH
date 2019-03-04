# Command line quick reference

## Getting started

The shell is a window on your desktop where you type commands and then run them by pressing the Enter (or Return) key. Although it’s sometimes called “the Unix shell”, Windows, Mac, and Linux all come with command line interfaces that support many of the same commands:

* For Mac OS X: the **Terminal.app** that you will find in the Applications → Utilities folder. (Many Mac users prefer the third-party <https://www.iterm2.com/>.)
* For Windows: Although **cmd.exe** is the traditional Windows shell, and you may even have used it previously, we recommend **bash**.  When you download Git, you'll also download Git Bash, the command line interface we recommend for this institute.
* For Ubuntu Desktop (Unity): you can type Ctrl-Alt-T or you can type **Terminal** (without the quotation marks) into the Search box.

When it’s your turn to type, the shell displays a _prompt_, which may look something like:

* On Mac: `Taras-Mac:~ tara$`
* On Windows cmd.exe: `PS C:\Users\Tara L Andrews>`
* On Windows Git Bash: `taraandrews@yourpc MINGW64~$`
* On Linux: `tla@ubuntu:~$`
	
The text of the prompt is configurable, and by default it adapts to the machine and user, so yours will look different from ours, but unless you’ve specified otherwise, it will end with either a dollar sign (`$`) or a right angle bracket (`>`).

## Tutorial

* For a solid beginner-level introduction, we recommend Software Carpentry’s [Unix shell](http://swcarpentry.github.io/shell-novice/).
* For a more comprehesive introduction, also suitable for beginners, we recommend William Shotts’s [The Linux Command Line](http://linuxcommand.org/tlcl.php). See also the same author’s:
	* [Learning the shell](http://linuxcommand.org/lc3_learning_the_shell.php)
	* [Writing shell scripts](http://linuxcommand.org/lc3_writing_shell_scripts.php)
	* [Resources](http://linuxcommand.org/lc3_resources.php) portal

## Reference

We provide brief summaries of the commands we use most often below, but for comprehensive reference, we recommend the operating-system-specific command-line references at <https://ss64.com>. 

## Directory and file names

Although applications, including the shell, will let you create filenames that are difficult to work with, for your own sanity:

* Don’t include anything except letters, digits, periods, hyphens, and underscores in your directory and file names. Space characters are especially problematic.
* Filenames are case-sensitive, but different operating systems may understand this differently (!). Be diligent about using upper and lower case systematically.
* Use traditional filename extensions, spelled as a period followed by a few specific characters, consistently. The abbreviations are self-explanatory, although not always easy to guess if you don’t already know them, e.g., **py** (Python), **txt** (text), **xml** (XML). 

## Completion and recall

The shell can complete command and file names for you without requiring you to type them in full, and it can also rerun commands without retyping.

* **command completion**: Type a few letters and hit the tab key. If there’s a single completion, it will appear; if there are many, you’ll be asked to choose; if there are very many, you’ll be asked to confirm that you want to see the entire list.
* **filename completion**: Type a command, a space, and then a few letters of a filename and hit the tab key. This works the same way as command completion, except that it’s for filenames instead of commands.
* **history recall**: You can cycle backwards through the history of commands you’ve executed with the up-arrow key. If you want only commands that include a particular substring, type `Ctrl-r`, type a few characters, and then type `Ctrl-r` repeatedly to cycle backwards through only commands that include those characters. Hit the Enter or Return key to select the command being displayed.

You can edit a command you’ve recalled from the history by moving back with the left-arrow key, and you can jump to the beginning or end with `Ctrl-a` and `Ctrl-e`. In MacOS you can depress the Option key and click in the recalled line to move the cursor there directly.

## Wildcards

The asterisk means “zero or more characters” and the question mark means “exactly one character”. (These are confusingly similar to but different from their regex meanings.) E.g., `ls *.txt` lists all files in the current directory that end in “.txt”.

## Shell commands by category

These lists are only brief reminders of the commands we use most often; they’ll help you find the command you need to perform a task, but they won’t tell you how it works. To get more information about a command, type `man command-name` (replacing “command-name” with the name of the command you are looking up). If your shell does not support `man` (Windows users), the contents of the man pages are easily found on line (e.g., at <https://linux.die.net/man/>).

### Get oriented

Command | Mnemonic | What it does
---- | ---- | ----
`cd` | **c**hange **d**irectory | by itself takes you to your home directory,<br/>otherwise specifies a destination
`clear` | [none] | clears the screen (or `Ctrl+l`)
`pwd`  | **p**rint **w**orking **d**irectory | displays your current location in the filesystem
`whoami` | [none] | displays your userid

### Explore your files

Command | Mnemonic | Example | What it does
---- | ---- | ---- | ----
`grep` | **g**lobal **r**egular **e**xpression **p**rint | `grep stuff *` | finds lines in files that contain “stuff”
`less` | [none] | `less filename.txt` | pages through “filename.txt”;<br/>use the space bar to page forward, type `q` to quit
`ls` | **l**i**s**t | `ls *.txt` | lists the files that match the pattern (or, with no argument, all files)

### Manipulate your files

Command | Mnemonic | Example | What it does
---- | ---- | ---- | ----
`cp` | **c**o**p**y | `cp oldfile.txt newfile.txt` | copies “oldfile.txt” as “newfile.txt”
`mv` | **m**o**v**e | `mv oldfile.txt newfile.txt` | _renames_ “oldfile.txt” as “newfile.txt”
`mv` | **m**o**v**e | `mv *.txt archive` | moves all text files into subdirectory called “archive”
`rm` | **r**e**m**ove | `rm unwanted-file.txt` | deletes “unwanted-file.txt”

There is no undelete, but you can retrieve the last committed version from GitHub.

### Manipulate your directories

Command | Mnemonic | Example | What it does
---- | ---- | ---- | ----
`mkdir` | **m**a**k**e **dir**ectory | `mkdir new-directory` | creates a directory called “new-directory”
`rmdir` | **r**e**m**ove **dir**ectory | `rmdir unwanted-directory` | deletes the directory called “new-directory”

### Edit your files

Text editors commonly invoked from the command line include **nano**, **vim**, and **emacs**. **nano** is the easiest for new users (it displays prompts for common commands); most experienced users prefer the other two. To edit a file called “filename.txt” with vim, type `vim filename.txt`.

### Create and unpack zip archive files

Sets of files are often distributed as a single **zip archive** file.

Command | Example | What it does
---- | ---- | ----
`zip` | `zip archive.zip *.txt` | creates “archive.zip” and includes all text files in it
`unzip` | `unzip archive.zip` | disgorges all files in “archive.zip”

## Redirection and piping

In the table below, `grep stuff *` displays all lines that contain the string “stuff” in all files in the directory. `wc -l` displays the number of lines in a file.

Symbol | What it means | Example | What it does
---- | ---- | ---- | ----
`<` | take input from file | `wc -l < filename.txt` | displays the number of lines in “filename.txt”. Note that the output is different from `wc -l filename.txt`.
`>` | write output to file | `grep stuff * > outfile.txt` | saves the results to “outfile.txt” instead of displaying it on the screen
`2>` | write errors and warnings elsewhere | `grep stuff * 2> /dev/null` | suppress error messages and warnings, which might otherwise clutter your screen
`|` | the output of the first command is the input to the second  | `history | grep stuff` | outputs the command history not directly to the screen, but into a filter to display only commands that include the string “stuff”
