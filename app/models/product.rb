class Product < ApplicationRecord
  has_one :contract, dependent: delete
  belongs_to :category
  belongs_to :user
  has_many :images
  accepts_nested_attributes_for :images, allow_destroy: true
end