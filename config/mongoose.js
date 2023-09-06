const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://Immortals430:${process.env.ATLAS_DB}@immortals.mpqexs2.mongodb.net/todo_list`); //  start mongodb server

const db = mongoose.connection;

// if error, error msg will appear in console else success msg appear

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', ()=>{
    
    console.log('Successfully connected to the database')
});
