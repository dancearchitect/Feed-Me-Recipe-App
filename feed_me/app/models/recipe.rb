class Recipe < ApplicationRecord
    serialize :ingredients,Array
    serialize :measurements,Array

    belongs_to :user
end
