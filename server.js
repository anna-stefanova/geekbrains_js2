const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const body = req.url === '/styles.css'
        ? fs.readFileSync('./public/styles.css')
        : fs.readFileSync('./public/index.html');
    if (req.url === '/img/no-image.jpg') {
        fs.readFileSync('./public/img/no-image.jpg');
    }
    res.end(body);
});

const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Server started on port ${port}!`);