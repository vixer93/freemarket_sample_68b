FactoryBot.define do

  factory :product do
    name                  {"coffee"}
    description           {"黒い飲み物"}
    price                 {100}
    condition             {2}
    status                {1}
    send_price            {1}
    ship_day              {1}
    brand                 {"スターバックス"}
    prefecture_id         {1}
  end

end