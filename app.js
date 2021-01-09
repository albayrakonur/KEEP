const express = require('express')
const bodyParser = require('body-parser')
const db = require('./helper/db')()
var productRouter = require('./controller/productController')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!')
})

app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
