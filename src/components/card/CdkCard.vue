<template>
  <Card>
    <view class="cdk-card">
      <view>{{ props?.data.title }}</view>
      <view>{{ props?.data.code }}</view>
      <view>{{ props?.data.reward }}</view>
      <view>{{ props?.data.endTime }}</view>
    </view>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';

interface Props {
  data: {
    title: string;
    code: string;
    reward: string;
    isValid: boolean;
    endTime: string;
  }
}

const props = defineProps<Props>()

</script>

<style lang="css" scoped>
.cdk-card {
  height: 220rpx;
  color: var(--color-orange);
  /* color: var(--font-color); */
  padding: 0 10px;
  font-size: 16px;
}
</style>
