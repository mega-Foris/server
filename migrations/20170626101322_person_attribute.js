exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('person_attribute', function(table){
    table.increments('id').primary();
    table.integer('person_id').unsigned();
    table.integer('attribute_id').unsigned();
    table.foreign('person_id').references('person.id');
    table.foreign('attribute_id').references('attribute.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('person_attribute');
};
