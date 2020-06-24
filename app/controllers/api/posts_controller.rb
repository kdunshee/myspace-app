class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.posts.all
  end

end
