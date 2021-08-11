class Plan < ApplicationRecord
  belongs_to :user
  has_many :recipes, dependent: :destroy

  validates :week_day, :meal, :theme, presence: true
end
