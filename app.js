const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan')
const expressLayout = require('express-ejs-layouts')
const port = 3000

//information using EJS
app.set('view engine', 'ejs')

//using third party express layout
app.use(expressLayout)

app.use(morgan('dev'))

//fungsi middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

//untuk memanggil file static (contoh kasus disini adalah untuk memanggil file gambar yang  )
app.use(express.static(path.join(__dirname, 'public')))

// app.set('layout','layouts/layout')
// routing untuk path pada browser
app.get('/', (req,res) => {
  res.render('index', {
    layout : "layouts/main",
    title : "Halaman Index"
  })
})

//routing untuk path pada browser
app.get('/about', (req, res) => {
  res.render('about', {
    layout : "layouts/main",
    title : "Halaman About"
  })
})

//routing untuk path pada browser
app.get('/contact', (req, res) => {
  cont = [
    {
      name : "nama1",
      email : "nama1@gmail.com"
    },
    {
      name : "nama2",
      email : "nama2@gmail.com"
    },
    {
      name : "nama3",
      email : "nama3@gmail.com"
    }
  ]
  res.render('contact', {
    layout : "layouts/main",
    title : "Halaman Contact",
    nama : "Giovanni",
    cont,
  })
})

//routing untuk path pada browser
// app.get('/product', (req, res) => {
//   //req.query() disini harus dipanggil dengan mengetikkan parameter seperti input di url
//   //contoh parameter dengan kasus dibawah : http://localhost:3000/product?id=1&barang=shoes
//   res.send(`product id : ${req.query.id} <br> category id : ${req.query.barang}`)
// })

app.use('/', (req, res) => {
  res.status(404)
  res.send('page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  