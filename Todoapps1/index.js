// run "npm install . "
// reset counter/totalPost to 0
// remove all the documents in the posts

const {MongoClient} = require('mongodb');

const uri = require('./db.js');
var db;

const DATABASE = 'todoapp'; 
const POSTS = 'posts';
const COUNTER = 'counter';

MongoClient.connect(uri, { useUnifiedTopology: true }, function (error, client) {
    if (error) return console.log(error)
    db = client.db(DATABASE);
});

// Install express
const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) 
app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs');

app.listen(5500, function() {
    console.log('listening on 5500')
});

app.get('/', function(req, resp) { 

  try {
    resp.render('write.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/instruction', function(req, resp) { 

  try {
    resp.render('instruction.ejs')
  } catch (e) {
    console.error(e);
  } 
});


app.post('/add', function(req, resp) {
    runAddPost(req, resp);
});

async function runAddPost(req, resp) {
 console.log("add function");
 console.log(req.body);
    try {
      const counter = db.collection(COUNTER);
      const posts = db.collection(POSTS);      
  
      let query = {name : 'Total Post'};
      let res = await counter.findOne(query);
      console.log(res);
      const totalPost = res.totalPost;
      try{
        let newPost = await posts.findOne({}, {sort:{$natural:-1}})
        var newID = newPost._id;
      }
      catch (e){
        var newID = 0;
      }

      query = { _id : newID + 1, title : req.body.title, date : req.body.date};
      res = await posts.insertOne(query);
      
      query = {name : 'Total Post'};
      let stage = { $inc: {totalPost:1} };
      await counter.updateOne(query, stage);
      resp.send('<h1 style="text-align:center">Stored to MongoDB</h1><br/><a style="text-decoration:none; color:black;  text-align:center" href="/"><div style="border:1px solid black;"><h2 style="">Return Home</h2></div></a>');
      //resp.send('Stored to MongoDB OK');
    } catch (e) {
      console.error(e);
    }
}


app.get('/list', function(req, resp){
  runListGet(req, resp);
});

async function runListGet(req, resp) {
    try {
      const posts = db.collection(POSTS);
      const res = await posts.find().toArray();
      const query = { posts: res };
      resp.render('list.ejs', query)
    } catch (e) {
      console.error(e);
    } 
}

app.get('/Test', async function(req, resp){
    try {
      const find = String(req.body.title);
      const posts = db.collection(POSTS);
      const res = await posts.findOne({title : find});
      console.log("listTest function");
      resp.send(res);
    } catch (e) {
      console.error(e);
    } 
});

app.delete('/delete', async function(req, resp){
    req.body._id = parseInt(req.body._id); // the body._id is stored in string, so change it into an int value
    console.log("Delete function");
    console.log(req.body._id);
    try {
        const counter = db.collection(COUNTER);
        const posts = db.collection(POSTS)
        const res = await posts.deleteOne(req.body); 

        const query = {name : 'Total Post'};
        const stage = { $inc: {totalPost:-1} };
        await counter.updateOne(query, stage);

        console.log('Delete complete')
        resp.send('Delete complete')
    }
    catch (e) {
        console.error(e);
    }
}); 

app.post('/update', async function(req, resp){
  req.body._id = parseInt(req.body._id); // the body._id is stored in string, so change it into an int value
  console.log("Update function");
  console.log(req.body._id);

  try {
      const posts = db.collection(POSTS);

      const query = {_id : req.body._id};
      const stage = { $set: {title : req.body.title, date : req.body.date}};
      await posts.updateOne(query, stage);
      //resp.send('Stored to Mongodb OK');
      resp.send('<h1 style="text-align:center">Stored to MongoDB</h1><br/><a style="text-decoration:none; color:black;  text-align:center" href="/list"><div style="border:1px solid black;"><h2 style="">Return to list</h2></div></a>');

      console.log('Stored to Mongodb OK');
    } catch (e) {
      console.error(e);
    }

});