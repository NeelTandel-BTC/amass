class Booking
  include Mongoid::Document
  include Mongoid::Timestamps
  include SimpleEnum::Mongoid

  field :file_name, type: String
  field :size, type: Integer
  field :status, type: Integer

  mount_uploader :document_file, DocumentFileUploader
  as_enum :status, %i{file_uploaded extracting_data data_processed data_validated processing_erp completed error_processing}
end
