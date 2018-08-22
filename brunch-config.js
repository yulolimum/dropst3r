exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: 'assets/js/app.js'
    },
    stylesheets: {
      joinTo: 'assets/css/app.css'
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/assets/static". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(static)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: ['source/assets/static', 'source/assets/css', 'source/assets/js', 'source/assets/vendor', 'source/templates'],
    // Where to compile files to
    public: './build'
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/vendor/]
    },
    sass: {
      options: {
        includePaths: ['node_modules/materialize-css/sass']
      }
    },
    htmlPages: {
      destination (path) {
        return path.replace('source/templates/', '')
      },
      compileAssets: false,
      preserveFrontMatter: false,
      removeFrontMatter: true,
      forceRemoveFrontMatter: true
    }
  },

  modules: {
    autoRequire: {
      'js/app.js': ['js/app']
    }
  },

  npm: {
    enabled: true,
    globals: {
      'jQuery': 'jquery',
      '$': 'jquery'
    }
  }
}
