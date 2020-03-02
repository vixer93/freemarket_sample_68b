# README

# アプリケーション概要
メルカリのコピーサイトです。6人のチームでアジャイル開発を行いました。

# 機能一覧
●ユーザー登録、ログイン機能(ウィザード形式)

●商品出品機能

●商品購入機能

●クレジットカード登録機能(PayJP)

# 使用技術
## ◼︎言語
### バックエンド
Ruby 2.5.1
### フロントエンド
jquery 1.12.4
## ◼︎フレームワーク
Ruby on Rails 5.2.4.1
## ◼︎データベース
MySQL 5.6.47
## ◼︎インフラ
AWS EC2

AWS S3

## デプロイ
Capistranoによる自動デプロイ

## ER Diagram




![freemarket_sample_68b (2)](https://user-images.githubusercontent.com/58249300/74336631-fd3f8400-4de1-11ea-9233-1b2786dfd3bb.png)






## userテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false,uniqueness:{case_sensitive: false},format: {with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i}|
|password|String|null: false, length: {minimum: 7}|
|password_conform|String|null: false|
|first_name|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|
|last_name|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|
|first_name_kana|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|
|last_name_kana|String|null: false, format: {with: /^[ -~｡-ﾟ]*$/}|


### Association
- has_many :products,dependent:delete_all
- has_many :contract_histories,dependent:delete_all
- has_one  :address,dependent:delete
- has_one  :card,dependent:delete



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
|buyer_id|Integer|null: false|
|category_id|Integer|null: false,foreign_key: true|

### Association
- has_many :product_images,dependent:delete_all
- has_one  :contract_history,dependent:delete
- belongs_to :category　
- belongs_to :user



## addressテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|Integer|null:false,foreign_key: true|
|postal_code|String|null: false, format: {with:/\A\d{3}[_]\d{4}\z/}|
|prefecture_id|String|null: faise, foreign_key: true|
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



## contract_historyテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|Integer|null: false,foreign_key:true|
|buyer_id|Integer|null: false,foreign_key: true|

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
- has_many :products
- has_ancestry


