class CleanController < ApplicationController

  def clean
    DatabaseCleaner.strategy = :truncation

    # then, whenever you need to clean the DB
    DatabaseCleaner.clean
    render json: []
  end

end


=begin
Active Record

DatabaseCleaner[:active_record]

Connection specified as :symbol keys, loaded from config/database.yml. You may also pass in the ActiveRecord model under the :model key.
=end
