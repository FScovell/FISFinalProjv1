class Walk < ApplicationRecord
  belongs_to :museum
  belongs_to :user
  has_many :walk_pieces, dependent: :destroy
  has_many :pieces, through: :walk_pieces
  validates :name, uniqueness: true
end
