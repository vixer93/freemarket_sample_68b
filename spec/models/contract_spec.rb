require 'rails_helper'

describe Contract do
  describe '#create' do
    it 'is valid' do
      user = create(:user)
      contract = build(:contract, buyer_id: user.id)
      contract.valid?
      expect(contract).to be_valid
    end

    it 'is invalid without product_id' do
      user = create(:user)
      contract = build(:contract, buyer_id: user.id, product_id: "")
      contract.valid?
      expect(contract.errors[:product_id]).to include("を入力してください")
    end

    it 'is invalid without buyer_id' do
      user = create(:user)
      contract = build(:contract, buyer_id: user.id, buyer_id: "")
      contract.valid?
      expect(contract.errors[:buyer_id]).to include("を入力してください")
    end
  end

end
