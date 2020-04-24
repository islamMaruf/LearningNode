var fs = require('fs');

var readbleStream = fs.createReadStream('../input.txt');
var data = '';
readbleStream.setEncoding('UTF8');
readbleStream.on('data',function (chunk) {
    data += chunk;
})
readbleStream.on('end',function () {
    var writableStream = fs.createWriteStream('./output.txt');
    writableStream.write(data,'UTF8');
    writableStream.end();
    writableStream.on('finish',function () {
        console.log('finish write')
    })
})
