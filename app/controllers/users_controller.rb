class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: 200
    end

    def show
        # user = User.find session[:user_id]
        render json: find_user, status: 200
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end
    
    def update
        user_id = params[:id]
        user = User.find(user_id)
        user.update!(user_params)
        render json: user, status: 200
    end

    def destroy
        user_id = params[:id]
        user = User.find(user_id)
        user.destroy!
        head :no_content
    end

    private

    def find_user
        User.find(session[:user_id])
    end
    def user_params
        params.permit(:username, :description, :password_digest, :museumAuthorization)
    end
end
