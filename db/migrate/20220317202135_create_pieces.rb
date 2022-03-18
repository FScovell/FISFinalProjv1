class CreatePieces < ActiveRecord::Migration[7.0]
  def change
    create_table :pieces do |t|
      t.integer :piece_api_id
      t.string :title
      t.string :primary_image
      t.string :artist_name
      t.integer :piece_date
      t.belongs_to :museum, null: false, foreign_key: true

      t.timestamps
    end
  end
end
