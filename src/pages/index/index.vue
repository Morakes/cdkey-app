<template>
  <view class="container">
    <!-- 标题 -->
    <NavigationBar title="gamecode宝库" :show-back="false" />

    <!-- swipe轮播图 -->

    <up-swiper :list="list" :autoplay="true" :circular="true" :indicator="true" indicatorMode="dot" height="180"></up-swiper>

    <!-- 游戏卡片 -->
    <view class="games-card-title">
      <text>热门游戏兑换码</text>
      <text class="games-card-more">戳我更多<van-icon name="arrow" /></text>
    </view>
    <view v-for="item in gameLists" :key="item.name">
      <GameCard :data="item" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import GameCard from '@/components/card/GameCard.vue'
import NavigationBar from '@/components/NavigationBar.vue';
import { gameLists } from './config';

const list = reactive([
  'https://haowallpaper.com/link/common/file/getCroppingImg/15188352915705152',
  'https://haowallpaper.com/link/common/file/getCroppingImg/15274494849158464',
  'https://haowallpaper.com/link/common/file/getCroppingImg/a9045286aa9b50dcc09302eff83b328a',
  'https://haowallpaper.com/link/common/file/getCroppingImg/15465600005345600'
]);

</script>

<style scoped lang="scss">
.container {
  // #if MP-WEIXIN
  height: 100vh;
  // #endif
  // #if H5
  height: calc(100vh - var(--window-bottom));
  // #endif
  padding: 0 10px;
  padding-top: var(--status-bar-height);
  background: url('https://haowallpaper.com/link/common/file/getCroppingImg/15024949517192512') no-repeat center / cover;
  color: var(--font-color);
  overflow-x: hidden;
  overflow-y: scroll;
  .games-card-title {
    margin-top: 40rpx;
    margin-bottom: 20rpx;
    font-size: 35rpx;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    color: var(--color-orange);
    .games-card-more {
      font-size: 30rpx;
    }
  }
}
</style>