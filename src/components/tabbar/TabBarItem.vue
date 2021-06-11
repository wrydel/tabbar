<template>
  <div class="tab-bar-item" @click="itemclick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    },
  },
};
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
