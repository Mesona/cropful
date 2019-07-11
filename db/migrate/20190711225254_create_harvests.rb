class CreateHarvests < ActiveRecord::Migration[5.2]
  def change
    create_table :harvests do |t|
      t.string :harvest_type, null: false
      t.binary :ripe, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :harvests, :harvest_type
    add_index :harvests, :ripe
  end
end
