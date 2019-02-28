
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_name: 'Tacos'},
        {id: 2, dish_name: 'Burritos'},
        {id: 3, dish_name: 'Flautas'}
      ]);
    });
};
