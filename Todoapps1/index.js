
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) 

// CRUD processing

app.get("/", async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.status(200).render("write.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});

app.get('/instruction', function(req, resp) { 

  try {
    resp.status(500).render('instruction.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/error', function(req, resp) { 

  try {
    resp.status(500).render('error.ejs')
  } catch (e) {
    console.error(e);
  } 
});

async function runAddPost(req, resp) {
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

app.delete('/delete', async function(req, resp){
    req.body._id = parseInt(req.body._id); // the body._id is stored in string, so change it into an int value
    console.log(req.body._id);
    try {
      resp.render('writeU.ejs')
    } catch (e) {
      console.error(e);
    } 

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

  app.route("/clear").get(async (req, res) => {
  //console.log("clear function")
  
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    //console.log(tasks);
  
      //console.log("forloop")
      tasks.forEach(async (post) => {
        
        await TodoTask.findByIdAndRemove(post.id)
        
      });
      //console.log("after for loop")

      const tasks1 = await TodoTask.find({}).sort({_id: 1})
      //console.log(tasks);
    
        //console.log("forloop")
        tasks1.forEach(async (post) => {
          
          await TodoTask.findByIdAndRemove(post.id)
          
        });
        //console.log("after for loop")
      res.redirect("/");
  }
  catch (err) {
    console.error(err);
    res.send(500, err);
  }

});

