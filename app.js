const fs = require("fs");

console.log("starting ...");



fs.writeFile('Welcome.txt', 'Hello node', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });


console.log("finishing");