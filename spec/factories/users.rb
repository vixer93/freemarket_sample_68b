FactoryBot.define do

  factory :user do
    nickname              {"taro"}
    email                 {"kkk@gmail.com"}
    password              {"00000000"}
    password_confirmation {"00000000"}
    first_name            {"太郎"}
    last_name             {'田中'}
    first_name_kana       {"タロウ"}
    last_name_kana        {"タナカ"}
    birthday              {"2020/1/13"}
  end

end