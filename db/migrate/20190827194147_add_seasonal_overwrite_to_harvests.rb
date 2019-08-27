class AddSeasonalOverwriteToHarvests < ActiveRecord::Migration[5.2]
  def change
    add_column :harvests, :seasonal_overwrite, :string
  end
end
