const http = require('http');

http.createServer( (req, res) => {
/*     res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(persona)); */
    res.write('Hola Mundo');
    res.end();
})
.listen( 3000 );

console.log('Escuchando puerto', 3000);