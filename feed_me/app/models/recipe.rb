class Recipe < ApplicationRecord
    serialize :ingredients,Array
    serialize :measurements,Array

    has_many :users
end
