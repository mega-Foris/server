
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person CASCADE; ALTER SEQUENCE person_id_seq restart with 7')
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {id: 1, first_name: 'Austin', last_name:'Jonhstopn', email:'cchxp@virginia.edu', password:'carter'},
        {id: 2, first_name: 'Caroline', last_name:'Odonnell', email:'caroline.odonnell26@gmail.com', password:'caroline'},
        {id: 3, first_name: 'Ross', last_name:'Kiser', email:'charles.todd.bracken@gmail.com', password:'Todd'},
        {id: 4, first_name: 'Mike', last_name:'Balagna', email:'moorejet7891@gmail.com', password:'emily'},
        {id: 5, first_name: 'Taylor', last_name:'Jonhston', email:'ktt1234@gmail.com', password:'Taylor'},
        {id: 6, first_name: 'admin', last_name:'admin', email:'forisADmin@gmail.com', password:'admin'}
      ]);
    });
};
