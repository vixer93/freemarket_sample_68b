class ProductsController < ApplicationController

  def new
    @products = Product.all
  end

  def show
  end
  

  protected
  def product_params
    params.rquire(:product).permit()
  end
end
