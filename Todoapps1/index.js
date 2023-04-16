
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const TodoTask = require("./models/TodoTask");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECT);
  console.log("Connected to db!");
  app.listen(5500, () => console.log("Server Up and running"));
}

app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

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

app.get('/tagSearch', function(req, resp) { 

  try {
    resp.status(500).render('tagSearch.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/advSearch', function(req, resp) { 

  try {
    resp.status(500).render('advSearch.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/search', function(req, resp) { 

  try {
    resp.status(500).render('search.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get("/list", async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    //console.log(tasks)
    res.status(200).render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
 });

//create
app.post('/add', async (req, res) => {
 //console.log("add req body.content")
 //console.log(req.body.date);

 if(req.body.content == ""){

   res.status(500).redirect("/error");

 }
 
 if(req.body.date == "" && req.body.tag ==""){
   const todoTask = new TodoTask({
     content: req.body.content,
     dateNum: new Date().toISOString().slice(0, 10)
 });
   try {
     await todoTask.save();
     res.status(302).redirect("/");
   } catch (err) {
     res.send(500, err);
   }
 }

 if(req.body.date == "" && req.body.content != ""){
   const todoTask = new TodoTask({
     content: req.body.content,
     tag: req.body.tag,
     dateNum: new Date().toISOString().slice(0, 10)
 });
   try {
     await todoTask.save();
     res.status(302).redirect("/");
   } catch (err) {
     res.send(500, err);
   }
 }

 if(req.body.tag == ""){
   const todoTask = new TodoTask({
     content: req.body.content,
     date: req.body.date,
     dateNum : req.body.date
 });
 //console.log(todoTask.dateNum)
   try {
     await todoTask.save();
     res.status(302).redirect("/");
   } catch (err) {
     res.send(500, err);
   }
 }
 
 if(req.body.date != "" && req.body.tag !="" && req.body.content !="") {
   const todoTask = new TodoTask({
     content: req.body.content,
     date : req.body.date,
     tag : req.body.tag,
     dateNum : req.body.date
   });
   //console.log(todoTask.dateNum)
   try {
     await todoTask.save();
     res.redirect("/");
   } catch (err) {
     res.send(500, err);
   }
}
});

//UPDATE
app.get("/edit/:id", async (req, res) => {
  //console.log(req.params.id);
  const id = req.params.id;
  try {
    const tasks = await TodoTask.findByIdAndUpdate(id, { content: req.body.content })
    res.status(200).render("update.ejs", { todoTasks: tasks});
  } catch (err) {
    res.send(500, err);
  }
})
app.post("/update", async (req, res) => {
  const id = req.body._id;
  //console.log("")
  //console.log(req.body.date);

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }

  //console.log(req.body.date);
  try {
    await TodoTask.findByIdAndUpdate(id, { content: req.body.content, date: req.body.date, dateNum: req.body.date, tag: req.body.tag })
    res.redirect("/list");
  } catch (err) {
    res.send(500, err);
  }
});

//DELETE
app.route("/delete/:id").get(async (req, res) => {
  const id = req.params.id;
  //console.log("delete function")
  //console.log(req.params)
  try {
    await TodoTask.findByIdAndRemove(id)
    //console.log("should be deleted")
    res.redirect("/list");
  } catch (err) {
    res.send(500, err);
  }
});

//Tag search
app.post("/tag", async (req, res) => {
  //console.log("tag function");
  //console.log(req.body)
  try {
    const tasks = await TodoTask.find({tag: req.body.tag}).sort({_id: 1})
    res.status(200).render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err); 
  }
});

//adv search
app.post("/advSearch", async (req, res) => {
  //console.log("adv search function");
  //console.log(req.body.date)

  if(req.body.content == "" && req.body.date == ""){

    res.status(500).redirect("/error");
 
  }

  if(req.body.content == ""){
    const todoTask = new TodoTask({
      date: req.body.date,
  });
  try {
    const tasks = await TodoTask.find({date: new RegExp(req.body.date, 'i')}).sort({_id: 1})
    res.status(200).render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err); 
  }
  }

  if(req.body.date == ""){
    const todoTask = new TodoTask({
      content: req.body.content,
  });
  try {
    const tasks = await TodoTask.find({content: new RegExp(req.body.content, 'i')}).sort({_id: 1})
    res.status(200).render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err); 
  }
  }
  
  if(req.body.date != "" && req.body.content !="") {
    const todoTask = new TodoTask({
      content: req.body.content,
      date : req.body.date,
    });
 
    try {
      const tasks = await TodoTask.find({content: new RegExp(req.body.content, 'i'), date: new RegExp(newreq.body.date, 'i')}).sort({_id: 1})
      res.status(200).render("list.ejs", { todoTasks: tasks });
    }
    catch (err) {
      console.error(err); 
    }
 }
});

//Search 
app.post("/search", async (req, res) => {
  //console.log("search function");
  //console.log(req.body.date)

  if(req.body.date1 == "" || req.body.date2 == ""){
    res.status(500).redirect("/error");
  }
  
  if(req.body.date1 != "" && req.body.date2 != "") {
 
    try {
      console.log(req.body.date1)
      console.log(req.body.date2)
      const tasks = await TodoTask.find({dateNum: {"$gte": req.body.date1, "$lte": req.body.date2}}).sort({_id: 1})
      //console.log(tasks)
      res.status(200).render("list.ejs", { todoTasks: tasks });
    }
    catch (err) {
      console.error(err); 
    }
 }
});

//Test methods
app.get('/Test', async function(req, res){
  const id = req.body._id;
  //console.log("req")
  //console.log(req.body);

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }
  //console.log("defDate")
  //console.log(req.body.date);
  try {
    const response = await TodoTask.findOne({content: req.body.content})
    //console.log("response")
    //console.log(response);
    res.send(response);
  } catch (err) {
    res.send(500, err);
  }
});

//Test methods
app.get('/Test2', async function(req, res){
  const id = req.body._id;
  //console.log("req")
  //console.log(req.body);

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }
  //console.log("defDate")
  //console.log(req.body.date);
  try {
    const response = await TodoTask.exists({ content: req.body.content})
    console.log(response);
    //console.log("response")
    //console.log(response.body);
    res.send(response);
  } catch (err) {
    res.send(500, err);
  }
});

app.get("/Test3", async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.status(200).send(tasks)
  }
  catch (err) {
    console.error(err);
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

