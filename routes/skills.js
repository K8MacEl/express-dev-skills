var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')



/* GET users listing. */



// if wanted to make an http request to this route
// it would localhost:3000/skills
// /skills/
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

//:id is called a request paremeter
//GET /skills
router.get('/:id', skillsCtrl.show);
//GET /skills/:id
module.exports = router;
// GET /skill/new <--this new route cannot stay here!