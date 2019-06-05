
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'beef', dish_id:1},
        { id: 2, recipe_name: 'Brisket', dish_id: 2},
        { id: 3, recipe_name: 'chicken', dish_id: 3}
      ]);
    });
};
