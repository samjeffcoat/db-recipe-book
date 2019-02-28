
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, ingredient_id: 1},
        { recipe_id: 2, ingredient_id: 2},
        { recipe_id: 3, ingredient_id: 3}
      ]);
    });
};
