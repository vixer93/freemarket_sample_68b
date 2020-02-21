class HomeController < ApplicationController
  def index
    @parent = Category.where(ancestry: nil)
    end
end
