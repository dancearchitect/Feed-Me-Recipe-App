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

