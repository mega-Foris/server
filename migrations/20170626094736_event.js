exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('event', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('main_sport').notNullable();
    table.string('difficulty').notNullable();
    table.string('location_id');
    table.integer('capacity');
    table.string('description');
    table.string('image_url');
    table.string('duration');
    table.dateTime('date_time').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('event');
};
