
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
    res.render("write.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});

app.get('/instruction', function(req, resp) { 

  try {
    resp.status(200).render('instruction.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.post('/add', async (req, res) => {
  //console.log("add req body.content")
  //console.log(req.body.date);

  if(req.body.date == ""){
    const todoTask = new TodoTask({
      content: req.body.content,
    });
    try {
      await todoTask.save();
      res.redirect("/");
    } catch (err) {
      res.send(500, err);
    }
  }
  else{
    const todoTask = new TodoTask({
      content: req.body.content,
      date : req.body.date
    });

    try {
      await todoTask.save();
      res.redirect("/");
    } catch (err) {
      res.send(500, err);
    }
 }
});

app.get("/list", async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});


//UPDATE
app.get("/edit/:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  try {
    const tasks = await TodoTask.findByIdAndUpdate(id, { content: req.body.content })
    res.render("update.ejs", { todoTasks: tasks});
  } catch (err) {
    res.send(500, err);
  }
})
app.post("/update", async (req, res) => {
  const id = req.body._id;
  console.log(req.body);

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }

  console.log(req.body.date);
  try {
    await TodoTask.findByIdAndUpdate(id, { content: req.body.content, date: req.body.date })
    res.redirect("/");
  } catch (err) {
    res.send(500, err);
  }
});

//DELETE
app.route("/delete/:id").get(async (req, res) => {
  const id = req.params.id;
  console.log("delete function")
  console.log(req.params.id)
  try {
    await TodoTask.findByIdAndRemove(id)
    res.redirect("/");
  } catch (err) {
    res.send(500, err);
  }
});