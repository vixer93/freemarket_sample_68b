class HomeController < ApplicationController
  def index
    @categories = Category.where(ancestry: nil).all.order("id ASC")
  end

  def new
    
  end

  # private
  # def user_params
  #   params.require(:users)
  # end
end
