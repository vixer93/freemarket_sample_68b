class ProductsController < ApplicationController

  def index
  end
  
  def new
    @product = Product.new
    @product.images.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      binding.pry
      render :new
    end
  end

  def show
  end
  

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, :price, :condition, :brand, :send_price, :ship_day).merge(user_id: current_user.id, category_id: 1, prefecture_id: params[:product][:prefecture_id], status: "0")
  end

end
