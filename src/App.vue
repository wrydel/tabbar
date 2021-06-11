<template>
  <div id="app">
    <router-view></router-view>
<<<<<<< HEAD
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
        <TabBarItem path="/shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
        <TabBarItem path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
=======
    <MainBar></MainBar>
>>>>>>> 722a88f05b331f558f4a014b69353b954513a685
    
  </div>
</template>

<script>
import TabBar from './components/tabbar/TapBar.vue'
import TabBarItem from './components/tabbar/TabBarItem'
import MainBar from "./components/mainbar/MainBar"

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
    MainBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";


</style>
