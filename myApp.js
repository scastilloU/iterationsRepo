const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// For loop
const forLoop = [];
for (let i = 0; i < 5; i++) {
  forLoop.push(i);
}

// While loop
const whileLoop = [];
let j = 0;
while (j < 5) {
  whileLoop.push(j);
  j++;
}

// Do-while loop
const doWhileLoop = [];
let k = 0;
do {
  doWhileLoop.push(k);
  k++;
} while (k < 5);

// Retrieve HTML file
console.log("\nRetrieving HTML file...");
http.createServer((req, res) => {
  fs.readFile('index.ejs', 'utf8', (err, template) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      const renderedHTML = ejs.render(template, { forLoop, whileLoop, doWhileLoop });
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(renderedHTML);
    }
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
