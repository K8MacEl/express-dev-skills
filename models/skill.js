
const skills = [
	{id: 125223, skill: 'Create Vanilla JavaScript Game Project', done: true},
	{id: 127904, skill: 'Learn Express', done: false},
	{id: 139608, skill: 'Learn Python', done: false},
    {id: 137608, skill: 'Learn Flexbox', done: true},
    {id: 137699, skill: 'Set up GitHub', done: true}
  ];
  
  module.exports = {
	getAll, // shorthand for getAll: getAll
	getOne // shorthand for getOne: GetOne

  };
  
  function getAll() {
	return skills;
  }

  

  function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	// The Array.prototype.find iterator method is
	// ideal for finding objects within an array
	return skills.find(skill => skill.id === id);
  }