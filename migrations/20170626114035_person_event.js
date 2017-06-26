
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('person_event', function(table){
    table.increments('id').primary();
    table.integer('person_id').unsigned();
    table.integer('event_id').unsigned();
    table.foreign('person_id').references('person.id');
    table.foreign('event_id').references('event.id');
    table.boolean('is_organizer').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('person_event');
};
