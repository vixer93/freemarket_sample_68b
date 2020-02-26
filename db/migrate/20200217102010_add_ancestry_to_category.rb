class AddAncestryToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :ancestry, :string
    add_index :categories, :ancestry
  end

  def down
    remove_index :categories, :ancestry
    remove_column :categories, :ancestry
  end
end
