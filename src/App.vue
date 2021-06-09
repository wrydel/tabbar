<template>
  <div id="app">
    <router-view></router-view>
    <MainBar></MainBar>
    
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
