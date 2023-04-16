const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
dotenv.config();

const TodoTask = require("./models/TodoTask");
const User = require("./models/userTask");

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
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// CRUD processing

app.get("/", requireLogin, async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.status(200).render("write.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});

app.get('/instruction', requireLogin, function(req, resp) { 

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

app.get('/register', function(req, resp) { 

  try {
    resp.status(500).render('register.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/login', function(req, resp) { 

  try {
    resp.status(500).render('login.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/account', requireLogin, function(req, res) {
  User.findOne({ userID: req.session.userId })
    .then(user => {
      res.render('account', { user });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/add', requireLogin, async (req, res) => {
  //console.log("add req body.content")
  //console.log(req.body.date);

  if(req.body.content == ""){

    res.status(500).redirect("/error");

  } else if(req.body.date == ""){
    const todoTask = new TodoTask({
      content: req.body.content,
    });
    try {
      await todoTask.save();
      res.status(302).redirect("/");
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

app.get("/list", requireLogin, async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.status(200).render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});


//UPDATE
app.get("/edit/:id", requireLogin, async (req, res) => {
  //console.log(req.params.id);
  const id = req.params.id;
  try {
    const tasks = await TodoTask.findByIdAndUpdate(id, { content: req.body.content })
    res.status(200).render("update.ejs", { todoTasks: tasks});
  } catch (err) {
    res.send(500, err);
  }
})
app.post("/update", requireLogin, async (req, res) => {
  const id = req.body._id;
  console.log("")
  console.log(req.body.date);

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }

  //console.log(req.body.date);
  try {
    await TodoTask.findByIdAndUpdate(id, { content: req.body.content, date: req.body.date })
    res.redirect("/");
  } catch (err) {
    res.send(500, err);
  }
});

//DELETE
app.route("/delete/:id", requireLogin,).get(async (req, res) => {
  const id = req.params.id;
  //console.log("delete function")
  //console.log(req.params)
  try {
    await TodoTask.findByIdAndRemove(id)
    //console.log("should be deleted")
    res.redirect("/");
  } catch (err) {
    res.send(500, err);
  }
});

//REGISTER
app.post('/create', async (req, res) =>{
  
    const { username, email, password, password2 } = req.body;
    let errors = [];
    let accSuccess = [];
    try{
    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      errors.push({msg: 'User already exists' });
    }
  }
  catch(err){

  }

    if (!username || !email || !password || !password2) {
      errors.push({ msg: 'Please fill in all fields' });
  }
  // Check password
  if (password !== password2) {
      errors.push({ msg: 'Passwords do not match' });
  }
  // Check password length
  if (password.length < 6) {
      errors.push({ msg: 'Password should be at least 6 characters' });
  }
  if (errors.length > 0) {
      res.render('register', {
          errors,
          username,
          email,
          password,
          password2
      });
  }
  else {
    
    const userID = uuidv4();
    const newUser = new User({
      userID,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    try {
      await newUser.save();
    } catch (err) {
      res.send(500, err);
    }
  }
      accSuccess.push({msg: 'Account successfully created'});
      res.render('register', {
        accSuccess
    });
});

//LOGIN
app.post('/logging', async (req, res) => {
  const { username, password } = req.body;
  let errors = [];
  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      errors.push({ msg: 'Invalid username or password' });
    } else {
      let isMatch = false;
      // Check password
    if(password == user.password){
      isMatch = true;
    }
      if (!isMatch) {
        errors.push({ msg: 'Invalid username or password' });
      } else {
        // Create session
        req.session.userId = user.userID;
        // Redirect to home page
        res.redirect('/');
        return;
      }
    }
  } catch (err) {
    console.error(err);
    errors.push({ msg: 'An error occurred, please try again later' });
  }
  res.render('login', { errors });
});

function requireLogin(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
}



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
    const response = await TodoTask.findOne({ content: req.body.content})
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

