class HomeController < ApplicationController
  def index
<<<<<<< HEAD

    @big_categories = Category.where(ancestry: nil).all.order("id ASC")
    @middle_categories = Category.where(ancestry: "1").all.order("id ASC")
    @small_categories = Category.where(ancestry: "1/2").all.order("id ASC")

=======
    @parent = Category.where(ancestry: nil)
    
>>>>>>> 4f31cf53c7e968a713132a8a5e5f716c27c3018f
  end
end
