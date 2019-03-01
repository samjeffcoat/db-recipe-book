const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

module.exports = {
  //get all dishes
  getDishes: () => {
    return db("dishes");
  },

  //get dishes by id
  getDish: id => {
    return db("dishes").where("id", id);
  },

  //add a dish
  addDish: dish => {
    return db("dishes").insert(dish);
  },

  //get  recipes
  getRecipes: () => {
    return db("recipes").leftJoin("dishes", "recipes.dish_id", "dishes.id");
  },
  // get a recipe
  getRecipe: id => {
    return db("recipes")
      .select(["dishes.dish_name", "recipes.recipe_name"])
      .from("recipes")
      .leftJoin("dishes", "recipes.dish_id", "dishes.id")
      .where("recipes.id", id);
  },

  //get ingredients for specific dish
  getIngredients: id => {
    return db("recipes")
      .select([
        "dishes.dish_name",
        "recipes.recipe_name",
        "ingredients.ingredient_name"
      ])
      .from("recipes")
      .leftJoin(
        "recipes_ingredients",
        "recipes.id",
        "recipes_ingredients.recipe_id"
      )
      .leftJoin(
        "ingredients",
        "recipes_ingredients.ingredient_id",
        "ingredients.id"
      )
      .leftJoin("dishes", "recipes.dish_id", "dishes.id")
      .where("recipes.id", id);
  },
  // add a new recipe
  addRecipe: recipe => {
    return db("recipes").insert(recipe);
  }
};
