class HomeController < ApplicationController
  def index
    @newProducts = Product.includes(:images).where(status: 0).order("RAND()")
    @brandProducts = Product.includes(:images).where(status: 0).order("id DESC")
  end

  def new
    
  end
end
