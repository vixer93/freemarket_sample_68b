class ProductsController < ApplicationController

  def index
    @products = Product.includes(:image).order('created_at DESC')
  end
  
  def new
    @product = Product.new
    @product.images.new
  end

  def create
    @product = Prduct.new(product_params)
    if @product.save
      redirect_to root_path
    else
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
    params.require(:product).permit(:name, :description, :price, :condition, :status, :brand, :send_price, :ship_day, images_attributes: [:name, :_destroy, :id]).merge(user_id: current_user_id, category_id: params[:category][:id], prefecture_id: params[:address][:prefecture_id])
  end

end
