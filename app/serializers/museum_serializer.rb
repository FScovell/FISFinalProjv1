class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :website
end
