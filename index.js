require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

// require(hbs)
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static('public'))
// INDEX
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Matias',
    titulo: 'Curso'
  });
});

// ELEMENTS
app.get('/elements', (req, res) => {
  res.render('elements')
});

// GENERIC
app.get('/generic', (req, res) => {
  res.render('generic')
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/page/404.html')
  })
  

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})