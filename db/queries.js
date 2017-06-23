const knex = require('./knex');

module.exports = {
  getAllEvents(){
    return knex('events');
  },

	getAllUsers(){
		console.log('YOOOOOOO!');
	}
};
