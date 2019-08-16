class CreateHarvestTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :harvest_types do |t|
      t.string :classification, null: false
      t.string :harvest_name, null: false
      t.string :seasonal_status, null: false
      t.string :image_url
      t.text :description

      t.timestamps
    end
    add_index :harvest_types, :harvest_name
    add_index :harvest_types, :classification
  end
end
