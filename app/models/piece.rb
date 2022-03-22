class Piece < ApplicationRecord
  belongs_to :museum
  has_many :walk_pieces
  has_many :walks, through: :walk_pieces
end
