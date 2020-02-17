require 'rails_helper'

describe Address do
  describe '#create' do
    it "is valid " do
      user    = build(:user)
      address = build(:address, user_id: user.id)
      address.valid?
      expect(address).to be_valid
    end

    it "is valid without apartment name" do
      user    = build(:user)
      address = build(:address, user_id: user.id, apartment_name: "")
      address.valid?
      expect(address).to be_valid
    end

    it "is valid without phone number" do
      user    = build(:user)
      address = build(:address, user_id: user.id, phone_number: "")
      address.valid?
      expect(address).to be_valid
    end

    it "is invalid without ship_family_name" do
      user    = build(:user)
      address = build(:address, user_id: user.id, ship_family_name: "")
      address.valid?
      expect(address.errors[:ship_family_name]).to include("can't be blank")
    end

    it "is invalid without ship_first_name" do
      user    = build(:user)
      address = build(:address, user_id: user.id, ship_first_name: "")
      address.valid?
      expect(address.errors[:ship_first_name]).to include("can't be blank")
    end

    it "is invalid without ship_family_name_kana" do
      user    = build(:user)
      address = build(:address, user_id: user.id, ship_family_name_kana: "")
      address.valid?
      expect(address.errors[:ship_family_name_kana]).to include("can't be blank")
    end

    it "is invalid without ship_first_name_kana" do
      user    = build(:user)
      address = build(:address, user_id: user.id, ship_first_name_kana: "")
      address.valid?
      expect(address.errors[:ship_first_name_kana]).to include("can't be blank")
    end

    it "is invalid without postal_code" do
      user    = build(:user)
      address = build(:address, user_id: user.id, postal_code: "")
      address.valid?
      expect(address.errors[:postal_code]).to include("can't be blank")
    end

    it "is invalid without prefecture_id" do
      user    = build(:user)
      address = build(:address, user_id: user.id, prefecture_id: nil)
      address.valid?
      expect(address.errors[:prefecture_id]).to include("can't be blank")
    end

    it "is invalid without municipality" do
      user    = build(:user)
      address = build(:address, user_id: user.id, municipality: "")
      address.valid?
      expect(address.errors[:municipality]).to include("can't be blank")
    end

    it "is invalid without block_number" do
      user    = build(:user)
      address = build(:address, user_id: user.id, block_number: "")
      address.valid?
      expect(address.errors[:block_number]).to include("can't be blank")
    end

    it "is invalid with incorrect postal_code format" do
      user    = build(:user)
      address = build(:address, user_id: user.id, postal_code: "1234567")
      address.valid?
      expect(address.errors[:postal_code]).to include("is invalid")
    end
  end
end