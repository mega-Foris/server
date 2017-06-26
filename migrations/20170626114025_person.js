
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('person', function(table){
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
//    table.unique('email');
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.boolean('is_active').defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('person');
};
