class PiecesController < ApplicationController
    def create
        new_piece = Piece.create!(piece_params)
        render json: new_piece, status: :created
    end

    private

    def piece_params
        params.permit(:piece_api_id, :title, :primary_image, :artist_name, :piece_date, :museum_id)
    end
end
