
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('location', function(table){
    table.increments('id').primary();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip').notNullable();
    table.string('google_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('location');
};
