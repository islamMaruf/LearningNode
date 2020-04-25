function home(response) {
    console.log('Executing from home');
    const {htmlFile} = require('./homeHtml');
    response.writeHead(200,{"ContentType":"text/html"});
    response.write(htmlFile);
    response.end();
}

function review() {
    console.log('Executing from review');
}

exports.home = home;
exports.review = review;