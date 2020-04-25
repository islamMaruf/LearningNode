const server = require('./server');
const router = require('./router');
let route = router.route;
server.startServer(route);