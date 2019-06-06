class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :meal_image
      t.string :cuisine
      t.string :region
      t.string :cook_time
      t.string :ingredients1
      t.string :ingredients2
      t.string :ingredients3
      t.string :ingredients4
      t.string :ingredients5
      t.string :ingredients6
      t.string :ingredients7
      t.string :ingredients8
      t.string :ingredients9
      t.string :ingredients10
      t.string :measurements1
      t.string :measurements2
      t.string :measurements3
      t.string :measurements4
      t.string :measurements5
      t.string :measurements6
      t.string :measurements7
      t.string :measurements8
      t.string :measurements9
      t.string :measurements10
      t.string :servings
      t.text :instructions
      t.integer :user_id

      t.timestamps
    end
  end
end
