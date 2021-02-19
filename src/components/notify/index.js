// 提示
import Vue from 'vue'
import Notify from './notify.vue'
const VueComponent = Vue.extend(Notify)
const vm = new VueComponent().$mount()

let init = false;
let defaultOptions = {}

const notify = (msg, options) => {
	Object.assign(vm, defaultOptions, options, {
		type: "notify"
	})
	if(!init){
    // document.body.appendChild(vm.$el)
    document.getElementsByClassName('v-application')[0].appendChild(vm.$el)
		init = true
	}
	return vm.notify(msg, {...defaultOptions, ...options})
}

export default notify