
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();
      tbl
      .string('recipe_name', 128)
      .notNullable()
      .unique();

      tbl
      .integer('dish_id').unsigned()
      tbl.foreign('dish_id').references('id').on('dishes')

      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
