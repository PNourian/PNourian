var http = require('http')
var fs = require('fs')
var data = require('./data.json')

var server = http.createServer(serverHandler)
    .listen(80);

function serverHandler(req, res) {
    res.statusCode = 200

    if (req.method === 'GET' && (req.url == "/" || req.url == "/home")) {
                res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(path.resolve(__dirname, 'index.html')).pipe(res);
    }

    if (req.method === 'GET' && req.url == "/data/Ownership") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.OwnershipTransfer))
    }

    if (req.method === 'GET' && req.url == "/data/Whitelist") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.Whitelist))
    }
}