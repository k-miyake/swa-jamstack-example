
require('dotenv').config();
import { createClient } from './plugins/contentful.js'

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
	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:300,400,700,800'}
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
    '~/css/reset.css',
    '~/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    CTF_SPACE: process.env.CTF_SPACE,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN
  },
  generate: {
    async routes() {
      const entries = await createClient().getEntries('blogPost')
      const ctfPaths = entries.items.map(entry => `/posts/${entry.sys.id}`)
      return [...ctfPaths];
    }
  }
}