<template>
  <view class="navigation-bar">
    <van-icon name="arrow-left" v-show="showBack" @click="goback" class="back-icon" />
    <text class="title">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  showBack: {
    type: Boolean,
    default: true
  }
})


function goback() {
  // uni.navigateBack()
  uni.switchTab({
    url: '/pages/index/index'
  })
}
</script>

<style lang="css" scoped>
.navigation-bar {
  height: 44px;
  width: 750rpx;
  display: flex;
  align-items: center;
  color: var(--color-orange);
  font-size: 28rpx;
  font-weight: 600;
  text-align: center;
  .back-icon {
    flex-basis: 50%;
    font-size: 30rpx;
  }
  .title {
    transform: translate(-50%, 0);
  }
}
</style>