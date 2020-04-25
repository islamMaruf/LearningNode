const http = require('http');
const url = require('url')

function startServer(route, handle, port = 8888) {
    let onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname;
        console.log('request received for' + pathname);
        route(pathname, handle);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('welcome to node js');
        response.end();
    }

    http.createServer(onRequest).listen(port);
    console.log(`app listening to port ${port}`)

}

exports.startServer = startServer;