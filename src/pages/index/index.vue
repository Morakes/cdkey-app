<template>
  <view class="container">
    <!-- 标题 -->
    <NavigationBar title="gamecode宝库" :show-back="true" />
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
          src="@/assets/image/swiper04.png"
          mode="aspectFill"
        />
      </van-swipe-item>
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
    <view class="games-card-title">
      <text>热门游戏兑换码</text>
      <text class="games-card-more">戳我更多<van-icon name="arrow" /></text>
    </view>
    <view v-for="item in 10" :key="item">
      <GameCard />
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import GameCard from '@/components/card/GameCard.vue'
import NavigationBar from '@/components/NavigationBar.vue';
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
  background: url('@/assets/image/bg03.png') no-repeat center / cover;
  color: var(--font-color);
  overflow-y: scroll;
  overflow-x: hidden;
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