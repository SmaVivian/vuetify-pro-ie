import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const opts = {
  breakpoint: {
    // mobileBreakpoint: 1200, // 写法1：屏幕宽度小于1200为移动端 
    mobileBreakpoint: 'md', // 写法2：屏幕宽度小于1200为移动端 
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1200,
      lg: 1920,
    },
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        // 颜色  https://www.mdui.org/design/style/color.html#color-color-system
        // 行为相关颜色
        primary: '#CCA176',  // 主色
        secondary: '#424242', // 辅助色
        accent: '#82B1FF', // 重点色、强调
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
}
Vue.use(Vuetify)

// new Vue({
//   vuetify: new Vuetify(opts)
// }).$mount('#app')
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify, {
//   iconfont: 'md'
// });

// const opts = {}

export default new Vuetify(opts)