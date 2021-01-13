const path = require('path');

// BAse file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path project
console.log(path.parse(__filename).base);

// Contactenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));