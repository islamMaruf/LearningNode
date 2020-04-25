function router(pathname, handle, response, data) {
    console.log('Routing a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response,data);
    } else {
        console.log('no handler for pathname' + pathname);
        response.writeHead(404, {"contentType": "text/plain"});
        response.write("404 error.\n request path not found");
        response.end();
    }
}

exports.route = router;