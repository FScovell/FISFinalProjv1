class AddWikiDataToPieces < ActiveRecord::Migration[7.0]
  def change
    add_column :pieces, :wiki_data, :string
  end
end
