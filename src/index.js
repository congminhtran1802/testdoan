const path = require('path');
const express = require('express')
const morgan = require('morgan')
const engine = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resource/views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})