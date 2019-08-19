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
  before_validation(on: :create) do
    self.assign_harvest_type
  end
  # before_validation :assign_harvest_type
  # attr_accessor :harvest_type

  def assign_harvest_type
    plural_name = pluralize(self.harvest_name)
    if HarvestType.find_by(harvest_name: plural_name) != nil
      self.harvest_type = HarvestType.find_by(harvest_name: plural_name)
    else
      self.harvest_type = HarvestType.find_by(harvest_name: "others")
    end
  end

  def pluralize(name)
    if name[-1] == "y"
      return name[0, name.length - 1] + "ies"
    elsif name[-1] == "o"
      return name + "es"
    else
      return name + "s"
    end
  end

  # TODO:
  # BELONGS_TO USER
  belongs_to :harvest_type
end
