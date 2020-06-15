# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Recipes
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    allowed_hosts = ENV['ALLOWED_HOSTS']
    re = ENV['ALLOWED_HOSTS_RE']
    allowed_hosts ||= Regexp.new re if re.present?
    # allowed_hosts ||= /[a-z0-9]+\.lvh\.me/
    config.hosts << allowed_hosts
  end
end
