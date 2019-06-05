
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', 
  table => {
      table.increments()
      table.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE');
      table.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      
  }
  
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_ingredients')
};
