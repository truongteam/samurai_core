module Samurai
  class ApplicationController < ActionController::Base
    before_action :set_global

    protected

    def set_global
      gon.environment = Rails.env
    end
  end
end
