class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  with_options presense: true do
    validates :nickname
    validates :birthday
    validates :email,    uniqueness: {case_sensitive: false},
                         format: {with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i}
    validates :password, length: {minimum: 7}

    with_options format: {with: /^[ -~｡-ﾟ]*$/} do
      validates :first_name
      validates :last_name
      validates :first_name_kana
      validates :last_name_kana
    end
  end
end
