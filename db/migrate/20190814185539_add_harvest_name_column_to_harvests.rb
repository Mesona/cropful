class AddHarvestNameColumnToHarvests < ActiveRecord::Migration[5.2]
  def change
    add_column :harvests, :harvest_name, :string, null: false
    add_column :harvests, :description, :text
    add_column :harvests, :img_url, :string

    add_index :harvests, :harvest_name
  end
end
