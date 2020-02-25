require 'rails_helper'

describe Product do
  describe '#create' do
    it "is valid " do
      user     = create(:user)
      category = create(:category)
      product  = build(:product, user_id: user.id, category_id: category.id)
      product.valid?
      expect(product).to be_valid
    end

    it "is valid without name " do
      user    = build(:user)
      product = build(:product, user_id: user.id, name: "")
      product.valid?
      expect(product.errors[:name]).to include("を入力してください")
    end

    it "is valid without description " do
      user    = build(:user)
      product = build(:product, user_id: user.id, description: "")
      product.valid?
      expect(product.errors[:description]).to include("を入力してください")
    end

    it "is valid without price " do
      user    = build(:user)
      product = build(:product, user_id: user.id, price: "")
      product.valid?
      expect(product.errors[:price]).to include("を入力してください")
    end

    it "is valid without condition " do
      user    = build(:user)
      product = build(:product, user_id: user.id, condition: "")
      product.valid?
      expect(product.errors[:condition]).to include("を入力してください")
    end

    it "is valid without status " do
      user    = build(:user)
      user.save
      product = build(:product, user_id: user.id, status: "")
      product.valid?
      expect(product.errors[:status]).to include("を入力してください")
    end

    it "is valid without send_price " do
      user    = build(:user)
      product = build(:product, user_id: user.id, send_price: "")
      product.valid?
      expect(product.errors[:send_price]).to include("を入力してください")
    end

    it "is valid without ship_day " do
      user    = build(:user)
      product = build(:product, user_id: user.id, ship_day: "")
      product.valid?
      expect(product.errors[:ship_day]).to include("を入力してください")
    end

    it "is valid without brand " do
      user     = create(:user)
      category = create(:category)
      product  = build(:product, user_id: user.id, category_id: category.id)
      product.valid?
      expect(product).to be_valid
    end

    it "is valid without prefecture_id " do
      user    = build(:user)
      product = build(:product, user_id: user.id, prefecture_id: nil)
      product.valid?
      expect(product.errors[:prefecture_id]).to include("を入力してください")
    end

    it "is valid without category_id " do
      user    = build(:user)
      product = build(:product, user_id: user.id, category_id: nil)
      product.valid?
      expect(product.errors[:category_id]).to include("を入力してください")
    end
  end
end

