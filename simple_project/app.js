const server = require('./server');
const router = require('./router');
const handler = require('./handler');
let handle = {};
handle["/home"] = handler.home;
handle["/review"] = handler.review;
let route = router.route;
server.startServer(route,handle);