# Command line 1

> [!NOTE]
> * **References:** Much of the content of these sessions is summarized at our [Command line quick reference](command_resources.md) page.
> * **Credit:** Our materials are based on the Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/) course
> * **For the exercises:** Download the [repository files](https://github.com/acdh-oeaw/Teaching_CBS4DH/archive/refs/heads/2024S.zip)

We will work with the same [setup as the Software Carpentry lessons](https://swcarpentry.github.io/shell-novice/index.html).

## What is the *shell*? How do we use it?

* The *shell* is a program that runs other programs. <!-- The shell is still a program, which takes input and gives output. The input is a command, though, so it seems as though we’re doing something different. In reality, using command line is no different than using any other program.-->
* There are shells that use a GUI (graphical user interface), for example the [Windows Shell](https://docs.microsoft.com/en-us/windows/win32/shell/shell-entry), and shells that use a CLI (command-line interface), like [cmd](https://en.wikipedia.org/wiki/Cmd.exe) in Windows.
* The command-line-based window that runs a shell is called a *console* or a *terminal*.
* The Unix philosophy is that you can _pipe_ (chain) together small commands, each of which does one thing well, to do something complex. You can’t do this in a GUI.
* bash is the a very popular shell on [Unix-like operating systems](https://en.wikipedia.org/wiki/Unix-like), like Linux and macOS, but we can also install it on Windows.
* **bash** = ‘Bourne again shell’ (the original Bourne shell is sh; others include csh, ksh, tcsh, zsh).
* Learn the shell on a need-to-know basis. <!--There are commands you’ll use every day, some you’ll use for special purposes (and you’ll look up how they work when you need them), and some that you’ll never need.-->

### Advantages of using a CLI-based shell

* There are a lot of tools available.
* Those tools can be combined and thus provide a lot flexibility.
* It has a very high action-to-keystroke ratio.
* You can automate most of the boring stuff
* It is the main way of interacting with remote machines.

---

<details>
<summary><h3>Note for MacOS users</h3></summary>

> The standard shell on macOS, starting with macOS Catalina (10.15), is **zsh** (Z shell). There are some differences compared to bash (some of them
> [listed here](https://apple.stackexchange.com/a/361957)), but none that affect us during these lessons. You can still use bash by simply typing `bash`
> in the command line, or you can change the default shell by following [these instructions](https://support.apple.com/en-au/HT208050).
> Not sure which shell you're using? Type `echo $SHELL` at the command prompt.

</details>

<details>
<summary><h3>Note for Windows users</h3></summary>

> * When you downloaded Git, you also downloaded **Git bash** ([screenshot](images/command_1_gitbash.png)), the command line interface.
> * You may have been using `cmd.exe` ([screenshot](images/getting_to_know_cmd.png)) or Windows PowerShell ([screenshot](images/command_1_powershell.png)), both native to Windows. Though each has its own benefits and drawbacks, for the purposes of this course we will have all Windows users learn and use Git `bash`.
> 
> **Git bash vs. Windows command lines vs. regular bash**
> 
> * The Git `bash` adopts a Unix-like convention for paths: it uses `/` as the path separator, and absolute paths start with `/c/`, `/d/`, etc. (So, `/c/Users/username` instead of `C:\Users\username` in `cmd`.)
> * Git `bash` comes with a lot of commands, but some others that are usually available on Unix systems are missing, e.g., `nano`, `sudo`, and `man`.
> 	* `nano` is a text editor. You can substitute Notepad, which you can run using `notepad myfile.txt`.
> 	* `sudo` allows you to change features that require elevated administrative permissions. (If you ever get to try it, use it with caution.)
> 	* `man` displays a command manual. You can look up commands on line at <https://manpages.ubuntu.com>.
> * Git `bash` requires the use of `winpty` when running certain Windows applications that are meant to run within `cmd`. For example, to run an interactive Python session, you should execute `winpty python`.

</details>

---

> [!TIP]
> Launching the shell
> 
> * For macOS: the **Terminal.app** that you will find in the Applications → Utilities folder
> * For Ubuntu Desktop: you can hit `Ctrl-Alt-T` or you can type `Terminal` into the Search box. You can also right-click on an empty part of a window in the file explorer (_Nautilus_) and select "Open in Terminal".
> * For Windows go to the start menu and run **Git bash**

## Fist steps

The corresponding software carpentry lesson is [1. Introducing the Shell](https://swcarpentry.github.io/shell-novice/01-intro.html).

* The prompt: 
    * bash on Windows: `username@yourpc MINGW64 ~ $`
	* zsh on macOS: `username@yourpc ~ %`
	* bash on Ubuntu Desktop: `username@yourpc:~$`
* A first simple command: `whoami`
* If you write someting it does not know, it tells you so
* The shell is case sensitive
* Check what is your current working directory: `pwd`
* Go to your home directory: `cd ~` or `cd`
* Go to Desktop: `cd Desktop`
* How do we check what is in this directory? `ls`
* Options: `-r`, `--reverse`, `-t`, `-l`, `-h`
* Distinguish between files, directories, etc.: `ls -F` (option `-F` will add the following characters after pathnames: `/` for directories, `*` for executable files, `@` symbolic links etc.)

### The basic structure of a command

Command + options (with `-`) + arguments

For example: `ls -F exercise-data`

* Options are also called flags or switches
* In some cases, options can be express in a longer form, with a double hyphen (`--`)
* You can also combine options together (e.g., `ls -l -h` or `ls -lh`)
* Some options require an argument immediately after them
* In general, options are case-sensitive (`ls -s` is different from `ls -S`)

### Need help with a command?

For example `ls`:

* `ls --help` (only on Linux)
* `man ls`
* `whatis ls` (short description)

Resources on the web:
* Command line reference: <https://ss64.com/bash/>
* Or just google the command (followed by `unix`, `terminal`, or the like)

<details>
<summary>How to navigate in `man` pages</summary>

| Key | Action |
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

</details>

## Files and directories
The corresponding Software Carpentry lessons are [2. Navigating Files and Directories](https://swcarpentry.github.io/shell-novice/02-filedir.html) and [3. Working with Files and Directories](http://swcarpentry.github.io/shell-novice/03-create.html).

![Directory tree sample](images/directory_tree_sample.png)

### Absolute vs relative paths

* **Absolute path**: `/Users/mamo/Desktop/shell-lesson-data` (starts with a slash, which means "root directory", i.e. uppermost directory of the filesystem)
	* This is the one you get when you type `pwd`
* **Relative path**
	* `shell-lesson-data` (starting from `/Users/mamo/Desktop/`)
	* `Desktop/shell-lesson-data` (starting from `Users/mamo/Desktop`)
	* `..` (starting from `/Users/mamo/Desktop/shell-lesson-data/exercise-data`)
	* `../shell-lesson-data` (if we imagine to start from another directory contained in `/Users/mamo/Desktop/`)

### Completion and other tips:

* Command and filename completion with the `Tab` key
    * `tab`: 1) Filename completion, 2) Command completion
* Command history with the arrow keys
* Some useful shortcuts:
	* Delete the whole line: `Ctrl+u`
	* Move to beginning of line: `Ctrl+a`
	* Move to end of line: `Ctrl+e`
    * `Option + click` (Mac only)
* If the screen has become a bit cluttered: `clear` (or `Ctrl+l`)
* `history` (up and down arrows)
* `!580` (execute the 580th command from the history)
* `!!` (execute the previous command)
* `!$`: last word of last command
* `Ctrl+r`: initiate (or continue) history search

### Navigating files and directories

`cd` = change directory
* `cd ~` (go to home directory)
* `cd ..` (go to parent directory)
* `cd ../..` (go up two directories)
* `cd -` (go back to previous directory; like "Back" button in file explorer)
* `cd /` (go to root directory; in Git bash the installation folder will act as root)
* `cd; cd Desktop` (`cd` will change to the home directory)
* `cd data-shell/data/s...` (tab completion)
* `cd /Users/djb/Desktop/shell-lesson-data/exercise-data` (absolute path; it has a leading slash = root directory)

`ls` = listing
* `ls -a`: include hidden files (filenames starting with `.`)
* `ls -l`: show enhanced file information, including date and time stamps, owner and group, permissions
* `ls -t`: list in timestamp order
* `ls -r`: list in reverse order (try to combine it with `-t`)
* `ls -G`: colored output
* `ls -lh`: human readable file size
* `ls -F`: decorate filenames according to filetype
* `ls -1`: single-column
* `ls -d`: don’t recurse into directories
* `ls -d */`: list only directories
* `ls -R`: recursive listing inside directories

### Working with files & directories

* `mkdir`: make directory
	* What's a good name for a directory? And more in general: what's a good filename?
		* Avoid spaces (otherwise you'll be forced to use quotes `"..."` for arguments or backslashes `\`)
		* Avoid beginning hyphens, otherwise file and directory names might be mistaken for options/flags
	* What's a good directory structure for a project?
* `mkdir -p a/b/c`: create intermediate directories
* `rmdir`: remove empty directory
* `rm -rf:` remove directory and its contents recursively (careful!)
* `rm -ri`: remove directory asking for confirmation (for single files)
* `cp`: copy
	* `cp oldfile newfile` copy a file
	* `cp oldfile1 oldfile2 newdirectory`: copy multiple files
	* `cp -r olddirectory newdirectory` copy directory recursively
* `mv`: rename / move
	* Rename a file or directory
	* Move a file or directory to a different location (optionally rename)
	* Be careful! It will automatically overwrite files with the same name, unless you add `-i` to make it interactive (will ask for permission)
* An easy way to create an empty file: `touch test.txt`
* `rm`: delete (careful: deletion is forever!)
* `rm -i`: delete after asking permission

## Summary

* The file system is responsible for managing information on the disk.
* Information is stored in files, which are stored in directories (folders).
* Directories can also store other directories, which forms a directory tree.
* `cd path` changes the current working directory.
* `ls path` prints a listing of a specific file or directory; `ls` on its own lists the current working directory.
* `pwd` prints the user’s current working directory.
* `whoami` shows the user’s current identity.
* `/` on its own is the root directory of the whole file system.
* A relative path specifies a location starting from the current location.
* An absolute path specifies a location from the root of the file system.
* Directory names in a path are separated with `/` on Unix (including macOS)
* `..` means ‘the parent directory = the directory above the current one’
* `.` on its own means ‘the current directory’. Why would we need this?
* Most filenames have conventional extensions: `.txt`, `.xml`, etc.
* Most commands take options (flags) which begin with a `-`.

### Some useful tips (also for later)

* If you type a command and find yourself on a blank line with nothing happening: you typed an incomplete command, and should **abort** it with `Ctrl+c`.
* When you *see* `$` (shell prompt): the shell is waiting for you to provide input.
* When you *type* `$`: you’re beginning to type a variable name.
* When you *see* `>` (shell continuation prompt): you’ve started entering multiple-line input, and the shell is waiting for the next line. Abort if this not what you meant to do.
	* To enter a multiple-line command, use the backslash `\` at the end of every line except the last one.
* When you *type* `>`: you’re writing output into a file, instead of displaying it on the screen. More on this in Command Line 2.
