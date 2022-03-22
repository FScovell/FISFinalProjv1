class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: 200
    end

    def show
        # user = User.find session[:user_id]
        render json: find_user, status: 200
    end
    private

    def find_user
        User.find(session[:user_id])
    end
end
