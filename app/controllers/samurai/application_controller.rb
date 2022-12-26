module Samurai
  class ApplicationController < ActionController::Base
    before_action :set_global

    protected

    def set_global
      gon.environment = Rails.env
      response.headers["Cache-Control"] = "no-cache, no-store"
    end
  end
end
