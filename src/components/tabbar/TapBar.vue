<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar", 
}
</script>

<style>
   #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    /* 至于底部 */
    position: fixed;  
    /* 保证填充左右下的距离 */
    left: 0;
    right: 0;
    bottom: 0;
  }

 
</style>
