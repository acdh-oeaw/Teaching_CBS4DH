# Hands-on instructions

## 1. Configuring git and creating a new repository from the command line

+ Open a terminal (UNIX shell / bash is assumed).

+ Let's make sure that the `git` command is available: `$ git --version`

+ One-time Git setup (set author info, text editor, line endings):
    + `$ git config --global user.name "<your name>"`
    + `$ git config --global user.email "<username>@users.noreply.github.com"`
    + `$ git config --global core.editor "nano -w"`
    + `$ git config --global core.autocrlf input` for Mac/Linux, `true` for Windows
    + Check settings: `$ git config --global --list` (or `$ cat ~/.gitconfig`)

+ __Notes__:
    + The email you set here will potentially be visible to everyone on the internet, which is why you might want to use the scheme above.
    + By default, the text editor is used for writing commit messages, but you can also use `git commit -m '<message>'`. Set your preferred editor of course.
    + These (and all other config settings) can also be set on a per-repository level by omitting the `--global` flag. Per-repository settings are stored in the `.git/config` file.
    + For more information on line endings (and Git config in general), see <https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_autocrlf>.

+ Let's create a brand-new repository from scratch:
    + Using the `cd` command, navigate to the parent directory of where you want to create your new repository (e.g. `~/Documents` if you want to create it under `~/Documents/my_first_repo`): `$ cd <parent directory>`
    + Create a new folder there and `cd` into it: `$ mkdir my_first_repo`, `$ cd my_first_repo`
    + Initialize a new repository: `$ git init`

+ Take a quick look at the newly created `.git` directory:
    + List contents of current directory (`-a` option shows hidden items): `$ ls -a`
    + List contents of `.git`: `$ ls .git`
    + View `.git/config` file: `$ cat .git/config`


## 2. Working with files and commits from the command line

+ We continue with the fresh repository created in the first hands-on session.

+ Create and save a new text file with some text (traditionally "hello world") in it: `$ echo 'hello world' > hello.txt` (or use your favorite text editor)

+ `$ git status` should list the newly created file under "Untracked files".

+ Mark the new file for inclusion into the next commit: `$ git add hello.txt` (you may get a warning about line endings, which you can ignore in this case)

+ `$ git status` should now list the new file under "Changes to be committed".

+ Big moment: `$ git commit` will prompt you to add a commit message ("add hello.txt") in the configured text editor; save and exit to complete the process (or use `$ git commit -m 'add hello.txt'` to skip the editor).

+ Take a look at the commit history with `$ git log`.

+ __Note:__ `git log` and other Git commands may use a pager (`less` by default) for output that exceeds the height of your terminal window; use arrow keys to scroll and `q` to exit. 

+ Add a second line of text (use your imagination) to `hello.txt` (append with `$ echo 'imagination' >> hello.txt` or use your editor).

+ Again take a look at the output of `$ git status` (which should be telling you that your file has been modified); then use `$ git diff` to view the differences between the last commit and the working tree.

+ Actually, let's undo that last change and revert to the last committed version: `$ git checkout hello.txt` (__Note:__ this will overwrite the file with the version from the repository, so use with caution!)

+ Verify with `$ git status` (or `cat`, or `less`, or your editor).

+ Make another change (or re-apply the one we have just reverted) and commit it.

+ Use `$ git log --patch` (shorter version: `$ git log -p`) to view the commits with their respective diffs.

+ Be sure to also learn about removing / moving files: <https://www.git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_removing_files>
