const https = require('https');
const fs = require('fs');
const path = require('path');

// The URL of a cartoon avatar (using a sample one from GitHub)
const imageUrl = 'https://raw.githubusercontent.com/FreeCodeCamp/assets/main/logo-discord.png';

// The destination path
const destinationPath = path.join(__dirname, 'public', 'images', 'icon.png');

// Create a write stream
const file = fs.createWriteStream(destinationPath);

// Download the image
https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download: Status code ${response.statusCode}`);
    return;
  }
  
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log(`Cartoon avatar downloaded and saved to ${destinationPath}`);
  });
}).on('error', (err) => {
  fs.unlink(destinationPath, () => {}); // Delete the file if there's an error
  console.error(`Error downloading the cartoon avatar: ${err.message}`);
}); 