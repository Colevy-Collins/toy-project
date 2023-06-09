const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
dotenv.config();

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

// to test, use control f to find ', requireLogin' and replace it with “/*, requireLogin*/”

app.get("/", requireLogin , async (req, res) => {
//console.log("home session")
//console.log(session.userId);
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.status(500).render("write.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});

app.get('/instruction', requireLogin , function(req, resp) { 

  try {
    resp.status(500).render('instruction.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/error', requireLogin , function(req, resp) { 

  try {
    resp.status(500).render('error.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/tagSearch', requireLogin , function(req, resp) { 

  try {
    resp.status(500).render('tagSearch.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/advSearch', requireLogin , function(req, resp) { 

  try {
    resp.status(500).render('advSearch.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get('/search', requireLogin , function(req, resp) { 

  try {
    resp.status(500).render('search.ejs')
  } catch (e) {
    console.error(e);
  } 
});

app.get("/list", requireLogin , async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    //console.log(tasks)
    res.status(500).render("list.ejs", { todoTasks: tasks });
  }
  catch (err) {
    console.error(err);
  }
});

app.post('/add', upload.single('fileIn'), requireLogin , async (req, res) => {
  //console.log("add req body.content")
  //console.log(req);
  //console.log(req.file);

 if(req.body.content == ""){

   res.status(500).redirect("/error");
   return;
 }

 if(req.file){
    if(!(req.body.date == "")){
        const { originalname, mimetype, buffer } = req.file;
        const size = buffer.length;

        const todoTask = new TodoTask({
          content: req.body.content,
          date : req.body.date,
          tag : req.body.tag,
          dateNum : req.body.date,
          filename:originalname,
          mimetype: mimetype,
          size: size,
          data: buffer
        });
        //console.log(todoTask.dateNum)
        try {
          await todoTask.save();
          res.redirect("/");
        } catch (err) {
          res.send(500, err);
        }
    }else{
        const { originalname, mimetype, buffer } = req.file;
        const size = buffer.length;
        
        const todoTask = new TodoTask({
          content: req.body.content,
          tag: req.body.tag,
          dateNum: new Date().toISOString().slice(0, 10),
          filename:originalname,
          mimetype: mimetype,
          size: size,
          data: buffer
      });
        try {
          await todoTask.save();
          res.status(500).redirect("/");
        } catch (err) {
          res.send(500, err);
        }
      }

 }else {
  if(!(req.body.date == "")){
    const todoTask = new TodoTask({
      content: req.body.content,
      date : req.body.date,
      tag : req.body.tag,
      dateNum : req.body.date,
    });
    //console.log(todoTask.dateNum)
    try {
      await todoTask.save();
      res.redirect("/");
    } catch (err) {
      res.send(500, err);
    }
  }else{
      const todoTask = new TodoTask({
        content: req.body.content,
        tag: req.body.tag,
        dateNum: new Date().toISOString().slice(0, 10),
    });
      try {
        await todoTask.save();
        res.status(500).redirect("/");
      } catch (err) {
        res.send(500, err);
      }
    }
  }
});

//UPDATE
app.get("/edit/:id", requireLogin , async (req, res) => {
 //console.log("update 1")
 //console.log(req.params.id);
  const id = req.params.id;
  try {
    const tasks = await TodoTask.findByIdAndUpdate(id, { content: req.body.content })
    res.status(200).render("update.ejs", { todoTasks: tasks});
  } catch (err) {
    res.send(500, err);
  }
});

app.post("/update",  upload.single('fileIn'), requireLogin , async (req, res) => {
  const id = req.body._id;

  console.log(req.body)
  console.log("update 2")
 //console.log(req.body);

 if(req.body.content == ""){

  res.status(500).redirect("/error");
}else{

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }

    //console.log(req.body.date);
    if(!req.file){

      try {
        console.log("no file")
        await TodoTask.findByIdAndUpdate(id, { content: req.body.content, date: req.body.date, dateNum: req.body.date, tag: req.body.tag, $unset: {filename: 1}, $unset: {mimetype: 1}, $unset: {size: 1}, $unset: {data: 1}})
        res.redirect("/list");
      } catch (err) {
        res.send(500, err);
      }
    }else if(req.file){
      try {
        const { originalname, mimetype, buffer } = req.file;
        const size = buffer.length;

        console.log(originalname, mimetype, buffer, size)

        console.log(req.body.content, req.body.date, req.body.date, req.body.tag, originalname, mimetype, size, buffer)
        await TodoTask.findByIdAndUpdate(id, { content: req.body.content, date: req.body.date, dateNum: req.body.date, tag: req.body.tag, filename: originalname, mimetype: mimetype, size: size, data: buffer })
        res.redirect("/list");
      } catch (err) {
        res.send(500, err);
      }
    }
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

//Tag search - Please edit test when edited
app.post("/tag", requireLogin , async (req, res) => {
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

//Search - Please edit test when edited
app.post("/search", requireLogin , async (req, res) => {
  //console.log("search function");
  //console.log(req.body.date)

  if(req.body.date1 == "" || req.body.date2 == ""){
    res.status(500).redirect("/error");
  }

  if(req.body.date1 != "" && req.body.date2 != "") {

    try {
      //console.log(req.body.date1)
      //console.log(req.body.date2)
      const tasks = await TodoTask.find({dateNum: {"$gte": req.body.date1, "$lte": req.body.date2}}).sort({_id: 1})
      //console.log(tasks)
      res.status(200).render("list.ejs", { todoTasks: tasks });
    }
    catch (err) {
      console.error(err); 
    }
 }
});

//Adv Search - Please edit test when edited
app.post("/advSearch", requireLogin , async (req, res) => {
  //console.log("adv serch function");
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
      const tasks = await TodoTask.find({content: new RegExp(req.body.content, 'i'), date: new RegExp(req.body.date, 'i')}).sort({_id: 1})
      res.status(200).render("list.ejs", { todoTasks: tasks });
    }
    catch (err) {
      console.error(err); 
    }
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

app.get('/account', requireLogin , function(req, res) {
  User.findOne({ userID: req.session.userId })
    .then(user => {
      res.render('account', { user });
    })
    .catch(err => {
      console.log(err);
    });
});

// if changed, update /createTest
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
//console.log(req.body)
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
      res.status(500).redirect('/');
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

// clear - move (,) at the end of (requireLogin) in front after testing
app.route("/clear", requireLogin).get(async (req, res) => {
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

// Downloads
app.get('/download/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const file = await TodoTask.findById(id);
    res.setHeader('Content-Type', file.mimetype);
    res.setHeader('Content-Disposition', `attachment; filename=${file.filename}`);
    res.send(file.data);
  } catch (error) {
    console.error(error);
    res.send('File not found');
  }
});

//Test method
app.get('/Test', requireLogin , async function(req, res){
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

//Test method
app.get('/Test2', requireLogin , async function(req, res){
  const id = req.body._id;
  //console.log("req")
  //console.log(req.body);

  if(req.body.date == ""){
    req.body.date = req.body.defDate
  }
  //console.log("defDate")
  //console.log(req.body.date);
  try {
    const response = await TodoTask.find({ content: req.body.content})
    //console.log(response);
    //console.log("response")
    //console.log(response.body);
    res.send(response);
  } catch (err) {
    res.send(500, err);
  }
});
//Test method
app.get("/Test3", requireLogin , async (req, res) => {
  try {
    const tasks = await TodoTask.find({}).sort({_id: 1})
    res.status(200).send(tasks)
  }
  catch (err) {
    console.error(err);
  }
});
//Search test method
app.post("/searchTest", requireLogin , async (req, res) => {
  //console.log("search function");
  //console.log(req.body.date)

  if(req.body.date1 == "" || req.body.date2 == ""){
    res.status(500).redirect("/error");
  }

  if(req.body.date1 != "" && req.body.date2 != "") {

    try {
      //console.log(req.body.date1)
      //console.log(req.body.date2)
      const tasks = await TodoTask.find({dateNum: {"$gte": req.body.date1, "$lte": req.body.date2}}).sort({_id: 1});
      //console.log(tasks)
      res.status(200).send(tasks);
    }
    catch (err) {
      console.error(err); 
    }
 }
});
//Tag search test
app.post("/tagTest", requireLogin , async (req, res) => {
  //console.log("tag function");
  //console.log(req.body)
  try {
    const tasks = await TodoTask.find({tag: req.body.tag}).sort({_id: 1})
    res.status(200).send(tasks);
  }
  catch (err) {
    console.error(err); 
  }
});
//Adv search test
app.post("/advSearchTest", requireLogin , async (req, res) => {
  //console.log("adv serch function");
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
    res.status(200).send(tasks);
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
      const tasks = await TodoTask.find({content: new RegExp(req.body.content, 'i'), date: new RegExp(req.body.date, 'i')}).sort({_id: 1})
      res.status(200).render("list.ejs", { todoTasks: tasks });
    }
    catch (err) {
      console.error(err); 
    }
 }
});
// clear - move (,) at the end of (requireLogin) in front after testing
app.route("/clearUser", requireLogin).get(async (req, res) => {
  //console.log("clear function")
  
  try {
    const tasks = await User.find({}).sort({_id: 1})
    //console.log(tasks);
  
      //console.log("forloop")
      tasks.forEach(async (post) => {
        //console.log(post.id);
        await User.findByIdAndRemove(post.id)
        
      });
      //console.log("after for loop")

      const tasks1 = await User.find({}).sort({_id: 1})
      //console.log(tasks);
    
        //console.log("forloop")
        tasks1.forEach(async (post) => {
          //console.log(post.id);
          await User.findByIdAndRemove(post.id)
          
        });
        //console.log("after for loop")
      res.redirect("/");
  }
  catch (err) {
    console.error(err);
    res.send(500, err);
  }

});
// Creates test
app.post('/createTest', async (req, res) =>{
  
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
  //console.log("added user")
    res.send(newUser);
  } catch (err) {
    res.send(500, err);
  }
}
});
//Test method
app.get("/Test4", requireLogin , async (req, res) => {
  try {
    const tasks = await User.find({}).sort({_id: 1})
    res.status(200).send(tasks)
  }
  catch (err) {
    console.error(err);
  }
});
//Loggin Test
app.post('/loggingTest', async (req, res) => {
//console.log(req.body)
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
        res.send("25");
      //console.log("I am here");
      }
    }
  } catch (err) {
    console.error(err);
    errors.push({ msg: 'An error occurred, please try again later' });
  }
  });
