
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' },
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/mixins/user',
    '@/plugins/mixins/validation',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  router: {
    middleware: [
     'clearValidationErrors'
    ]
  },

  axios: {
    baseURL: 'http://localhost:8001/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login', method: 'post', propertyName: 'meta.token'
          },
          user: {
            url: 'user', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'logout', method: 'post',
          },
        },
        redirect: {
          login: '/login',
          home: '/'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
