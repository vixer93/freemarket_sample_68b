class CreateContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      t.bigint :product_id, null: false
      t.bigint :buyer_id,   null: false
      t.timestamps
    end
    add_foreign_key :contracts, :products
    add_foreign_key :contracts, :users, column: :buyer_id
  end
end
