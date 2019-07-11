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

require 'rails_helper'

RSpec.describe Harvest, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
