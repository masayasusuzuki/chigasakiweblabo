const https = require('https');
const fs = require('fs');
const path = require('path');

// The URL of the cartoon avatar
const imageUrl = 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Person/Default/3D/person_3d_default.png';

// The destination path
const destinationPath = path.join(__dirname, 'public', 'images', 'avatar.png');

// Create a write stream
const file = fs.createWriteStream(destinationPath);

// Download the image
https.get(imageUrl, (response) => {
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log(`Avatar image downloaded and saved to ${destinationPath}`);
  });
}).on('error', (err) => {
  fs.unlink(destinationPath, () => {}); // Delete the file if there's an error
  console.error(`Error downloading the avatar image: ${err.message}`);
}); 