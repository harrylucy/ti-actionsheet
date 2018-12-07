import actionsheet from './actionsheet'
import Vue from 'vue'

const comment = {
	install :function(vue){
		Vue.component(actionsheet.name,actionsheet)
	}
}

if(typeof window !== 'undefined' && window.vue){
	window.Vue.use(comment);
}
export default comment;