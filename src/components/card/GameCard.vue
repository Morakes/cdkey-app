<template>
    <view class="game-card">
        <image
        src="@/assets/image/swiper01.png"
        mode="aspectFill"
        class="game-image"
      />
      <view>绝区零专区兑换码</view>
    </view>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .game-card {
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    background-color: rgba(255, 255, 255, 0.11);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    width: 100%;
    height: 220rpx;
    margin-bottom: 30rpx;
    overflow: hidden;
    .game-image {
        height: 150rpx;
        width: 150rpx;
        border-radius: 50%;
    }
  }
  </style>