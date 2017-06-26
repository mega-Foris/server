
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('attribute', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('type').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('attribute');
};
