module HarvestTypes
  HarvestType.destroy_all

  # TODO: in the association creation, check for pluralized/singular
  require File.expand_path('../harvest_types/flowers', __FILE__)
  require File.expand_path('../harvest_types/fruits', __FILE__)
  require File.expand_path('../harvest_types/nuts', __FILE__)
  require File.expand_path('../harvest_types/veggies', __FILE__)

  HarvestType.create!(harvest_name: "others",
  seasonal_status: "oos,oos,oos,oos,oos,oos,oos,oos,oos,oos,oos,oos",
  classification: "unknown",
  description: "Not Available.",
  image_url: "https://cdn.pixabay.com/photo/2016/03/08/07/08/question-1243504_1280.png")

end