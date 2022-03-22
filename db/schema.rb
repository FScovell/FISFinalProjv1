# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_21_185004) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "museums", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pieces", force: :cascade do |t|
    t.integer "piece_api_id"
    t.string "title"
    t.string "primary_image"
    t.string "artist_name"
    t.integer "piece_date"
    t.bigint "museum_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "wiki_data"
    t.index ["museum_id"], name: "index_pieces_on_museum_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "description"
    t.boolean "museumAuthorization"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "walk_pieces", force: :cascade do |t|
    t.bigint "walk_id", null: false
    t.bigint "piece_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["piece_id"], name: "index_walk_pieces_on_piece_id"
    t.index ["walk_id"], name: "index_walk_pieces_on_walk_id"
  end

  create_table "walks", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "museum_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["museum_id"], name: "index_walks_on_museum_id"
    t.index ["user_id"], name: "index_walks_on_user_id"
  end

  add_foreign_key "pieces", "museums"
  add_foreign_key "walk_pieces", "pieces"
  add_foreign_key "walk_pieces", "walks"
  add_foreign_key "walks", "museums"
  add_foreign_key "walks", "users"
end
