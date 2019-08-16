# == Schema Information
#
# Table name: harvest_types
#
#  id              :bigint           not null, primary key
#  classification  :string           not null
#  harvest_name    :string           not null
#  seasonal_status :string           not null
#  image_url       :string
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class HarvestType < ApplicationRecord
  validates :classification, :harvest_name, :seasonal_status, presence: true

  has_many :harvests
end
