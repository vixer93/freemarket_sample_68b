class Product < ApplicationRecord
  has_one :contract, dependent: delete
  belongs_to :category
  belongs_to :user
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true

  enum condition:   { "新品/未使用": 0, "未使用に近い": 1, "目立った傷や汚れなし": 2, "やや傷や汚れなし": 3, "傷や汚れあり": 4, "全体的に状態が悪い": 5 }
  enum status:      { "出品中": 0, "売却済": 1 }
  enum send_price:  { "出品者負担": 0, "購入者負担": 1 }
  enum ship_day:    { "1~2日で発送": 0, "2~3日で発送": 1, "4~7日で発送": 2 }
end