# jellyfin-renamer
A tool that lets you rename files more quickly for jellyfin


This project aims to simplify the process of renaming a bunch of files for jellyfin. 
Note that this project is very specific and limited in capability. 

IMPORTANT!!!
Nodejs is needed for execution!
The code needs to be slightly altered for every user. In line 14 of the code there needs to be a directory path inserted for where the original (unnamed) files are stored.
This will only detect unnamed files that start with "EP.X", so that's Ep.1, EP.2, EP.3 and so on. 


How the program works:
First, create a folder in your downloads folder called "Jellyfin renamer" and alter the "renamer.js" file (insert your user name in line 14)
Load the unnamed files for a single season (only one season at a time) into the "Jellyfin renamer" folder in your downloads folder
Execute the Program by opening a terminal where your "renamer.js" file is saved and typing in "node renamer.js"

The script will now guide you through the renaming process.

After completion, the script will close and all your renamed files will be in a Folder that has also been named.
