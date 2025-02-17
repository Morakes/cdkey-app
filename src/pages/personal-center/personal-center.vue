<template>
  <view class="personal-center">


    <!-- 用户信息 -->
    <view class="user-info">
      <!-- <van-image
        class="avatar"
        round
        width="80px"
        height="80px"
        src="/static/default-avatar.png"
        alt="头像"
      /> -->
      <text class="nickname">用户名：{{ userInfo.nickname }}</text>
    </view>

    <!-- 功能模块 -->
    <!-- <van-cell-group>
      <van-cell title="我的收藏" icon="star-o" @click="onFavoritesClick" />
      <van-cell title="反馈" icon="records-o" @click="onExchangeHistoryClick" />
    </van-cell-group> -->

    <!-- 登录按钮 -->
    <view v-if="!isLogged" class="login-button">
      <!-- <van-button type="primary" round block @click="onLoginClick">登录/注册</van-button> -->
    </view>
  </view>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // 是否已登录
  const isLogged = ref(false);
  const userInfo = ref({
    nickname: '游客',
  });
  
  // 导航
  const onFavoritesClick = () => {
    uni.navigateTo({
      url: '/pages/favorites/favorites',
    });
  };
  
  const onExchangeHistoryClick = () => {
    uni.navigateTo({
      url: '/pages/exchange-history/exchange-history',
    });
  };
  
  const onSettingsClick = () => {
    uni.navigateTo({
      url: '/pages/settings/settings',
    });
  };
  
  const onLoginClick = () => {
    uni.navigateTo({
      url: '/pages/login/login',
    });
  };
  </script>
  
  <style scoped>
  .personal-center {
    padding: 10px;
    height: calc(100vh - 50px);
    width: 100%;
    background: url('@/assets/image/swiper04.png') no-repeat center / cover;
    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
    }
    
    .avatar {
      margin-bottom: 10px;
    }
    
    .nickname {
      font-size: 16px;
      color: #333;
    }
    
    .login-button {
      margin-top: 20px;
    }
  }
  
  </style>