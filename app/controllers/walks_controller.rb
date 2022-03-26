class WalksController < ApplicationController
    def index
        walks = Walk.all
        render json: walks, status: 200
    end
    
    def show
        render json: find_walk.pieces, status: 200
    end

    def create
        walk = Walk.create!(walk_params)
        render json: walk, status: :created
    end

    def update
        walk = find_walk
        walk.update! walk_params
        render json: walk, status: 200
    end

    def destroy
        find_walk.destroy!
        head :no_content
    end
  
    private

    def find_walk
        Walk.find(params[:id])
    end

    def walk_params
        params.permit(:name, :description, :museum_id, :user_id)
    end
end
