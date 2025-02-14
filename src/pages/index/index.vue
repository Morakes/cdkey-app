<template>
  <view class="container">
    <!-- 标题 -->
    <view>gamecode宝库</view>
    <!-- <van-search
      v-model="searchKeyword"
      placeholder="请输入游戏名称搜索"
      @search="onSearch"
      szie="mini"
    /> -->
    <!-- swipe轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
      <van-swipe-item class="van-swipe-item">
        <image
          src="@/assets/image/swiper01.png"
          mode="aspectFill"
        />
      </van-swipe-item>
      <van-swipe-item>
        <image
          src="@/assets/image/swiper02.png"
          moed="aspectFill"
        />
      </van-swipe-item>
      <van-swipe-item>
        <image
          src="@/assets/image/swiper03.png"
          moed="aspectFill"
        />
      </van-swipe-item>
    </van-swipe>

    <!-- 游戏卡片 -->
    <view>热门游戏兑换码</view>
    <view class="games-card" v-for="item in 10" :key="item">
      <GameCard />
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import GameCard from '@/components/card/GameCard.vue'

// 游戏数据
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

// 搜索关键词
const searchKeyword = ref('');

// 搜索功能
const onSearch = () => {
  console.log('搜索关键字:', searchKeyword.value);
};
</script>

<style scoped>
.container {
  height: calc(100vh - 50px);
  padding: 10px;
  background: url('@/assets/image/bg03.png');
  background-size: cover;
  color: var(--font-color);
  overflow-y: scroll;
  .my-swipe {
    border-radius: 10rpx;
    border: 1px solid var(--bg-layer-1); 
    .van-swipe-item {
      height: 300rpx;
      border-radius: 10rpx;
      image {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>