json.extract! @harvest, :id, :ripe, :lat, :lng, :harvest_type
json.harvest_id = @harvest.id
json.key = @harvest.id