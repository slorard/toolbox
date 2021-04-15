import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Tools from './views/Tools'
import Memes from './views/Memes'
import IgVideos from './views/IgVideos'
import ClipYoutube from './views/ClipYoutube'


Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: Tools},
    {path: '/memes', component: Memes},
    {path: '/download-ig-video', component: IgVideos},
    {path: '/clip-youtube', component: ClipYoutube}
  ],
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
