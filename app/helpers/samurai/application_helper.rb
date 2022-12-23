module Samurai
  module ApplicationHelper
    def active(path)
      current_page?(path) ? 'active': ''
    end

    def vite_manifest
      Samurai::Core::Engine.vite_ruby.manifest
    end
  end
end
