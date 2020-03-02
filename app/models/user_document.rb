class UserDocument
  include Mongoid::Document
  include Mongoid::Timestamps
  mount_uploader :file, FileUploader

end
