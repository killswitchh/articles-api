const http = require('http');
const app = require('./app');
const port = process.env.port || 5050;
const server = http.createServer(app);
server.listen(port)
