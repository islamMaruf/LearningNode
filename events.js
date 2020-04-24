const events = require('events');
let  eventEmitter = new events.EventEmitter();

function ringTheBell() {
    console.log('bell ring');
    eventEmitter.emit('bellRing','Some one enter')
}

eventEmitter.on('doorOpen',ringTheBell);
eventEmitter.on('bellRing',function (message) {
    console.log(message)
})

eventEmitter.emit('doorOpen');