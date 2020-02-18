class HomeController < ApplicationController
  def index
    @category_parents = Category.where(ancestry: nil).all.order("id ASC")
    @category_children = Category.where(ancestry: "1").all.order("id ASC")
    # @lady.children = Category.find(1)
    # @lady.children.each do |child|
    #   puts child.name
    # end

  end
end
