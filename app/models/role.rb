# frozen_string_literal: true

class Role
  include Mongoid::Document
  include Mongoid::Timestamps
  has_and_belongs_to_many :users
  # belongs_to :resource, polymorphic: true

  field :name, type: String

  index({
          name: 1,
        },
        unique: true)

  scopify
end
