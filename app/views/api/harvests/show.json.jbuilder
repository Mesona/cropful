json.extract! @harvest, :id, :ripe, :lat, :lng
json.key = @harvest.id
json.harvest_type = @harvest.harvest_type