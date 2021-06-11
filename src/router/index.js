import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Shopcart = () => import('../views/shopcart/Shopcart.vue');
const Profile = () => import('../views/profile/Profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/shopcart',
    component:Shopcart,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/profile',
    component:Profile,
  },
]

const router = new VueRouter ({
  mode:"history",
  routes
})

export default router