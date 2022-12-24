module Samurai
    class AuthenticatedController < ApplicationController
        before_action :authenticate_user!
    end
end