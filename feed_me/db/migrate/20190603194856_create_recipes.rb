class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :meal_image
      t.string :cuisine
      t.string :region
      t.string :cook_time
      t.text :ingredients
      t.text :measurements
      t.string :servings
      t.text :instructions

      t.timestamps
    end
  end
end
