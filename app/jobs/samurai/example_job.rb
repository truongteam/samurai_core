module Samurai
  class ExampleJob < ApplicationJob
    def perform(params)
      Rails.logger.info "Received #{params.to_json}"
      Karafka.producer.produce_async(
        topic: "example",
        payload: { hello: params }.to_json,
      )
    end
  end
end
