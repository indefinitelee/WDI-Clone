class Robot < ApplicationRecord
  has_many :tasks, dependent: :destroy
  # destroys orphan tasks if a robot is deleted
end
