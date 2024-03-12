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
    + By default, the text editor is used for writing commit messages, but you can also use `git commit -m "<message>"`. Set your preferred editor of course.
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
