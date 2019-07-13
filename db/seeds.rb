# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Harvest.destroy_all

test_harvest_1 = Harvest.create!(harvest_type: 'None', ripe: 'false', lat: 37.298703, lng: -121.987777)
test_harvest_1 = Harvest.create!(harvest_type: 'None', ripe: 'false', lat: 37.299522, lng: -121.989247)
test_harvest_1 = Harvest.create!(harvest_type: 'None', ripe: 'false', lat: 37.299906, lng: -121.986071)

harvest1 = Harvest.create!(harvest_type: 'Lemon', ripe: 'false', lat: 37.299462, lng: -121.987637)
