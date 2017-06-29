const bcrypt = require('bcryptjs');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person CASCADE; ALTER SEQUENCE person_id_seq restart with 11')
    .then(function () {
      // Inserts seed entries
      const salt = bcrypt.genSaltSync(saltRounds);

      return knex('person').insert([
        {id: 1, first_name: 'Austin', last_name:'Jonhstop', email:'cchxp@virginia.edu', password:bcrypt.hashSync('password123', salt)},
        {id: 2, first_name: 'Caroline', last_name:'Odonnell', email:'caroline.odonnell26@gmail.com', password:bcrypt.hashSync('cpassword', salt)},
        {id: 3, first_name: 'Ross', last_name:'Kiser', email:'charles.todd.bracken@gmail.com', password:bcrypt.hashSync('toddpassword', salt)},
        {id: 4, first_name: 'Mike', last_name:'Balagna', email:'moorejet7891@gmail.com', password:bcrypt.hashSync('emilypassword123', salt)},
        {id: 5, first_name: 'Taylor', last_name:'Jonhston', email:'ktt1234@gmail.com', password:bcrypt.hashSync('taylorpassword123', salt)},
        {id: 6, first_name: 'admin', last_name:'admin', email:'forisADmin@gmail.com', password:bcrypt.hashSync('adminpassword123', salt)},
        {id: 7, first_name: 'Cass', last_name:'Cass', email:'C.cass@gmail.com', password:bcrypt.hashSync('casspassword123', salt)},
        {id: 8, first_name: 'CJ', last_name:'CJ', email:'cj.cj@gmail.com', password:bcrypt.hashSync('cjpassword123', salt)},
        {id: 9, first_name: 'Sam', last_name:'Night', email:'hiyou@gmail.com', password:bcrypt.hashSync('hipassword123', salt)},
        {id: 10, first_name: 'Janie', last_name:'Whit', email:'forisADmin23@gmail.com', password:bcrypt.hashSync('forispassword123', salt)},
      ]);
    });
};
