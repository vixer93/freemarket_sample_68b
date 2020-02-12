# README

## ER Diagram

![freemarket_sample_68b (1)](https://user-images.githubusercontent.com/58249300/74335932-9ff70300-4de0-11ea-9829-85890e87775a.png)



## userテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false,uniqueness:{case_sensitive: false},format: {with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i}|
|password|String|null: false, length: {minimum: 7}|
|password_conform|String|null: false|
|first_name|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|
|last_name|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|
|first_name_|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|
|last_name_kana|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|

### Association
- has_many :products
- has_many :contract_histories
- has_one  :address
- has_one  :card



## productsテーブル
|Column|Type|Options|
|------|----|-------|
|name|String|null: false|
|description|Text|null: false|
|price|Integer|null: false|
|condition|Integer|null: false（enum）|
|status|Integer|null: false(enum)|
|brand|String|
|send_price|Integer|null: false(enum)|
|ship_day|Integer|null: false（enum）|
|user_id|Integer|null: false, foreign_key: true|
|ship_from_id|Integer|null: false,foreign_key: true|
|category_id|Integer|null: false,foreign_key: true|

### Association
- has_many :product_images
- has_one  :contract_history
- belongs_to :category
- belongs_to :ship_from
- belongs_to :user



## addressテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|Integer|null:false,foreign_key: true|
|postal_code|String|null: false, format: {with:/\A\d{3}[_]\d{4}\z/}|
|prefectures|String|null: faise|
|municipality|String|null: faise|
|block_number|String|null: faise|
|apartment_name|String|

### Association
- belongs_to :user



## cardsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|Integer|null: false,foreign_key: true|
|customer_id|String|null: false|
|card_id|String|null: false|

### Association
- belongs_to :user



## ship_fromテーブル
|Column|Type|Options|
|------|----|-------|
|name|String|null: false|null: false｜

### Association
- has_many :products




## contract_historyテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|Integer|null: false,foreign_key:true|
|user_id|Integer|null: false,foreign_key: true|

### Association
- belongs_to :product
- belongs_to :user



## product_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|Integer|foreign_key: true|
|name|String|null: false|

### Association
- belongs_to :product




## categoryテーブル
|Column|Type|Options|
|------|----|-------|
|name|String|null: false|
|ancestry|String|null: false|

### Association
- has_ancestry :product

