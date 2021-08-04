const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { calcularResultados } = require('./public/js/main')
const bodyParser = require('body-parser')
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer({
  exts: ['js', 'css', 'ejs']
})
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/")
  }, 100);
});

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(connectLiveReload())
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(expressLayouts)
app.set('layout', './layouts/comum')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index', { title: 'Calculadora MRU'})
})

app.post('/resultado', (req, res) => {
  res.render('resultado', { title: 'Resultado', resultado: calcularResultados(req.body), tipo: req.body.tipo })
})

app.listen(port)
