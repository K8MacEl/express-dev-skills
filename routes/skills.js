var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')
/* GET users listing. */



// if wanted to make an http request to this route
// it would localhost:3000/skills
// /skills/
router.get('/', skillsCtrl.index);


// example requests
// /todos/1
// /todos/2
// /todos/99
// :id is called a request parameter,
// inside the show function in the ctrl
// you have a req.params object with a key
// of id
router.get('/:id', skillsCtrl.show)
module.exports = router;

console.log('./skills')