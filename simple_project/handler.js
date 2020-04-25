var queryString = require('querystring');
function home(response,data) {
    console.log('Executing from home');
    const {htmlFile} = require('./homeHtml');
    response.writeHead(200,{"ContentType":"text/html"});
    response.write(htmlFile);
    response.end();
}

function review(response,data)  {
    console.log('Executing from review');
    response.writeHead(200,{"ContentType":"text/html"})
    response.write('Your review is '+ queryString.parse(data).text)
    response.end()
}

exports.home = home;
exports.review = review;