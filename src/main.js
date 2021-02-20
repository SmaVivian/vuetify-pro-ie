import '@babel/polyfill';
import Vue from 'vue';
import vuetify from './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import confirm from '@cmp/confirm'
import notify from '@cmp/notify'
// import test from '@cmp/test'
import request from '@/utils/request'
import '@/utils/rem'

import '@assets/css/theme.scss';
import '@assets/css/mobile/common.scss';

Vue.config.productionTip = false;

Vue.prototype.$confirm = confirm
Vue.prototype.$notify = notify

// Vue.use(test)  // 方法1.仅在组件里使用
// Vue.prototype.$test = test  // 方法2.组件和组件以外的情况下使用

Vue.prototype.$http = request
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')