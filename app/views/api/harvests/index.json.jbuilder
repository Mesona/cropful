@harvests.each do |harvest|
  json.set! harvest.id do
    json.extract! harvest, :ripe, :lat, :lng, :updated_at
    json.harvest_type = harvest.harvest_Type
  end
end

