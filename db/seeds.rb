# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


freddy = User.create(username: "freddy", password: "test", description: "working on my code", museumAuthorization: true)
sam = User.create(username: "sam", password: "test", description: "teaching", museumAuthorization: false)

met = Museum.create(name: "The Metropolitan Museum of Art", location: "New York City", website: "https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv")

