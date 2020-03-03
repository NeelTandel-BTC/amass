module ApplicationHelper

  def server_validations(field)
    "#{field.humanize} " + resource.errors[field].first if resource.errors[field].present?
  end
end
