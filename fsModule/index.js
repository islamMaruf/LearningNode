var fs = require('fs')

//async
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})

let file = fs.readFileSync('input.txt',);
console.log(file.toString())
