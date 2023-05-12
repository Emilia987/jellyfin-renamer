# jellyfin-renamer
A tool that let's you rename files more quickly for jellyfin


This project aims to simplify the process of renaming a bunch of files for jellyfin. 
Note that this project is very specific and limited in capability. 

IMPORTANT!!!
Node needed for execution (execute by opening a Terminal window where the renamer.js file is saved. Type "node.js" in the Terminal and the program will start)
Code needs to be slightly altered for every user. In line 14 of the code there needs to be a user name inserted for where the original files are stored.
This will only detect unnamed files that start with "EP.X", so that's Ep.1, EP.2,EP.3 and so on. 


How the program works:
First create a folder in your downloads folder called "Jellyfin renamer" and alter the "renamer.js" file (insert your user name in line 14)
Load the unnamed files for a single season (only one season at a time) into the "Jellyfin renamer" folder in your downloads folder
Execute Program by opening a terminal in where your "renamer.js" file is saved and typing in "node renamer.js"

The skript will now guide you through the renaming proccess. Be sure not to use any characters that are not allowed by windows explorer, otherwise the program will end by itself

After completion the skript will close and all your renaimed files will be in a Folder that has also been named ready for import to Jellyfin
