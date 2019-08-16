class RemoveDescriptionAndOthersFromHarvest < ActiveRecord::Migration[5.2]
  def change
    remove_column :harvests, :description, :text
    remove_column :harvests, :img_url, :string
  end
end
