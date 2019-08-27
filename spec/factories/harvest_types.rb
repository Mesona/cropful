# == Schema Information
#
# Table name: harvest_types
#
#  id              :bigint           not null, primary key
#  classification  :string           not null
#  harvest_name    :string           not null
#  seasonal_status :string           not null
#  image_url       :string
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryBot.define do
  factory :harvest_type do
    
  end
end
