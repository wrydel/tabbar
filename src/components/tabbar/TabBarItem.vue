<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "TabBarItem",
  props: {
    path: String,
=======
  name:"TabBarItem", 
  props:{
    path:String,
    activeColor:{
      type:String,
      // 设置该参数的默认值
      default:'deeppink'
    }
>>>>>>> 722a88f05b331f558f4a014b69353b954513a685
  },
  data() {
    return {};
  },
  computed:{
    isActive() {
      // 判断活跃的路由与当前组件的路由是否一致，一致返回ture
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      // 根据isActive的结果决定 文字的样式
      return  this.isActive ? {color:this.activeColor} : {}
    }

  },
  methods: {
    itemclick() {
<<<<<<< HEAD
      this.$router.push(this.path);
    },
  },
};
=======
      // 点击事件，跳转至对应的路由view
      this.$router.push(this.path)
    }
  }
}
>>>>>>> 722a88f05b331f558f4a014b69353b954513a685
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 26px;
  width: 26px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
