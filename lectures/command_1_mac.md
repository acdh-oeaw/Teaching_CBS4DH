# Command line 1 for Mac
____

## General

* **References:** Much of the content of these sessions is summarized at our [Command line quick reference](command_resources.md) page.
* **Credit:** Our materials are based on the Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/) course
* **Something to play with:** Follow the instructions at <http://swcarpentry.github.io/shell-novice/setup.html> to copy some practice files.

## What is the *shell*? How do we use it?

* The *shell* is a program that runs other programs. <!-- The shell is still a program, which takes input and gives output. The input is a command, though, so it seems as though we’re doing something different. In reality, using command line is no different than using any other program.-->
* There are shells that use a GUI (graphical user interface), for example the [Windows Shell](https://docs.microsoft.com/en-us/windows/win32/shell/shell-entry), and shells that use a CLI (command-line interface), like [cmd](https://en.wikipedia.org/wiki/Cmd.exe) in Windows. <!-- What is important to know is that the shell is the outermost layer around the operating system, and there is no one-to-one correspondence between an OS and a shell, although some shells are typically made for a specific OS. In Windows, for example, there are two CLI-based shells that come preinstalled, i.e. cmd and PowerShell, and others can be installed afterwards. -->
* We will use a **Unix shell**, which we will run inside a window in the GUI of our OS. <!-- macOS and Linux are Unix-like OS's, and come with a Unix shell preinstalled; but we can install one in Windows too. -->
* The command-line-based window that runs a shell is called a *console* or a *terminal*.
* The Unix philosophy is that you can _pipe_ (chain) together small commands, each of which does one thing well, to do something complex. You can’t do this in a GUI.
* **bash** = ‘Bourne again shell’ (the original Bourne shell is sh; others include csh, ksh, tcsh, zsh). <!-- We use and recommend bash. There are many different shells, some of which you end up downloading with program packages like Python.-->
	* The standard shell on macOS, starting with macOS Catalina (10.15), is **zsh** (Z shell). There are some differences compared to bash (some of them listed [here](https://apple.stackexchange.com/a/361957)), but none that affect us during these lessons. You can still use bash by simply typing `bash` in the command line, or you can change the default shell by following the instructions at <https://support.apple.com/en-au/HT208050>.
* Learn the shell on a need-to-know basis. <!--There are commands you’ll use every day, some you’ll use for special purposes (and you’ll look up how they work when you need them), and some that you’ll never need.-->

## Advantages of using a CLI-based shell

* There are tools that are available only on the command line.
* It has a very high action-to-keystroke ratio.
* You can automate most of the boring stuff, without the risk of making mistakes.
* It is the main way of interacting with remote machines.

## Launching the shell

* For macOS: the **Terminal.app** that you will find in the Applications → Utilities folder. (Many Mac users prefer the free third-party <https://www.iterm2.com/>.)
* For Ubuntu Desktop: you can hit `Ctrl-Alt-T` or you can type `Terminal` into the Search box. You can also right-click on an empty part of a window in the file explorer (_Nautilus__) and select "Open in Terminal".

## Files and directories
* We will work with the Software Carpentry lessons:
  * [2. Navigating Files and Directories](http://swcarpentry.github.io/shell-novice/02-filedir/)
  * [3. Working with Files and Directories](http://swcarpentry.github.io/shell-novice/03-create/)

## Getting oriented

* The prompt
	* zsh on macOS: `username@yourpc ~ %`
	* bash on Ubuntu Desktop: `username@yourpc:~$`
* A first simple command: `whoami`
* Check what is your current working directory: `pwd`
	* Two different meanings for `/`: path separator or root directory (when at the beginning of absolute path)
* Go to your home directory: `cd ~` or `cd`
* How do we check what is in this directory? `ls`
* Go to Desktop: `cd Desktop`
* Distinguish between files, directories, etc.: `ls -F` (option `-F` will add the following characters after pathnames: `/` for directories, `*` for executable files, `@` symbolic links etc.)
	* macOS applications (with `.app` extension) are actually directories ("application bundles"), so they will be displayed with a `/`
* What happens if we write an invalid command? Or we add an invalid option?
	* Let's try with `ks` and `ls -j`

## The basic structure of a command

Command + options (with `-`) + arguments
For example: `ls -F exercise-data`
* Options are also called flags or switches
* In some cases, options can be express in a longer form, with a double hyphen (`--`)
* You can also combine options together (e.g., `ls -l -h` or `ls -lh`)
* Some options require an argument immediately after them
* In general, options are case-sensitive (`ls -s` is different from `ls -S`)

## Navigating files and directories

`cd` = change directory
* `cd ~` (go to home directory)
* `cd ..` (go to parent directory)
* `cd ../..` (go up two directories)
* `cd -` (go back to previous directory; like "Back" button in file explorer)
* `cd; cd Desktop` (`cd` will change to the home directory)
* `cd data-shell/data/s...` (tab completion)
* `cd /Users/djb/Desktop/data-shell/data` (absolute path; it has a leading slash = root directory)

`ls` = listing
* `ls -a`: include hidden files (filenames starting with `.`, `.DS_store` files included)
* `ls -l`: show enhanced file information, including date and time stamps, owner and group, permissions
* `ls -t`: list in timestamp order
* `ls -G`: colored output
* `ls -lh`: human readable file size
* `ls -F`: decorate filenames according to filetype
* `ls -d`: don’t recurse into directories
* `ls -1`: single-column
* `ls -d */`: list only directories

## History and completion

* Command and filename completion with the `Tab` key
* Command history with the arrow keys
* Some useful shortcuts:
	* Delete the whole line: `Ctrl+u`
	* Move to beginning of line: `Ctrl+a`
	* Move to end of line: `Ctrl+e`

## Need help with a command?

For example `ls`:

* `man ls`
* `ls --help` (only on Linux)
* `whatis ls` (short description)

Resources on the web:
* Command line reference: <https://ss64.com/bash/>
* Or just google the command (followed by `unix`, `terminal`, or the like)

How to navigate in `man` pages:

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
| q | exit |

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

## Some useful tips (also for later)

* If you type a command and find yourself on a blank line with nothing happening: you typed an incomplete command, and should **abort** it with `Ctrl+c`.
* When you *see* `$` (shell prompt): the shell is waiting for you to provide input.
* When you *type* `$`: you’re beginning to type a variable name.
* When you *see* `>` (shell continuation prompt): you’ve started entering multiple-line input, and the shell is waiting for the next line. Abort if this not what you meant to do.
	* To enter a multiple-line command, use the backslash `\` at the end of every line except the last one.
* When you *type* `>`: you’re writing output into a file, instead of displaying it on the screen. More on this in Command Line 2.

