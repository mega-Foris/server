exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('event', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('main_sport').notNullable();
    table.string('difficulty').notNullable();
    table.integer('location_id').unsigned();
    table.foreign('location_id').references('location.id');
    table.integer('capacity');
    table.string('description');
    table.string('image_url');
    table.string('duration');
    table.integer('organizer_id').unsigned();
    table.foreign('organizer_id').references('person.id');
    table.string('date_time').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('event');
};
