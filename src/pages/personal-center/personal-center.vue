<template>
  <view class="personal-center">
    <!-- 用户信息 -->
    <view class="user-info">
      <u-avatar
        :src="userInfo.avatar || '/static/default-avatar.png'"
        size="80"
        @click="onAvatarClick"
      />
      <text class="nickname">{{ userInfo.nickname }}</text>
    </view>

    <!-- 功能模块 -->
    <u-cell-group>
      <u-cell
        title="我的收藏"
        icon="star"
        :isLink="true"
        @click="onFavoritesClick"
      />
      <u-cell
        title="反馈建议"
        icon="edit-pen"
        :isLink="true"
        @click="onFeedbackClick"
      />
      <u-cell
        v-if="isLogged"
        title="退出登录"
        icon="logout"
        :isLink="true"
        @click="onLogoutClick"
      />
    </u-cell-group>

    <!-- 登录按钮 -->
    <view v-if="!isLogged" class="login-button">
      <u-button
        type="primary"
        text="登录/注册"
        shape="circle"
        block
        @click="onLoginClick"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 用户信息
const isLogged = ref(false);
const userInfo = ref({
  nickname: '游客',
  avatar: '',
});

// 检查登录状态
const checkLoginStatus = () => {
  const token = uni.getStorageSync('token');
  if (token) {
    isLogged.value = true;
    // TODO: 调用获取用户信息接口
    userInfo.value = {
      nickname: '已登录用户',
      avatar: '',
    };
  }
};

// 导航
const onFavoritesClick = () => {
  if (!isLogged.value) {
    uni.showToast({
      title: '请先登录',
      icon: 'none'
    });
    return;
  }
  uni.navigateTo({
    url: '/pages/favorites/favorites',
  });
};

const onFeedbackClick = () => {
  if (!isLogged.value) {
    uni.showToast({
      title: '请先登录',
      icon: 'none'
    });
    return;
  }
  uni.navigateTo({
    url: '/pages/feedback/feedback',
  });
};

const onAvatarClick = () => {
  if (!isLogged.value) {
    onLoginClick();
    return;
  }
  // TODO: 实现修改头像功能
};

const onLoginClick = () => {
  // #ifdef H5
  uni.navigateTo({
    url: '/pages/login/login',
  });
  // #endif

  // #ifdef MP-WEIXIN
  uni.getUserProfile({
    desc: '用于完善用户资料',
    success: (res) => {
      const userInfo = res.userInfo;
      // TODO: 调用微信登录接口
      console.log('微信用户信息：', userInfo);
    },
    fail: () => {
      uni.showToast({
        title: '授权失败',
        icon: 'none'
      });
    }
  });
  // #endif
};

const onLogoutClick = () => {
  uni.showModal({
    title: '提示',
    content: '确认退出登录？',
    success: (res) => {
      if (res.confirm) {
        uni.removeStorageSync('token');
        isLogged.value = false;
        userInfo.value = {
          nickname: '游客',
          avatar: '',
        };
        uni.showToast({
          title: '已退出登录',
          icon: 'success'
        });
      }
    }
  });
};

onMounted(() => {
  checkLoginStatus();
});
</script>

<style scoped lang="scss">
.personal-center {
  box-sizing: border-box;
  padding: 20px;
  min-height: calc(100vh - 50px);
  width: 100%;
  background: url('@/assets/image/swiper04.png') no-repeat center / cover;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    .nickname {
      margin-top: 15px;
      font-size: 18px;
      color: #333;
      font-weight: 500;
    }
  }

  .login-button {
    margin-top: 30px;
    padding: 0 20px;
  }

  :deep(.u-cell-group) {
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
  }
}
</style>