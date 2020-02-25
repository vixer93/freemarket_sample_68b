class ContractsController < ApplicationController
  require_relative './../commonclass/payjp.rb'
  before_action :set_product

  def new
  end

  def create
    contract = Contract.new(buyer_id:   current_user.id,
                            product_id: params[:id]
                           )
    if contract.save
      MyPayjp.create_charge_by_token(current_user.card.customer_id,
                                    @product.price)
      @product.update(status: 1)
      redirect_to root_path, notice: "購入が完了しました"
    else
      render :new
    end
  end

  private

  def set_product
    @product = Product.find(params[:product_id])
  end

end
