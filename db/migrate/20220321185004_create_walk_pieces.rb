class CreateWalkPieces < ActiveRecord::Migration[7.0]
  def change
    create_table :walk_pieces do |t|
      t.belongs_to :walk, null: false, foreign_key: true
      t.belongs_to :piece, null: false, foreign_key: true

      t.timestamps
    end
  end
end
