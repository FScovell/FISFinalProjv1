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

lovely = Walk.create(name: "Lovely", description: "lovely", museum_id: 1, user_id: 1)
mar12 = Walk.create(name: "Mar12", description: "wonderful", museum_id: 1, user_id: 1)

tp = Piece.create(piece_api_id: 197095, title:"Hercules and Nessus", primary_image:"https://images.metmuseum.org/CRDImages/es/original/DT5072.jpg", artist_name:"Annibale Fontana", piece_date: 1584, museum_id: 1, wiki_data: "https://www.wikidata.org/wiki/Q3618059")

wp = WalkPiece.create(walk_id: 1, piece_id: 1)