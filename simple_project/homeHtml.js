const html = `
    <!DOCTYPE html> 
    <html lang='en'>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
        <title>Title</title>
    </head>
    <body>
        <form action="/review" method="post">
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="input">
        </form>
    </body>
    </html>
`;

exports.htmlFile = html;