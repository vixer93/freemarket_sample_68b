class ProductsController < ApplicationController

  def new
    @products = Product.all
  end

  def show
  end

end
