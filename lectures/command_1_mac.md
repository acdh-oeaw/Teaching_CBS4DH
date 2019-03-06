# Command line 1 for Mac
____

## General

* **References:** Much of the content of these sessions is summarized at our [Command line quick reference](command_resources.md) page.
* **Credit:** Our materials are based on the Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/) course
* **Etherpad:** We’ll create an [Etherpad](https://etherpad.net) where participants who wish to do so can take notes collaboratively. For a quick overview of Etherpad functionality see <http://write.flossmanuals.net/etherpad/introduction/>.
* **Something to play with:** Follow the instructions at <http://swcarpentry.github.io/shell-novice/setup.html> to copy some practice files.

## Why and how do we use the shell?

* The shell is a program that runs other programs.
* We use the shell to interact with the computer on the command line (CLI ~ GUI).
* The Unix philosophy is that you can _pipe_ (chain) together small commands, each of which does one thing well, to do something complex. You can’t do this in a GUI.
* bash = ‘Bourne again shell’ (the original Bourne shell is sh; others include csh, ksh, tcsh, zsh).
* Learn the shell on a need-to-know basis.

## Launching the shell

* For Mac OS X: the **Terminal.app** that you will find in the Applications → Utilities folder. (Many Mac users prefer the free third-party <https://www.iterm2.com/>.)
* For Windows: Although **cmd.exe** is the traditional Windows shell, and you may even have used it previously, we recommend **bash**. When you download Git, you'll also download **Git bash**, the command line interface we use and recommend. (We do not recommend the Windows 10 “Ubuntu in Windows”.)
* For Ubuntu Desktop (Unity): you can hit Ctrl-Alt-T or you can type `Terminal` into the Search box.

## Looking around


Change to your home directory, look at it with pwd.

* `cd ~`
* `cd ..`
* `cd -`
* `cd; cd Desktop`
* `cd data-shell/data/s...` (tab completion)
* `cd /Users/djb/Desktop/data-shell/data` (absolute path)

Change to Desktop/data-shell

* `ls -F`
* `ls -j` (unsuppored)
* `man ls`
* `ls data`

Dragging a file from your filesystem Finder/Explorer window to the terminal

## `ls` switches

* `ls -a`: include hidden files (filenames starting with `.`)
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
* Directory names in a path are separated with ‘/’ on Unix (including Mac OS)
* `..` means ‘the parent directory = the directory above the current one’
* `.` on its own means ‘the current directory’. Why would we need this?
* Most filenames have conventional extensions: `.txt`, `.xml`, etc.
* Most commands take options (flags) which begin with a `-`.
