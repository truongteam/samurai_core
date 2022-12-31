module Samurai
  class ApplicationService
    def initialize(event_store = nil)
      @event_store = event_store || Rails.configuration.event_store
      @success = false
    end

    def event_store
      @event_store
    end

    def success(result)
      @success = true
      OpenStruct.new({ success?: true, payload: result })
    end

    def failure(error)
      @success = false
      OpenStruct.new({ success?: false, error: error })
    end

    def success?
      @success
    end

    def stream_name
      self.class.name
    end

    def publish_event(event, metadata)
      event_store.with_metadata(metadata) do
        event_store.publish(event, stream_name: stream_name)
      end
    end
  end
end
