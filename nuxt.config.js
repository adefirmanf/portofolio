
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
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: 'assets/fonts/nucleo.ttf' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css" }
    ],
    script: [
      { src: "https://platform.linkedin.com/badges/js/profile.js" },
      { src: "js/core/jquery.min.js" },
      { src: "js/core/popper.min.js" },
      { src: "js/core/bootstrap.min.js" },
      { src: "js/plugins/perfect-scrollbar.jquery.min.js" },
      { src: "js/plugins/bootstrap-switch.js" },
      { src: "js/plugins/nouislider.min.js" },
      { src: "js/plugins/chartjs.min.js" },
      { src: "js/plugins/moment.min.js" },
      { src: "js/plugins/bootstrap-datetimepicker.js" },
      { src: "js/demo.js" },
      { src: "js/blk-design-system.min.js?v=1.0.0" },
      { src: "js/plugins/jquery.sharrre.min.js" },
      // { src: "demo/jquery.sharrre.js" }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/blk-design-system.min.css' },
    { src: '~/assets/css/nucleo-icons.css' },
    { src: '~/assets/demo/demo.css' },
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
    extend(config, ctx) {
    }
  }
}