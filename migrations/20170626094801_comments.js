
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('comment', function(table){
    table.increments('id').primary();
    table.integer('person_id').unsigned();
    table.integer('event_id').unsigned();
    table.foreign('person_id').references('person.id');
    table.foreign('event_id').references('event.id');
    table.string('comment').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('comment');
};
