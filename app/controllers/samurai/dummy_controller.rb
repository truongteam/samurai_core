module Samurai
  class DummyController < AuthenticatedController
    def index
      respond_to do |format|
        format.pdf {
          @pdf = InvoicePrinter.render(
            document: invoice,
          )
          send_data @pdf, type: "application/pdf", disposition: "inline"
        }
      end
    end
  end
end
