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


app.get('/api/notes', (req, res) => {

    db.collection('quotes').find().toArray((err, notes) => {
        if (err) return console.log(err)
        console.log('grabbing notes' + notes)
        res.json(notes)

        //res.json({example-stuff: result})
        //res.send({result})
        //res.render('index.ejs', {notes: result})
    })




  /*const notes = [
    {id: 1, title: 'First note', note: 'Doe'},
    {id: 2, title: 'Second note', note: 'Traversy'},
    {id: 3, title: 'Third note', note: 'Swanson'},
  ];

  res.json(notes);*/
});

