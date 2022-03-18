class User < ApplicationRecord
    has_secure_password
    has_many :walks
    has_many :museums, through: :walks
end
