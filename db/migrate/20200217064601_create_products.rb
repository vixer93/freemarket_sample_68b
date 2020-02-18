class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :condition, null: false, default: 0
      t.integer :status, null: false, default: 0
      t.string :brand
      t.integer :send_price, null: false, default: 0
      t.integer :ship_day, null: false, default: 0
      t.integer :user_id, null: false, foreign_key: true
      t.integer :category_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
