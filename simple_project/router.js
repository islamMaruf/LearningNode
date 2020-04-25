function router(pathname, handle) {
    console.log('Routing a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log('no handler for pathname' + pathname);
    }
}

exports.route = router;