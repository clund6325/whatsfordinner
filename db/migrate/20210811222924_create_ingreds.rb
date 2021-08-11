class CreateIngreds < ActiveRecord::Migration[6.1]
  def change
    create_table :ingreds do |t|
      t.string :food
      t.string :measurement
      t.integer :calories
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
