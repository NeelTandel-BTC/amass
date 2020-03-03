# frozen_string_literal: true

# user model
class User
  include Mongoid::Document
  include Mongoid::Timestamps
  after_create :assign_default_role
  rolify
  devise :database_authenticatable, :registerable,
         :recoverable, :validatable

  field :email,              type: String, default: ''
  field :encrypted_password, type: String, default: ''
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

  has_and_belongs_to_many :roles
  def assign_default_role
    add_role(:admin)
  end
end
