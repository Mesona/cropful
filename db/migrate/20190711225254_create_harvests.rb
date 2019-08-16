class CreateHarvests < ActiveRecord::Migration[5.2]
  def change
    create_table :harvests do |t|
      t.string :harvest_type_id, null: false
      t.boolean :ripe, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :harvests, :harvest_type_id
    add_index :harvests, :ripe
    add_index :harvests, :lat
    add_index :harvests, :lng
  end
end
