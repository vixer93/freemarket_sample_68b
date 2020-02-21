class CardsController < ApplicationController
  require "payjp"
  require_relative './../commonclass/payjp.rb'
  before_action :set_card

  def index
    if @card.present?
      Payjp.api_key = "sk_test_85fe27c2e2a8ea13cd45a930"
      customer = Payjp::Customer.retrieve(@card.customer_id)
      @card_information = customer.cards.retrieve(@card.card_id)

      @card_brand = @card_information.brand
      case @card_brand
      when "Visa"
        @card_src = "visa.gif"
      when "JCB"
        @card_src = "jcb.gif"
      when "MasterCard"
        @card_src = "master.gif"
      when "American Express"
        @card_src = "amex.gif"
      when "Diners Club"
        @card_src = "diner.gif"
      when "Discover"
        @card_src = "discover.gif"
      end
    end
  end

  def new
    card = Card.where(user: current_user).first
    redirect_to action: "index" if card.present?
  end


  def create
    Payjp.api_key = 'sk_test_85fe27c2e2a8ea13cd45a930'

    if params['payjp-token'].blank?
      redirect_to action: "new"
    else
      customer = Payjp::Customer.create(
        email: current_user.email,
        card: params['payjp-token'],
      )
      @card = Card.new(user: current_user, customer_id: customer.id, card_id: customer.default_card)
      if @card.save
        redirect_to action: "index"
      else
        redirect_to action: "create"
      end
    end
  end

  def destroy
    Payjp.api_key = "sk_test_85fe27c2e2a8ea13cd45a930"
    customer = Payjp::Customer.retrieve(@card.customer_id)
    customer.delete
    if @card.destroy
      redirect_to action: "index", notice: "削除しました"
    else
      redirect_to action: "index", alert: "削除できませんでした"
    end
  end


  # def pay
  #   MyPayjp.create_charge_by_token(Card.first.customer_id,1000)
  #   redirect_to root_path
  # end

  private

  def set_card
    @card = Card.where(user: current_user).first if Card.where(user: current_user).present?
  end
end