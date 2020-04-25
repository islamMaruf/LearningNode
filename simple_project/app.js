const http = require('http');
let onRequest = (request,response) =>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write('welcome to node js');
    response.end();
}
http.createServer(onRequest).listen(8888);