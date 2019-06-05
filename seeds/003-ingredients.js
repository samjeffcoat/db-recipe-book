
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Cheese'},
        { id: 2, ingredient_name: 'meat'},
        { id: 3, ingredient_name: 'tomato'}
      ]);
    });
};
