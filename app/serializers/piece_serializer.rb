class PieceSerializer < ActiveModel::Serializer
  attributes :id, :piece_api_id, :title, :primary_image, :artist_name, :piece_date
  has_one :museum
end
