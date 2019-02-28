
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'meat', dish_id: 1},
        {id: 2, recipe_name: 'cheese', dish_id: 2},
        {id: 3, recipe_name: 'tomatoes', dish_id: 3}
      ]);
    });
};
