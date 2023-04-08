let express = require('express');
// O consign é um facilitador de rotas
let consign = require('consign');
let bodyParser = require('body-parser')
let expressValidator = require('express-validator')

var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static('./app/public'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

// deve ser chamado apos a execução do express
// Abaixo o cosign escaneia as rotas da pasta routes e joga as rotas no servidr (app)
consign()
  .then('config/dbConnection.js')
  .then('app/models')
  .include('app/routes')
  .then('app/controllers')
  .into(app)

module.exports = app;