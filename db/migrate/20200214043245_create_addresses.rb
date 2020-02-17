class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.references :user,                  foreign_key: true
      t.references :prefecture,            foreign_key: true
      t.string     :ship_family_name,      null: false
      t.string     :ship_first_name,       null: false
      t.string     :ship_family_name_kana, null: false
      t.string     :ship_first_name_kana,  null: false
      t.string     :postal_code,           null: false
      t.string     :municipality,          null: false
      t.string     :block_number,          null: false
      t.string     :apartment_name
      t.string     :phone_number
      t.timestamps
    end
  end
end
