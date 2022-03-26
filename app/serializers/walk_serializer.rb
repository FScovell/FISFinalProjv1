class WalkSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_one :museum
  has_one :user
  has_many :pieces
end
