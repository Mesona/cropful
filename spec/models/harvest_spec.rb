# == Schema Information
#
# Table name: harvests
#
#  id                 :bigint           not null, primary key
#  harvest_type_id    :string           not null
#  ripe               :boolean          not null
#  lat                :float            not null
#  lng                :float            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  harvest_name       :string           not null
#  seasonal_overwrite :string
#

require 'rails_helper'

RSpec.describe Harvest, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
