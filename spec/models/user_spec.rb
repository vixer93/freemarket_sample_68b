require 'rails_helper'

describe User do
  describe '#create' do
    it 'is valid' do
      user = build(:user)
      user.valid?
      expect(user).to be_valid
    end

    it 'is invalid without email' do
      user = build(:user, email: "")
      user.valid?
      expect(user.errors[:email]).to include("を入力してください")
    end

    it 'is invalid without password' do
      user = build(:user, password: "")
      user.valid?
      expect(user.errors[:password]).to include("を入力してください")
    end

    it 'is invalid without password_confirmation' do
      user = build(:user, password_confirmation: "")
      user.valid?
      expect(user.errors[:password_confirmation]).to include("とパスワードの入力が一致しません")
    end

    it 'is invalid without nickname' do
      user = build(:user, nickname: "")
      user.valid?
      expect(user.errors[:nickname]).to include("を入力してください")
    end

    it 'is invalid without first_name' do
      user = build(:user, first_name: "")
      user.valid?
      expect(user.errors[:first_name]).to include("を入力してください")
    end

    it 'is invalid without last_name' do
      user = build(:user, last_name: "")
      user.valid?
      expect(user.errors[:last_name]).to include("を入力してください")
    end

    it 'is invalid without first_name_kana' do
      user = build(:user, first_name_kana: "")
      user.valid?
      expect(user.errors[:first_name_kana]).to include("を入力してください")
    end

    it 'is invalid without last_name_kana' do
      user = build(:user, last_name_kana: "")
      user.valid?
      expect(user.errors[:last_name_kana]).to include("を入力してください")
    end

    it 'is invalid without birthday' do
      user = build(:user, birthday: "")
      user.valid?
      expect(user.errors[:birthday]).to include("を入力してください")
    end

    it 'is invalid with a duplicate email address' do
      user = create(:user)
      another_user = build(:user, email: user.email)
      another_user.valid?
      expect(another_user.errors[:email]).to include("はすでに存在します")
    end

    it 'is invalid with incorrect email format' do
      user = build(:user, email: "aaa@gmail,com")
      user.valid?
      expect(user.errors[:email]).to include("は不正な値です")
    end

    it 'should be saved lower case email address' do
      user = create(:user, email: "AAA@gmail.com")
      expect(user.email).to eq("aaa@gmail.com")
    end

    it 'is valid length more than 7 word' do
      user = build(:user, password: "aaaaaaa", password_confirmation: "aaaaaaa")
      user.valid?
      expect(user).to be_valid
    end

    it 'is invalid length less than 7 word' do
      user = build(:user, password: "aaa", password_confirmation: "aaa")
      user.valid?
      expect(user.errors[:password]).to include("は6文字以上で入力してください", "は7文字以上で入力してください")
    end

    it 'is invalid with incorrect first_name format' do
      user = build(:user, first_name: "TARO")
      user.valid?
      expect(user.errors[:first_name]).to include("は不正な値です")
    end

    it 'is invalid with incorrect last_name format' do
      user = build(:user, last_name: "TANAKA")
      user.valid?
      expect(user.errors[:last_name]).to include("は不正な値です")
    end

    it 'is invalid with incorrect first_name_kana format' do
      user = build(:user, first_name_kana: "たろう")
      user.valid?
      expect(user.errors[:first_name_kana]).to include("は不正な値です")
    end

    it 'is invalid with incorrect last_name_kana format' do
      user = build(:user, last_name_kana: "たなか")
      user.valid?
      expect(user.errors[:last_name_kana]).to include("は不正な値です")
    end
  end
end