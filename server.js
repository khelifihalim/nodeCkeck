var http = require('http');

http.createServer( (req , res) => {
    res.writeHead(200);
    res.write('<h1>hello node!!!!</h1>\n');
    res.end();
})
.listen(3001);

console.log('Server running at http://localhost:3000');