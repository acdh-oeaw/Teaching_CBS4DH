# Git 2

## Forking repositories

![Git forking repositories](images/git_forking.gif)

* Log in to Github
* On Github fork the NEH Institute Materials 2017 repository
* Clone you fork to your local machine.
In your Workspace directory in your home directory do:
`$ git clone https://github.com/acdh-oeaw/Teaching_CBS4DH.git`
* On your local machine add the original repository as a second remote repository called upstream

```bash
$ git remote -v
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)

$ git remote add upstream https://github.com/Pittsburgh-NEH-Institute/Institute-Materials-2017

$ git remote -v
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```

## Pull requests: making changes and submitting a pull request

* Create changes
* Track changes
* Commit changes
* Push commits 
* Create pull request on github 

## How to work with branches

What you think Git is:

![Git branch simplified](images/git_branch_simplified.gif)

What Git really is:

![Git branch real life](images/git_branch_real_life.gif)

Command | Description
--------|------------
`git branch -a`|   Show all the branches in your local repository
`git branch -a -v` | Show all the branches and their last commits
`git branch <name>`   |   Create a new branch based on the last of commit of the current branch
`git checkout <name>` |   Switch from one branch to another
`git checkout -b <name>` | Create a new branch and switch to it
`git stash`    |   Temporarily move changed files out of the way
`git stash apply` | Reapply changes that were stashed previously

## How a merge works

![Git syncing repositories](images/git_syncing.gif)

Command | Description
--------|------------
`git merge <branch>` | Merge commits from one branch into the other.
`git merge --abort` | Abort a merge 

* Make sure you do not have uncommitted changes.
* If so, stash them or commit them
* Check that you are in the right branch with `$ git status`.
* If not do git checkout
* Do `$ git merge <branch>`
* `$ git push`

## How to resolve a merge conflict

## Notes

* A fork is a remote repository on GitHub. 
* Forking has to do with permissions.
* Explain difference between a fork and a branch
* A fork is not a branch, a fork is a repository, a branch is a series of commits.
* Explain git status "ahead / behind origin/master" line
* Explain difference between a pull and a fetch
* The Git `pull` command is not the same as a *pull request* on GitHub.
* Git does not track empty directories or empty files.

## Terms learned part 2

* Fork (GitHub term)
* Pull request (GitHub term)
* Branch
* Merge, merge commit, merge conflict

## Git Terms Cheat Sheet

* https://www.keycdn.com/blog/git-cheat-sheet
