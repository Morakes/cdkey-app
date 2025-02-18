<template>
  <view class="container">
    <NavigationBar :show-back="true" :title="game?.name" />
    <up-tabs 
        :list="list"
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

    <view v-for="item in game?.cdkList" :key="item.code" style="margin-top: 20rpx;">
      <CdkCard :data="item"  />
    </view>

  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import NavigationBar from '@/components/NavigationBar.vue';
import CdkCard from '@/components/card/CdkCard.vue';
import { gameLists } from '../index/config';
import type { IGameType } from '../index/type';

const activeIndex = ref(0)
const game = ref<IGameType>()

const list = ([
    { name: '兑换码' },
    // { name: '游戏论坛' },
]);

onLoad(() => {
  // 获取当前页面实例
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const options = currentPage.options;

  const _game = gameLists.find((item) => item.id === Number(options.id))

  game.value = _game
  // 设置导航栏标题
  if (game.value) {
    uni.setNavigationBarTitle({
      title: game.value.name
    });
  }
})

</script>

<style lang="scss" scoped>
.container {
  padding: 0 10px;
  padding-top: var(--status-bar-height);
  background: url('https://haowallpaper.com/link/common/file/getCroppingImg/985b46df5a629a68cf8e8e077a5711b1') no-repeat center / cover;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>