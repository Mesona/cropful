module HarvestTypes
  HarvestType.destroy_all

  require File.expand_path('../harvest_types/flowers', __FILE__)
  require File.expand_path('../harvest_types/fruits', __FILE__)
  require File.expand_path('../harvest_types/nuts', __FILE__)
  require File.expand_path('../harvest_types/veggies', __FILE__)

end