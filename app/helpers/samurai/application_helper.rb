module Samurai
  module ApplicationHelper
    def active(path)
      current_page?(path) ? 'active': ''
    end

    def vite_manifest
      Samurai::Core::Engine.vite_ruby.manifest
    end

    def typescript_tag(name)
      if Rails.env.production?
        "https://samuraierp.netlify.com" + vite_typescript_tag(name)
      else
        vite_typescript_tag(name)
      end
    end
  end
end
