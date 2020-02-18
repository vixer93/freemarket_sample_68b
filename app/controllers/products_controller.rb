class ProductsController < ApplicationController

  def index
    @products = Product.includes(:image).order('created_at DESC')
  end
  
  def new
    @products = Product.all
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
