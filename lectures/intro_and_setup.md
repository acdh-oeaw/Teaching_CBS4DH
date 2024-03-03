# Introduction to the course and initial setup

Welcome to the Computational Background Skills class! We will use these markdown documents to give you links and other things that it would be difficult to copy by hand. You, the students, may use it to come back to what we learned and review if needed.

## Agenda (90m session)
* [Introducing the lecturers (10m)](#introducing-the-lecturers)
* [Aims and contents of the course (10m)](#aims-and-contents-of-the-course)
* [Required Setup and Tools (30m)](#required-setup-and-tools)
* [Getting to know your OS (40m)](#getting-to-know-your-OS)

## Introducing the lecturers

Team from the Austrian Centre for Digital Humanities and Cultural Heritage of the Austrian Academy of Sciences ([ACDH-CH OEAW](https://www.oeaw.ac.at/acdh/))

* Massimiliano Carloni
* Matej Ďurčo
* Dimitra Grigoriou 
* Fritz Haak 
* Nina Rastinger 
* Birger Schacht 
* Katharina Wünsche 

If you have any questions or need any help regarding the lecture, 
please reach out to the lecturers, via <acdh-ch-training@oeaw.ac.at>.


## Aims and contents of the course
This course is intended to provide basic training in skills needed in further courses and in the Digital Humanities in general.

Main topics covered:

- Use of command line
- Introduction to regular expressions
- Practical use of Git
- Some notes on file formats
- Minimal introduction to web technologies
- Where to go for help and how to understand the answers
- Broader DH context

The whole course is aimed to gain practical skills, accordingly the contents of each lesson is accompanied with practical exercises, which we will go through during the class.

Whole course contents is available on [github](https://github.com/acdh-oeaw/Teaching_CBS4DH)

### Grading & Attendance
Attendance in every lecture is required due to the PI type of block-course.

Regular attendance, following the practical exercise tasks during the lecture and active participation will lead to a final grade.


## Required Setup and Tools
- Create a personal GitHub account: https://github.com/join
- Download and install Atom code editor: https://atom.io/
- (Only Windows users) Download and install Gitbash: https://gitforwindows.org/

## Getting to know your OS
* [macOS](#mac)
* [Windows](#windows)

Operating system is system software which manages computer hardware and software resources. It provides common services for computer programs and interfaces for humans to interact with.

Most common current OS's are:
* Windows (Microsoft)
* macOS (Apple)
* Linux (Linux community, open-source)
* Mobile: Android (Google, based on Linux kernel)
* Mobile: iOS (Apple)

### Introductory questions

* What is the filesystem and how is it structured?
* What are files?
* What are directories/folders? <!--Thinking about why we call them folders: a folder and a piece of paper are the same, and can do some of the same things. A folder can also hold pieces of paper.-->
* What are programs? <!--Programs are files that can do something, but are still files nonetheless. Take a piece of paper out of your folder, fold it into an airplane, and throw it. It's still a piece of paper you can read from and write on, but it can fly.-->
* How to navigate in the filesystem?
* Why are some files hidden? <!--If you change something, however small, in some of these files, you can break your computer. Be careful!-->

### Mac

* `/` as the center of the filesystem universe (exception: Windows)
* Finding the filesystem location of a file from the macOS Finder:
	* Drag the filename from a Finder window and drop it into a terminal window to paste the path to the file
	* View the filename by selecting the file and `Cmd+i` (get info)
	* Right-click on a file and hold `Option`: the contextual menu will show the command `Copy {file_name} as Pathname`, which you can paste somewhere
	* Select "View > Show Path Bar" from the Finder menu bar
* Configuring your machine to show hidden files
	* macOS Sierra (10.12) and later versions: Open Finder and hit `Cmd+Shift+.` Do the same thing to turn off hidden files.
	* macOS El Capitan (10.11) and earlier versions: Open the command line and execute `defaults write com.apple.finder AppleShowAllFiles YES` (or `NO`); restart the Finder whenever you change this (right-click on the icon in the Dock and select "Relaunch").
	* Actually, not all hidden files show up. Starting with macOS 10.12 16A238m, `.DS_Store` (_Desktop Services Store_) files are not shown. They contain information about their containing folders, such as the position of icons or the background image, and comments to the files. We will see how to show them with the command line interface (next lesson).

* Configuring your machine to show filename extensions
	* Open Finder and select Preferences, click “Advanced”, and check the box next to “Show all filename extensions”.
*  Launching a terminal
	* The **Terminal.app** that you will find in the Applications → Utilities folder. (Many Mac users prefer the free third-party <https://www.iterm2.com/>.)
	* For Ubuntu Desktop (Unity): you can hit Ctrl-Alt-T or you can type `Terminal` into the Search box.
	* You can also open the current directory location in the Terminal from the file explorer (Nautilus): just right-click on an empty space of the window and select "Open in Terminal".
	* Otherwise, you can click on the name of the active directory in the breadcrumb and click on "Open in Terminal".

### Windows

* Configuring your machine to show filename extensions  
  <[screenshot](images/getting_to_know_winconfig.png)> In any File Explorer window, click on “View” tab, and then “Options” on the right to open the “Folder Options” window.
	* In the “View” tab, uncheck “Hide extensions for known file types” box.
* Configuring your machine to show hidden files, and more  
  <[screenshot](images/getting_to_know_winconfig.png)> In the same “Folder Options” window as before,
	* Check “Show hidden files, folders, and drives”.
		* NOTE: Protected operating system files will still stay hidden.  
	* Also check “Display the full path in the title bar” (not essential, but recommended).
* Launching a terminal
  *  The Command Prompt **cmd.exe** <[screenshot](images/getting_to_know_cmd.png)> is the native Windows console, which grew out of DOS.  We will be using it in this session.
	* How to launch: from the Start menu type in “cmd”.
	* NOTE: For later sessions and the remainder of this course we will be using the **bash shell** instead, which you downloaded and installed as part of Git. This is the command line interface we use and recommend.


### More questions

* **Case sensitive** vs **case preserving**: Linux is **case sensitive**, meaning files with the same name but different capitalization are different files (e.g., `finalpaper.txt` is different than `FinalPaper.txt`). macOS and Windows are **case preserving**, but not case sensitive. <!-- (This preference can be changed when configuring the filesystem, but certain programs will not run in a case sensitive environment, so it’s best to leave it alone). A case preserving file system will spell the filename as you type it, but if you create a different file with a name that differs only in capitalization, it will overwrite the first one. We recommend not creating filenames that differ only in capitalization even on Linux; not only is it potentially confusing, but you may be collaborating on a project with someone not on Linux. -->
* **Spaces** in a file and directory names. Why could these be problematic?
* User-specific directories: where are your home directory, document folder, and desktop? What are their full file/directory paths?
* Non-English OS’s may have translation/localization applied, but only on the GUI side! Why is this?