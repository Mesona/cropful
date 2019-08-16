@hts.each do |ht|
  json.set! ht.id do
    json.extract! ht, :id, :classification, :harvest_name, :seasonal_status, :image_url, :description
  end
end

