# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_03_201910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "meal_image"
    t.string "cuisine"
    t.string "region"
    t.string "cook_time"
    t.string "ingredients1"
    t.string "ingredients2"
    t.string "ingredients3"
    t.string "ingredients4"
    t.string "ingredients5"
    t.string "ingredients6"
    t.string "ingredients7"
    t.string "ingredients8"
    t.string "ingredients9"
    t.string "ingredients10"
    t.string "measurements1"
    t.string "measurements2"
    t.string "measurements3"
    t.string "measurements4"
    t.string "measurements5"
    t.string "measurements6"
    t.string "measurements7"
    t.string "measurements8"
    t.string "measurements9"
    t.string "measurements10"
    t.string "servings"
    t.text "instructions"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
