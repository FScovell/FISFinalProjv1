class WalkPiecesController < ApplicationController
    def create
        walk_piece = WalkPiece.create!(walk_piece_params)
        render json: walk_piece, status: :created
    end

    def index
        walk_piece = WalkPiece.all
        render json: walk_piece, status: 200
    end

    def destroy
        find_walk_piece.destroy!
        head :no_content
    end

    private

    def find_walk_piece
        WalkPiece.find(params[:id])
    end

    def walk_piece_params
        params.permit(:piece_id, :walk_id)
    end
end
