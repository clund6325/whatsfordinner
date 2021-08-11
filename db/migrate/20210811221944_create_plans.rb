class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.string :week_day
      t.string :meal
      t.string :theme
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
