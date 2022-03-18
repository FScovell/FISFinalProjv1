class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: 200
    end

    def show
        user = User.find session[:user_id]
        render json: user, status: 200
    end
end
