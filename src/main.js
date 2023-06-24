// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";



export default function (Vue, { appOptions, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
    defer:true
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
    defer:true
  });

  head.script.push({
    src:"https://umami-production-d919.up.railway.app/umami.js",
    'data-website-id':"230aaf77-9d48-4cf8-b1a7-572da3ca87a5",
    async: true,
    defer:true
  });

  const opts = {
    icons: {
      iconfont: "fa" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    }
  };
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);
  Vue.component('Layout', DefaultLayout)
}
