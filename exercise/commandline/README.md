# lesson 1

- [ ] Download the repository content using the `.zip` link on github and extract the archive somewhere.

- [ ] Go to the extracted folder

- [ ] Go into the "exercise/lecture1" folder

- [ ] Create a directory "comic"

- [ ] Move the `xkcd.com_tar.png` file from the `images` folder to the `comic` folder

- [ ] In the folder `data` are some `csv` files and one `jpg`. The `jpg` should be moved to the `images` folder. Try not to type the whole filename.

- [ ] Delete the image of Cory Doctorov in the images folder.

- [ ] Remove the "deleteme" folder.

- [ ] Execute these commands or think through them:
- [ ] mkdir backup; mkdir img-dateien/backup; touch backup/a; touch img-dateien/backup/b; cd img-dateien
- [ ] What does `ls ../backup` show you?

- [ ] In the folder `data` are some empty `.csv` files with years in their filename - create the one thats missing.

- [ ] create a directory `data/a/1/b/2/c/3/d/4/e`

- [ ] Copy the comic folder to the `e` folder

- [ ] Rename the `xkcd.com_tar.png` file in `data/a/1/b/2/c/3/d/4/e/comic` to `mycomic.png` without entering the directory

- [ ] Remove the `data/a` directory and its content.

- [ ] Delete the `deleteme2` folder with `rmdir` - why does it not work? How can you delete it?

- [ ] Create a `kittens` folder

- [ ] Move all files from `exercises/lecture1/images` that start with a `1` to the kittens folder. Try to do it with only one command.


# lesson 2

- [ ] How big are the files in the `kittens` folder we created yesterday?

- [ ] Create a list of all the `.jpg` files in the `lecture1` folder and write it to a file

- [ ] In the folder `chemistry` are a bunch of files - for every file, write the number of lines together with the filename to a file `lines.txt`

- [ ] Now look at the content of the file `lines.txt`, then sort the contents of `lines.txt` - is the sorting correct?

- [ ] Write the output of the last command to a file `lines_sorted.txt`

- [ ] Use `tail` to show the file with the least lines.

- [ ] Combine the last for exercises into one command

- [ ] Use `cut` to show only the filename, without the number of lines

- [ ] There is a file `animals.txt` in the `data` folder. Look at it, then try to reorder the entries in the file, so that the date (first column) and the number (last column) are swapped. Then sort the entries by the number in the first line. Make the animal names UPPERCASE.
