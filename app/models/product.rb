class Product < ApplicationRecord
  # has_one :contract, dependent: delete
  belongs_to :category
  belongs_to :user
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true

  enum condition:   { brand_new: 0, near_to_unused: 1, no_scrach: 2, slight_scrach: 3, has_scrach: 4, bad_state: 5 }
  enum status:      { display: 0, sold: 1 }
  enum send_price:  { listing_person: 0, buyer_burden: 1 }
  enum ship_day:    { early_ship: 0, mid_ship: 1, late_ship: 2 }

  with_options presence: true do
    validates :name
    validates :description
    validates :price
    validates :condition
    validates :status
    validates :send_price
    validates :ship_day
  end
end