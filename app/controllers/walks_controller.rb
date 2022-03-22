class WalksController < ApplicationController
    
    def index
        render json: Walk.all
    end
    
    
    def show
        render json: find_walk.pieces
    end
  
    private

    def find_walk
        Walk.find(params[:id])
    end
end
