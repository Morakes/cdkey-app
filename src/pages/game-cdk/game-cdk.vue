<template>
  <view class="container">
    <NavigationBar :show-back="true" :title="title"  />
    <up-tabs 
        :list="list1"
        @click="(_item, index: number) => {
          activeIndex = index;
        }"
        :scrollable="false" 
        :inactive-style="{
          color: '#ccc',
          fontWeight: 'bold',
        }"
        :active-style="{
          color: 'white',
          fontWeight: 'bold',
          transform: 'scale(1.05)'
        }"
      />

    <view v-for="item in mockCDK" :key="item.code" style="margin-top: 20rpx;">
      <CdkCard :data="item"  />
    </view>

  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import NavigationBar from '@/components/NavigationBar.vue';
import CdkCard from '@/components/card/CdkCard.vue';

const activeIndex = ref(0)
const title = ref('')

const list1 = ([  
    { name: '兑换区' },
    { name: '游戏论坛' },
]);  

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
    isValid: false,
    endTime: '2025-02-10'
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
  height: 100vh;
  overflow: scroll;
}
:deep(.van-tabs__nav) {
  background-color: transparent;
}
:deep(.van-tab) {
  color: var(--font-color);
}
</style>