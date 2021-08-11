class Ingred < ApplicationRecord
  belongs_to :recipe

  validates :food, :measurement, :calories, presence: true
end
