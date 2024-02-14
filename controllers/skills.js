// By Convention the model is capitalized!
const Skill = require('../models/skill')

// module.exports = {
// 	index, // shorthand for index: index
// 	show
// }


//export the index controller method
module.exports = {
	index,
	show,
	new: newSkill
};

//function declaration named 
function newSkill(req, res){
	res.render('skills/new', { title: "New Skill"});
}

function index(req, res){
	res.render('skills/index', {skills: Skill.getAll()
	}); 
}

function show(req, res){

	console.log(req.params, " <- req.params")
	// todos/show is the ejs file in the views folder
	res.render('skills/show', {skill: Skill.getOne(req.params.id)})
}