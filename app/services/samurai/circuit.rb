module Samurai
  class Circuit
    def default_options
      {
            exceptions: [Net::OpenTimeout, Net::ReadTimeout],
            sleep_window: 300,
            time_window: 60,
            volume_threshold: 10,
            cache: Moneta.new(:Memory, expires: true),
            error_threshold: 50,
          }
    end

    def circuit
      Circuitbox.circuit(:my_service_name, default_options)
    end

    def request
      circuit.run do
        #code that would raise the exception configured in options
        yield
      end
    end
  end
end
