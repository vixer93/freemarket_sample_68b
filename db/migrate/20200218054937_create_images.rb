class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :name, null: false
      t.bigint :product_id, foreign_key: true
      t.timestamps
    end
    add_foreign_key :images, :products, column: :product_id
  end
end
