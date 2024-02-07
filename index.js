const fs = require("node:fs")
// Creating a new file
fs.writeFile('README.md', 'Yo, watch JJK!', (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('File created successfully.');
    }
  });
  
  // Reading a file
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File contents:', data);
    }
  });