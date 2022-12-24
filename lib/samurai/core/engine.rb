require 'vite_ruby'

module Samurai
  module Core
    class Engine < ::Rails::Engine
      isolate_namespace Samurai
      delegate :vite_ruby, to: :class

      def self.vite_ruby
        @vite_ruby ||= ::ViteRuby.new(root: root)
      end

      cdn =  "https://samuraierp.netlify.com"
      urls = ["/#{ vite_ruby.config.public_output_dir }"]
      if Rails.env.production?
        urls = ["#{cdn}/#{ vite_ruby.config.public_output_dir }"]
      end
      config.app_middleware.use(Rack::Static,
        urls: urls,
        root: root.join(vite_ruby.config.public_dir))

      initializer 'vite_rails_engine.proxy' do |app|
        if vite_ruby.run_proxy?
          app.middleware.insert_before 0, ::ViteRuby::DevServerProxy, ssl_verify_none: true, vite_ruby: vite_ruby
        end
      end

      initializer 'vite_rails_engine.logger' do
        config.after_initialize do
          vite_ruby.logger = Rails.logger
        end
      end

      initializer :append_migrations do |app|
        unless app.root.to_s.match(root.to_s)
          config.paths["db/migrate"].expanded.each do |p|
            app.config.paths["db/migrate"] << p
          end
        end
      end
      config.samurai_core = ActiveSupport::OrderedOptions.new
      initializer 'samurai_core.configuration' do |app|
        app.config.samurai_core[:mounted_path] ||= '/'
        app.routes.append do
          mount Samurai::Core::Engine => app.config.samurai_core[:mounted_path], as: 'samurai'
        end
      end
    end
  end
end
