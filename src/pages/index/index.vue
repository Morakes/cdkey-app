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
    <view v-for="item in 10" :key="item">
      <GameCard />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import GameCard from '@/components/card/GameCard.vue'
import NavigationBar from '@/components/NavigationBar.vue';

const list = reactive([
  'https://haowallpaper.com/link/common/file/getCroppingImg/15188352915705152',
  'https://haowallpaper.com/link/common/file/getCroppingImg/15274494849158464',
  'https://haowallpaper.com/link/common/file/getCroppingImg/a9045286aa9b50dcc09302eff83b328a',
  'https://haowallpaper.com/link/common/file/getCroppingImg/15465600005345600'
]);

const games = reactive([
  {
    name: '绝区零',
    exchangeCodes: [
      {
        code: 'ZZZFREE100',
        expirationDate: '2024-07-11 23:59:59',
        reward: '100 钻石',
        isValid: true,
      },
      {
        code: 'ZZZ888',
        expirationDate: '2024-12-31 23:59:59',
        reward: '888 金币',
        isValid: true,
      },
    ],
  },
  {
    name: '鸣潮',
    exchangeCodes: [
      {
        code: 'MINGCHAO666',
        expirationDate: '2025-06-30 23:59:59',
        reward: '666 钻石',
        isValid: true,
      },
    ],
  },
]);

</script>

<style scoped lang="scss">
.container {
  min-height: calc(100vh - var(--status-bar-height) - var(--navigation-bar-height));
  padding: 0 10px;
  padding-top: var(--status-bar-height);
  background: url('https://haowallpaper.com/link/common/file/getCroppingImg/15024949517192512') no-repeat center / cover;
  color: var(--font-color);
  overflow-x: scroll;
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