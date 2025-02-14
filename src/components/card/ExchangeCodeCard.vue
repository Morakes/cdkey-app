<template>
  <view class="exchange-code-card">
    <van-card
      :title="code.code"
      :desc="reward"
      :num="isValid ? '有效' : '已过期'"
      thumb="@/assets/image/swiper01.png"
    >
      <template #footer>
        <van-button size="mini" @click="copyCode">复制</van-button>
      </template>
    </van-card>
  </view>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
  code: {
    code: String,
    reward: String,
    isValid: Boolean,
    required: true
  }
})
  
  // 计算属性：奖励信息
  const reward = computed(() => props.code.reward);
  
  // 计算属性：是否有效
  const isValid = computed(() => props.code.isValid);
  
  // 复制功能
  const copyCode = () => {
    uni.setClipboardData({
      data: props.code.code,
      success: () => {
        uni.showToast({
          title: '复制成功',
          icon: 'success',
        });
      },
    });
  };
  </script>
  
<style scoped>
  .exchange-code-card {
    margin-bottom: 10px;
  }
</style>