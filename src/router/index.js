import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Maps from "@/views/Maps";
import Order from "@/views/Order";
import About from "@/views/About";

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path:'/about',
      name: 'About',
      component: About
    }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
