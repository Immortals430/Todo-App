const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose.js');
const TodoList = require('./model/todo_list.js');

    
app.set('view engine', 'ejs');  // sets view engine to ejs
app.set('views', 'views');  // sets folder for views


// middlewares
app.use(express.urlencoded());  // save form data into body object
app.use(express.static('assets'));  // sets folder location for static files
app.use('/', require('./routes'));  // send incoming home req to routes


// start server at port 8000
app.listen(port, (err)=>{
    if(err){
        console.log("Server malfunction");
    }
    console.log(`Server is up at port: ${port}`);
})