class WalkPieceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :walk
  has_one :piece
end
