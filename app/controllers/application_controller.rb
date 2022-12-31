class ApplicationController < ActionController::Base
  layout "layouts/samurai/application"
  before_action :set_global

  protected

  def set_global
    gon.environment = Rails.env
  end
end
