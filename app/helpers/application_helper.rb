# frozen_string_literal: true

module ApplicationHelper
  def server_validations(field)
    return if resource.errors[field].blank?

    "#{field.humanize} " + resource.errors[field].first
  end
end
