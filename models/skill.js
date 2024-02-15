
const skills = [
	{id: 125223, skill: 'Create Vanilla JavaScript Game Project', done: true},
	{id: 127904, skill: 'Learn Express', done: false},
	{id: 139608, skill: 'Learn Python', done: false},
    {id: 137608, skill: 'Learn Flexbox', done: true},
    {id: 137699, skill: 'Set up GitHub', done: true}
  ];
  
  module.exports = {
	getAll, // shorthand for getAll: getAll
	getOne, // shorthand for getOne: GetOne
	create,
	deleteOne
  };
//set up parameters so add in ID so it knows what to delete
  function deleteOne(id) {
	//parseInt converts a string to an integer 
	id = parseInt(id);
	//find the index for the todo using an array itrerator method findIndex
	const idx = skills.findIndex(skill => skill.id === id);
	//splice returns a new array but we do not care this time
	//in this we use idx that we just declared and since we want to delete one item its idx, 1
	skills.splice(idx, 1);
  }
  
  function getAll() {
	return skills;
  }
function create(skill){
	//add the id
	skill.id = Date.now() % 1000000;
	//defaults so new skills are not done
	skill.done = false;
	skills.push(skill);
}
  

  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	// The Array.prototype.find iterator method is
	// ideal for finding objects within an array
	return skills.find(skill => skill.id === id);
  }