class HomeController < ApplicationController
  def index
    @categories = Category.where(ancestry: nil).all.order("id ASC")
  end
end
