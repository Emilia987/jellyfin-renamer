const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the name of the show? ', (showName) => {
  rl.question('What is the season number? ', (seasonNumber) => {
    rl.question('What is the year of the show? ', (year) => {
      const baseName = 'EP.';
      const dirPath = 'C:/Users/Emily/Downloads/Jellyfin renamer';
      const files = fs.readdirSync(dirPath)
                    .filter(file => file.startsWith(baseName));
      
      // Create the show folder
      const showFolderName = `${showName} (${year})`;
      const desktopPath = require('path').join(require('os').homedir(), 'Desktop');
      const showFolderPath = path.join(desktopPath, showFolderName);
      if (!fs.existsSync(showFolderPath)) {
        fs.mkdirSync(showFolderPath);
      }

      // Create the season folder and move/renamed files into it
      const seasonFolderName = `Season ${seasonNumber.padStart(2, '0')}`;
      const seasonFolderPath = path.join(showFolderPath, seasonFolderName);
      if (!fs.existsSync(seasonFolderPath)) {
        fs.mkdirSync(seasonFolderPath);
      }

      let i = 0;
      const renameNextFile = () => {
        if (i < files.length) {
          const file = files[i];
          const episodeNumber = file.match(/\d+/)[0];
          const paddedEpisodeNumber = episodeNumber.toString().padStart(2, '0');
          const episodeName = `Episode ${i+1}`;
          const fileName = `${episodeName} S${seasonNumber.padStart(2, '0')}E${paddedEpisodeNumber}`;
          const oldPath = path.join(dirPath, file);
          const newPath = path.join(seasonFolderPath, `${fileName}${path.extname(file)}`);
          rl.question(`What is the name of ${fileName}? `, (name) => {
            const newName = `${name} S${seasonNumber.padStart(2, '0')}E${paddedEpisodeNumber}`;
            fs.renameSync(oldPath, path.join(seasonFolderPath, `${newName}${path.extname(file)}`));
            console.log(`File renamed to ${newName}${path.extname(file)}`);
            i++;
            renameNextFile();
          });
        } else {
          console.log('All files renamed and moved successfully.');
          rl.close();
        }
      };

      renameNextFile();
    });
  });
});
