<template>
  <view class="container">
    <NavigationBar :show-back="true" :title="title"  />
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="兑换区">
        <view v-for="item in mockCDK" :key="item.code" style="margin-bottom: 20rpx;">
          <CdkCard :data="item"  />
        </view>
      </van-tab>
      <van-tab title="游戏论坛">
        <GameCard />
      </van-tab>
    </van-tabs>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import GameCard from '@/components/card/GameCard.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import CdkCard from '@/components/card/CdkCard.vue';

const active = ref(0)
const title = ref('')

const mockCDK = [
  {
    title: '前瞻直播兑换码',
    code: 'XFIALSPNFM',
    reward: '100菲林，10000丁尼',
    isValid: true,
    endTime: '2025-02-30'
  },
  {
    title: '前瞻直播兑换码',
    code: 'FMSKFINOSL',
    reward: '100菲林，1资深调查员记录',
    isValid: true,
    endTime: '2025-02-30'
  },
  {
    title: '前瞻直播兑换码',
    code: 'YgMDjgSPFK',
    reward: '100菲林，2引擎能源模块',
    isValid: true,
    endTime: '2025-02-30'
  },
  {
    title: '普通兑换码',
    code: 'YD5dg3OS9aD',
    reward: '60菲林， 2资深调查员记录，3音擎能源模块',
    isValid: true,
    endTime: '2025-02-30'
  }
]

onLoad(() => {
  // 获取当前页面实例
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const options = currentPage.options;
  
  // 获取 URL 参数中的 game 字段
  const game = options.game;
  
  title.value = game
  // 设置导航栏标题
  if (game) {
    uni.setNavigationBarTitle({
      title: game
    });
  }
})

</script>

<style lang="css" scoped>
.container {
  padding: 0 10px;
  background: url('@/assets/image/swiper04.png') no-repeat center / cover;
  min-height: 100vh;
}
:deep(.van-tabs__nav) {
  background-color: transparent;
}
:deep(.van-tab) {
  color: var(--font-color);
}
</style>