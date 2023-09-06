const TodoList = require("../model/todo_list");

// controller function for home request

module.exports.home = (req, res)=>{
    TodoList.find({}, (err, list)=>{
        if(err){
            console.log("Error in retrieving data form database");
        }
        res.render('index.ejs', {
            todo_list: list
        });
    }); 
};

// controller function for addlist

module.exports.addlist = (req, res)=>{
    TodoList.create({
        description: req.body.description,
        category: req.body.category,
        Date: req.body.Date
    });
    
    res.redirect('/');
};


// controller function for deleting list


module.exports.deletelist = (req, res)=>{
    var id = req.body.id;

    TodoList.findByIdAndDelete(id, (err)=>{
        if(err){
            console.log("Error in deleting data");
        }
        res.redirect('/');
    });
};

// Filter

module.exports.filter = (req, res)=>{
    var filter = req.params.category;
    
    TodoList.find({category: filter}, (err, filteredlist)=>{
        if(err){
            console.log('Error in filtering data');
        }

        res.render('index.ejs', {
            todo_list: filteredlist
        })
    })
}