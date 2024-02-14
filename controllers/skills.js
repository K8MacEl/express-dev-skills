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
	new: newSkill,
	create
};

function create(req, res){
	console.log(req.body, "Req, body is the contents of our new skills form");
	// The model is responsible for creating data
  	//if error is thrown see if removing Model solves it bc class demo included model but repo did not
	SkillModel.create(req.body);
  	// Do a redirect anytime data is changed
	res.redirect('/skills');
}

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