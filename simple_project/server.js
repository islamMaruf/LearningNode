const http = require('http');

function startServer(port = 8888) {
    let onRequest = (request, response) => {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('welcome to node js');
        response.end();
    }
    http.createServer(onRequest).listen(port);
    console.log(`app listening to port ${port}`)

}

exports.startServer = startServer;