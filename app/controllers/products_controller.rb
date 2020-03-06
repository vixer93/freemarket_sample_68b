class ProductsController < ApplicationController
  before_action :set_product,    only: [:show, :edit, :update, :destroy]
  before_action :set_categories, only: [:edit, :update]

  def new
    @product = Product.new
    @product.images.new
  end

  def create
    @product = Product.new(product_params)
    if params[:product][:images_attributes] && @product.save
      redirect_to root_path
    else
      @product.images.new
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    binding.pry
    if params[:product][:images_attributes] && @product.update(edit_product_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    if @product.destroy
      redirect_to root_path
    else
      render :show
    end
  end


  def mid_category
    @mid_categories = Category.where(ancestry: params[:big_category_id])
    render json: @mid_categories
  end

  def small_category
    @small_categories = Category.where(ancestry: "#{params[:big_category_id]}/#{params[:mid_category_id]}")
    render json: @small_categories
  end

  private
  def product_params
    params.require(:product)
      .permit(:name, :description, :price, :condition, :brand, :send_price,
              :ship_day, images_attributes: [:name])
      .merge(user_id: current_user.id, category_id: params[:product][:category_id],
            prefecture_id: params[:product][:prefecture_id], status: 0)
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def edit_product_params
    params.require(:product).permit(:name, :description, :price, :condition, :brand, :send_price, :ship_day, images_attributes: [:name, :_destroy, :id])
  end

  def set_categories
    @categories = Category.where(ancestry: nil)
  end

end
