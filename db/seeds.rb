# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Harvest.destroy_all

harvest1 = Harvest.create!(harvest_type: 'Lemon', ripe: 'false', lat: 37.299462, lng: -121.987637)
harvest2 = Harvest.create!(harvest_type: 'Fig', ripe: 'false', lat: 37.306208, lng: -121.991172)
harvest3 = Harvest.create!(harvest_type: 'Fig', ripe: 'false', lat: 37.333942, lng: -121.923552)
