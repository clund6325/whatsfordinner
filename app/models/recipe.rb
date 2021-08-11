class Recipe < ApplicationRecord
  belongs_to :plan
  has_many :ingreds, dependent: :destroy
  
  validates :title, :description, :serving, presence: true
  
end
