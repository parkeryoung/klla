express = require 'express'
app = express()
assets = require('connect-assets')
jadeAssets = require('connect-assets-jade')
http = require('http').Server(app)
io = require('socket.io')(http)
Sequelize = require('sequelize');
sequelize = new Sequelize('klla', 'parkeryoung', '', dialect: 'postgres');
models = require("./models");
bodyParser = require('body-parser')
app.use bodyParser.json()
app.use bodyParser.urlencoded {
    extended: true
  }

app.set 'view engine', 'jade'

app.get '/', (req, res) ->
  res.render 'index', { title: 'Call Out Stupid', message: 'Call Out Stupid' }

app.post '/grievances', (req, res) ->
  models.Grievance.findOrCreate({where: req.body}).then (result) ->
    result = result[0]
    io.emit("New Grievance", result)
    res.json(result)

app.get '/grievances', (req, res) ->
  models.Grievance.findAll().then (grievances) ->
    res.json grievances.map (grievance) ->
      grievance.toJSON()

io.on 'connection', (socket) ->
  console.log 'a user connected'
  socket.on 'disconnect', ->
    console.log 'a user disconnected'
  socket.on 'vote', (direction) ->
    console.log(direction)

server = http.listen 3000, ->

  host = server.address().address;
  port = server.address().port;

  console.log 'Example app listening at http://%s:%s', host, port

app.use assets {
  jsCompilers: {
    jade: jadeAssets()
  }
}

