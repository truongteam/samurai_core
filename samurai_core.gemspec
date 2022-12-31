require_relative "lib/samurai/core/version"

Gem::Specification.new do |spec|
  spec.name = "samurai_core"
  spec.version = Samurai::Core::VERSION
  spec.authors = ["Truong Dung"]
  spec.email = ["truonghoangdung1987hp@gmail.com"]
  spec.homepage = "https://samuraicrm.com"
  spec.summary = "Core features"
  spec.description = "Core features"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the "allowed_push_host"
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = spec.homepage

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir["{app,config,db,lib,public}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  end

  spec.add_dependency "rails", ">= 7.0.4"
  spec.add_development_dependency "sqlite3", ">= 1.4"
  spec.add_dependency "devise", "~> 4.8.1"
  spec.add_dependency "vite_ruby", "~> 3.2"
  spec.add_dependency "vite_rails", "~> 3.0"
  spec.add_dependency "good_job", "~> 3.7"
  spec.add_dependency "karafka", "~> 2.0"
  spec.add_dependency "gon", "~> 6.2.0"
  spec.add_dependency "invoice_printer", "~> 2.2.0"
  spec.add_dependency "invoice_printer_fonts", "~> 2.2.0"
  spec.add_dependency "acts_as_tenant", "~> 0.6.0"
  spec.add_dependency "circuitbox", "~> 1.1"
  spec.add_dependency "dry-validation", "~> 1.10"
  spec.add_dependency "rails_event_store", "~> 2.7"
  spec.add_dependency "connection_pool", "~> 2.3"
  spec.add_dependency "phlex", "~> 1.0"
  spec.add_dependency "phlex-rails", "~> 0.4.2"
  spec.add_dependency "stimulus_reflex", "~> 3.5.0-pre9"
  spec.add_dependency "sql_query", "~> 0.6.0"
  spec.add_dependency "view_component", "~> 2.80"
end
