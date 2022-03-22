class Walk < ApplicationRecord
  belongs_to :museum
  belongs_to :user
  has_many :walk_pieces
  has_many :pieces, through: :walk_pieces
end
