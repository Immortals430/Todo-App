const mongoose = require('mongoose')

// schema for database

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    }
});


//mongoose.model() function is used to create a model based on a schema
//mongoose.model('nameOfCollection', schemaObject);

const TodoList = mongoose.model('TodoList', todoSchema);  //


//export TodoList
module.exports = TodoList;
