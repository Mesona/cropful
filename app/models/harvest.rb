# == Schema Information
#
# Table name: harvests
#
#  id              :bigint           not null, primary key
#  harvest_type_id :string           not null
#  ripe            :boolean          not null
#  lat             :float            not null
#  lng             :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  harvest_name    :string           not null
#

class Harvest < ApplicationRecord
  validates :harvest_name, :lat, :lng, presence: true


  # TODO:
  # BELONGS_TO USER
  belongs_to :harvest_type
end
