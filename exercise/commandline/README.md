# lesson 1

- [ ] Using your Browser, download the repository content using the `.zip` link on github and extract the archive somewhere.

- [ ] Using the commandline, go to the extracted folder

- [ ] Go into the "exercise/commandline" folder

- [ ] Create a directory "comic"

- [ ] Move the `xkcd.com_tar.png` file from the `images` folder to the `comic` folder

- [ ] In the folder `data` are some `csv` files and one `jpg`. The `jpg` should be moved to the `images` folder. Try not to type the whole filename.

- [ ] Delete the image of Cory Doctorov in the images folder.

- [ ] Execute these commands or think through them:
- [ ] `mkdir backup; mkdir images/backup; touch backup/a; touch images/backup/b; cd images`
- [ ] What does `ls ../backup` show you?

- [ ] In the folder `data` are some empty `.csv` files with years in their filename - create the one thats missing.

- [ ] create a directory `data/a/1/b/2/c/3/d/4/e`

- [ ] Copy the comic folder to the `e` folder

- [ ] Rename the `xkcd.com_tar.png` file in `data/a/1/b/2/c/3/d/4/e/comic` to `mycomic.png` without entering the directory

- [ ] Remove the `data/a` directory and its content.

- [ ] Delete the `deleteme2` folder with `rmdir` - why does it not work? How can you delete it?

- [ ] Create a `kittens` folder

- [ ] Move all files from `exercises/commandline/images` that start with a `1` to the kittens folder. Try to do it with only one command.


# lesson 2

- [ ] Create a list of all the `.jpg` files in the `commandline/images` folder and write it to a file

- [ ] In the folder `commandline/chemistry` are a bunch of files - for every file, use `wc` to count the number of lines in the file and write the result (together with the filename) to a file `lines.txt`

- [ ] Now look at the content of the file `lines.txt`: sort the contents of `lines.txt` - is the sorting correct?

- [ ] Write the output of the last command to a file `lines_sorted.txt`

- [ ] Use `tail` to show the file with the least lines.

- [ ] Combine the last for exercises into one command

- [ ] Use `cut` to show only the filename, without the number of lines

- [ ] There is a file `animals.txt` in the `commandline/data` folder. Look at it using the `cat` tool. It contains a date in the first column, then an animal type in the second column and a number of sightings in the third column. Find out on how many days there was a rabbit sighting.

- [ ] Look at the manual of the `tr` tool - can you use it to print the content of `animals.txt` and make the animal names UPPERCASE?


## extra

- [ ] Count the words in [E.T.A. Hoffmann / Nachtstücke](https://www.gutenberg.org/cache/epub/6341/pg6341.txt)

- [ ] Count the occurrence of the word "Flugmaschine"  in [A. Hildebrandt / Die Brüder Wright](https://www.gutenberg.org/cache/epub/10914/pg10914.txt)

- [ ] How big are the files in the `kittens` folder we created yesterday?


## scripts

- [ ] create a script that prints "My username is:", then in the next line it prints your username

- [ ] extend the script to add to the output: "The last 5 commands I typed where:" and then it should print the last 5 commands that you typed on the commandline
