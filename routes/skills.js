var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')



/* GET users listing. */



// if wanted to make an http request to this route
// it would localhost:3000/skills
// /skills/
router.get('/', skillsCtrl.index);

//:id is calleda request paremeter
//GET /todos
router.get('/:id', skillsCtrl.show);
//GET /todos/:id
module.exports = router;
// GET /todo/new <--this new route cannot stay here!