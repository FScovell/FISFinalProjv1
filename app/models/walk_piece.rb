class WalkPiece < ApplicationRecord
  belongs_to :walk
  belongs_to :piece
  validates :walk_id, uniqueness: {scope: :piece_id}
end
