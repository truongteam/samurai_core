module Samurai
  class ExampleChannel < ApplicationCable::Channel
    def subscribed
      stream_from "example_#{params[:room]}"
    end
  end
end
