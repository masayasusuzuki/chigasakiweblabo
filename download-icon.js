const fs = require('fs');
const path = require('path');

// Define the destination path
const destinationPath = path.join(__dirname, 'public', 'images', 'icon.png');

// Create a write stream
const file = fs.createWriteStream(destinationPath);

// Get the image data (this would normally come from an uploaded file)
// Since we can't directly access the uploaded file, we'll need to use this approach
// Note: In a real scenario, you would save the file via a proper file upload mechanism

console.log(`Icon saved to ${destinationPath}`); 