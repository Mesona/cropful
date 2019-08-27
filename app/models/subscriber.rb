# == Schema Information
#
# Table name: subscribers
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscriber < ApplicationRecord
  validates :email, presence: true
  valudates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
