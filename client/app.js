
(function (Vue){
	//创建独立的作用域，防止污染与损耗
/*	//数据绑定
	var app = new Vue({
  		el: '#app',
  		data: {
    	message: 'Hello Vue!'
  		}
	})*/
	//各组件
	var Home = Vue.extend({
		template: '<h1>Home</h1>'
	})
	var List = Vue.extend({
		template: '<h1>List</h1>'
	})
	var Item = Vue.extend({
		template: '<h1>Item</h1>'
	})
	//根组件
	var App = Vue.extend({})
	//路由器
	var router = new VueRouter()
	//路由
	router.map({
		'/home':{
			//组件映射
			component: Home
		},
		'/songs':{
			component: List
		},
		// /songs/1
		'/songs/:id':{
			component: Item
		}
	})
	//启动路由
	router.start(App,#app)
})(Vue)