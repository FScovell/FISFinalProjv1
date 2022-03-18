class Museum < ApplicationRecord
    has_many :walks
    has_many :users, through: :walks
    has_many :pieces
end
