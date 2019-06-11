// import pkg from './package'
const bodyParser = require('body-parser')
const axios = require('axios')

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Flippin' Supreme",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'blog made into sneaker site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Indie+Flower' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF0000', height: '4px', duration: 5000 },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://online-auction-nuxt.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://online-auction-nuxt.firebaseio.com',
    fbAPIKey: 'AIzaSyB-WCZs6owrcu9nppD_ddMIpwb2bK4jZ1A'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
      return axios.get('https://online-auction-nuxt.firebaseio.com/posts.json')
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push({
              route: '/posts/' + key,
              payload: { postData: res.data[key] }
            })
          }
          return routes
        })
    }
  }
}
