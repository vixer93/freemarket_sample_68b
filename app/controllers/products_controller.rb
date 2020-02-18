class ProductsController < ApplicationController

  def new
    @products = Product.all
  end

end
