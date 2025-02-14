<template>
    <view class="card">
      <slot name="default"></slot>
    </view>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="css" scoped>
  .card {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.11);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    border-radius: 20rpx;
    box-shadow: 2px 2px 6px white;
    width: 100%;
  }
  </style>
  