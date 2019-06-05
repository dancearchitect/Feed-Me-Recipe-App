# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Recipe.destroy
# User.destroy

User.create(username: "rachelgonzo")


Recipe.create( 
    name: "Spicy Arrabiata Penne",
    meal_image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    cuisine: "Vegetarian",
    region: "Italy",
    cook_time: "30 minutes",
    ingredients: ["penne rigate", "olive oil", "garlic", "chopped tomatoes", "red chile", "italian seasoning", "basil", "parmigiano-reggiano"],
    measurements: ["1 pound", "1/4 cup", "3 cloves", "1 tin", "1/2 teaspoon", "1/2 teaspoon", "6 leaves", "sprinkle"],
    servings: "4",
    instructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, 
    about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, 
    until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. 
    Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    user_id: 1)

Recipe.create(
    name: "Teriyaki Chicken Casserole",
    meal_image: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    cuisine: "Chicken",
    region: "Japan",
    cook_time: "60 minutes",
    ingredients: ["soy sauce", "water", "brown sugar", "ground ginger", "minced garlic", "cornstarch", "chicken breast", "brown rice"],
    measurements: ["3/4 cup", "1/2 cup", "1/4 cup", "1/2 teaspoon", "1/2 teaspoon", "4 tablespoons", "2", "1 (12 oz)", "3 cups"],
    servings: "4",
    instructions: "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. 
    Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. 
    Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. 
    Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, 
    steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to 
    drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. 
    Drizzle each serving with remaining sauce. Enjoy!",
    user_id: 1
)

# Cuisine.create( cuisine_type: "Vegetarian" )
# Cuisine.create( cuisine_type: "Chicken" )