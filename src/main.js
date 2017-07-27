// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Header from './components/header/header';
import Goods from './components/goods/goods';
import Ratings from './components/Ratings/Ratings';
import Seller from './components/Seller/Seller';
Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [
  { path: '/', component: Header },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
