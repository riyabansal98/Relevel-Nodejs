// function hello(){

//     console.log("Hello World");
// }

// hello();

// var http = require('http');
// var server = http.createServer()

const fs = require('fs')

// fs.rename('oldFile.txt', 'newFile.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
// });

// fs.readFile('file.txt',"utf8" ,(err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//UTF -> is an encoder
const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
if (err) throw err;
console.log('The file has been saved!');
});