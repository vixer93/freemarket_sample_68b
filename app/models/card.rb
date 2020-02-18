class Card < ApplicationRecord
  belongs_to :user

  validates :customer_id_token, :card_id_token, presence: true
end
