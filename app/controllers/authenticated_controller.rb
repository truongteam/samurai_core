class AuthenticatedController < ApplicationController
  before_action :authenticate_user!
  before_action :revalidate

  private

  def revalidate
    response.headers["Cache-Control"] = "no-cache, no-store"
  end
end
