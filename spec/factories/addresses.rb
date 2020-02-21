FactoryBot.define do

  factory :address do
    # user_id               {1}
    ship_family_name      {"田中"}
    ship_first_name       {"太郎"}
    ship_family_name_kana {"タナカ"}
    ship_first_name_kana  {"タロウ"}
    postal_code           {"123-4567"}
    prefecture_id         {1}
    municipality          {"墨田区"}
    block_number          {"1-1-1"}
    apartment_name        {"テックエキスパート101"}
    phone_number          {"09012345678"}
  end

end