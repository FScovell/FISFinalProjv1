class PiecesController < ApplicationController
    def create
        new_piece = Piece.create!(piece_params)
        render json: new_piece, status: :created
    end

    def destroy
        find_piece.destroy!
        head :no_content
    end

    def index
        pieces = Piece.all
        render json: pieces, status: 200
    end

    private

    def find_piece
        Piece.find(params[:id])
    end

    def piece_params
        params.permit(:piece_api_id, :title, :primary_image, :artist_name, :piece_date, :museum_id)
    end
end
