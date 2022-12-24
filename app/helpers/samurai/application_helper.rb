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
        vite_typescript_tag(name).gsub "samuraierp-main.netlify.app", "samuraicore.netlify.app"
      else
        vite_typescript_tag(name)
      end
    end
  end
end
