<script setup>
defineProps({
  size: {
    type: Number,
    default: 25
  },
  icon: {
    type: String,
    required: true
  },
  fill: {
    type: String,
    default: 'white'
  }
})
</script>

<template>
  <svg :width="size" :height="size" :fill="fill" viewBox="0 0 24 24">
    <path :d="icon" />
  </svg>
</template>
