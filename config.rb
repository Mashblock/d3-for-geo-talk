###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do

  activate :external_pipeline,
    name: :browserify,
    command: "node_modules/.bin/watchify source/javascripts/_index.js -v -d -t babelify --outfile source/javascripts/index.pkg.js",
    source: "source/javascripts",
    latency: 2
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
set :build_dir, 'public'

configure :build do
  activate :external_pipeline,
    name: :browserify,
    command: "node_modules/.bin/browserify source/javascripts/_index.js -t babelify -o source/javascripts/index.pkg.js",
    source: "source/javascripts"
  # For example, change the Compass output style for deployment
  activate :minify_css
  # Minify Javascript on build
  activate :minify_javascript
  # Enable cache buster
  activate :asset_hash, ignore: %w(*.svg)
  # Use relative URLs
  activate :relative_assets
  
  activate :gzip
end
