class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :description, :museumAuthorization
end
