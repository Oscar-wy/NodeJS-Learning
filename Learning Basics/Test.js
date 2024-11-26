const { createServer } = require('node:http');
var dt = require("./myfirstmodule")
var url = require('node:url');
var fs = require('fs');
var serverModule = require("./Users")
var serverClass = serverModule.Server
var userClass = serverModule.User
var Server = new serverClass()

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // var q = url.parse(req.url, true).query;
  // var text = q.year + " " + q.month; //https://improved-succotash-wrrpg6q5v4xxfgwp-3000.app.github.dev/?year=2017&month=July
  // res.write(text)
  fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data + " " + Server.Users);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
