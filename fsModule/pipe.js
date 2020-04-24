var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream)