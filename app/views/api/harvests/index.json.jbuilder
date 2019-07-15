@harvests.each do |harvest|
  json.set! harvest.id do
    json.extract! harvest, :harvest_type, :ripe, :lat, :lng, :updated_at
  end
end

