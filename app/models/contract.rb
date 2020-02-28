class Contract < ApplicationRecord
  validates :product_id, :buyer_id, presence: true
end
