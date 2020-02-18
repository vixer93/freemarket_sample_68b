require 'rails_helper'

describe Card do
  describe '#create' do
    it 'is valid' do
      user = create(:user)
      card = build(:card, user_id: user.id)
      card.valid?
      expect(card).to be_valid
    end

    it 'is invalid without customer_id_token' do
      user = create(:user)
      card = build(:card, user_id: user.id, customer_id_token: "")
      card.valid?
      expect(card.errors[:customer_id_token]).to include("を入力してください")
    end

    it 'is invalid without card_id_token' do
      user = create(:user)
      card = build(:card, user_id: user.id, card_id_token: "")
      card.valid?
      expect(card.errors[:card_id_token]).to include("を入力してください")
    end
  end
end