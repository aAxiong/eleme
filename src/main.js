// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Goods from 'components/goods/goods';
import Ratings from 'components/Ratings/Ratings';
import Seller from 'components/Seller/Seller';
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false


const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

const router = new VueRouter({
  linkActiveClass:"active",
  routes // （缩写）相当于 routes: routes
  
})

const app = new Vue({
  router,
  render:(h)=>h(App)

}).$mount('#app')

router.push('/goods')


