class Address < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user, optional: true
  belongs_to_active_hash :prefecture

  with_options presence: true do
    validates :postal_code, format: {with: /\A\d{3}[-]\d{4}\z/}
    validates :municipality
    validates :block_number
    validates :ship_family_name
    validates :ship_first_name
  end
end
