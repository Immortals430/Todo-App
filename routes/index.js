const express = require('express');
const router = express.Router();
const homeController = require('../controller/home.js');


router.get('/', homeController.home);  // get req for homepage

router.post('/addlist', homeController.addlist); // post req for adding todo list

router.post('/deletelist', homeController.deletelist);  // post req for deleting todo list

router.get('/filter/:category', homeController.filter) // filter task by category

module.exports = router; 