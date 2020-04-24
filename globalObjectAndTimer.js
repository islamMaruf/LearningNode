/*********
 * Global Objects
 */
// file name where code run
let filename = __filename;
//dir name
let dirname = __dirname;
console.log(filename);
console.log(dirname);


/***
 * timers
 */
function helloWorld() {
    console.log(`print hello`)
}

//call after specific time period
setTimeout(helloWorld,1000);

//clear a set timeout
var t = setTimeout(helloWorld,5000);
clearTimeout(t);

//perform some time again and again with an interval
var interval =setInterval(helloWorld,1000);

//clear interval
clearInterval(interval);
/**
 * end timers
 */

//some console global object
console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
let start = 1000;
while (start){
    start--;
}
//
console.timeEnd('Getting data');

console.info("Program Ended");

// some process global object

// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// Getting executable path
console.log(process.execPath);

// Platform Information
console.log(process.platform);
