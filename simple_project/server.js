const http = require('http');
const url = require('url');

function startServer(route, handle, port = 8888) {
    let onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname;
        console.log('request received for' + pathname);
        let data = "";
        request.setEncoding("UTF8");
        request.addListener("data",function (chunk) {
            data += chunk;
        });
        request.addListener("end",function () {
            route(pathname, handle, response,data);
        })

    };
    http.createServer(onRequest).listen(port);
    console.log(`app listening to port ${port}`)
}

exports.startServer = startServer;