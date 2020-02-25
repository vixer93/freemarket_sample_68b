class ContractsController < ApplicationController
  require_relative './../commonclass/payjp.rb'
  before_action :set_product

  def new
  end

  def create
    # contract = Contract.new(buyer_id:   current_user.id,
    #                         product_id: params[:id]
    #                        )
    contract = Contract.new(buyer_id:   current_user.id,
                            product_id: 2
                           )
    if contract.save
      MyPayjp.create_charge_by_token(current_user.card.customer_id,
                                    @product.price)
      @product.status = "1"
      @product.save!

      redirect_to root_path, notice: "購入が完了しました"
    else
      # render :new
      redirect_to root_path
    end
  end

  private

  def set_product
    # @product = Product.find(params[:id])
    @product = Product.find(2)
  end

end
