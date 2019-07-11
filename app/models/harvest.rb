# == Schema Information
#
# Table name: harvests
#
#  id           :bigint           not null, primary key
#  harvest_type :string           not null
#  ripe         :binary           not null
#  lat          :float            not null
#  lng          :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Harvest < ApplicationRecord
  validates :harvest_type, :ripe, :lat, :lng, presence: true

end
