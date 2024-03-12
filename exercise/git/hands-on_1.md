# Hands-on instructions

## 1. Configuring git and creating a new repository from the command line

+ Open a terminal (UNIX shell / bash is assumed).

+ Let's make sure that the `git` command is available: `$ git --version`

+ Git setup: set author name and email for your commits, set text editor:
    + `$ git config --global user.name "<your name>"`
    + `$ git config --global user.email "<username>@users.noreply.github.com"`
    + `$ git config --global core.editor "nano -w"`

+ __Note__:
    + The email you set here will potentially be visible to everyone on the internet, which is why you might want to use the scheme above.
    + By default, the text editor is used for writing commit messages, but you can also use `git commit -m "<message>"`. Set your preferred editor of course.
    + These (and all other config settings) can also be set on a per-repository level by omitting the `--global` flag. Per-repository settings are stored in the `.git/config` file.

+ Let's create a brand-new repository from scratch:
    + Using the `cd` command, navigate to the parent directory of where you want to create your new repository (e.g. `~/Documents` if you want to create it under `~/Documents/my_first_repo`): `$ cd <parent directory>`
    + Create a new folder there and `cd` into it: `$ mkdir my_first_repo`, `$ cd my_first_repo`
    + Initialize a new repository: `$ git init`

+ Take a quick look at the newly created `.git` directory:
    + List contents of current directory (`-a`) options shows hidden items): `$ ls -a`
    + List contents of `.git`: `$ ls .git`
    + View `.git/config` file (`q` to exit, you could also use `cat`): `$ less .git/config`
