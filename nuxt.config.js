import packageData from './package.json'

const isDevelopment = process.env.NODE_ENV === 'development'

const baseUrl = isDevelopment ? '/' : packageData.project.baseURL

const scssResources = ['~/assets/scss/_mix.scss']

export default {
  cache: false,
  mode: 'universal',
  env: {
    baseUrl: baseUrl === '/' ? '' : baseUrl
  },
  router: {
    base: baseUrl
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/global-methods.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: ['@nuxtjs/eslint-module'],
  styleResources: {
    scss: scssResources
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  buildModules: ['@nuxtjs/tailwindcss'],

  /*
   ** Build configuration
   */
  build: {
    cssSourceMap: false,
    extractCSS: !isDevelopment,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|scss|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  // purgeCSS: {
  //   mode: 'postcss'
  // }

  postcss: {
    plugins: {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    }
  },
  optimizeCSS: {
    cssProcessor: require('css-mqpacker'),
    cssProcessorPluginOptions: { sort: true }
  }
}
