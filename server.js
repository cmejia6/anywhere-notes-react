const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const app = express();

const port = 5000;
var db

MongoClient.connect('mongodb://ALEX:password@cluster0-shard-00-00-nv6gw.gcp.mongodb.net:27017,cluster0-shard-00-01-nv6gw.gcp.mongodb.net:27017,cluster0-shard-00-02-nv6gw.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true }, (err, database) => {
    if (err) throw console.log(err)

    db = database.db('example-stuff')
    db.collection('quotes')

    app.listen(port, () => `Server running on port ${port}`);
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
  }))
  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

app.get('/api/notes', (req, res) => {

    db.collection('quotes').find().toArray((err, notes) => {
        if (err) return console.log(err)
        console.log('grabbing notes' + notes)
        res.json(notes)
    })

});

app.post('/api/notes', (req, res) => {
    db.collection('quotes').insertOne(req.body,(err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')

        res.redirect('/api/notes')

    })
})