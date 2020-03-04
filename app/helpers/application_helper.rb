# frozen_string_literal: true

module ApplicationHelper
  def server_validations(field)
    return if resource.errors[field].blank?

    "#{field.humanize} " + resource.errors[field].first
  end

  def test(controller_name)
    controller_name != 'sessions' && controller_name != 'registrations'
  end
end
