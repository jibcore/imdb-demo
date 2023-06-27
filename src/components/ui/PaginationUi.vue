<script setup>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import IconUi from './IconUi.vue'
import ButtonUi from './ButtonUi.vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
    default: 1
  },
  totalPages: {
    type: Number,
    required: true
  },
  ellipsis: {
    type: String,
    default: '...'
  },
  totalVisible: {
    type: Number,
    default: 5
  },
  start: {
    type: Number,
    default: 1
  }
})

defineEmits(['update:modelValue'])

function createRange(length) {
  let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
  return Array.from({ length }, (v, k) => start + k)
}

const range = () => {
  if (props.totalPages <= 0 || isNaN(props.totalPages)) return []
  if (props.totalVisible <= 1) return [props.modelValue]
  if (props.totalPages <= props.totalVisible) {
    return createRange(props.totalPages, props.start)
  }
  const even = props.totalVisible % 2 === 0
  const middle = even ? props.totalVisible / 2 : Math.floor(props.totalVisible / 2)
  const left = even ? middle : middle + 1
  const right = props.totalPages - middle
  if (left - props.modelValue >= 0) {
    return [
      ...createRange(Math.max(1, props.totalVisible - 1), props.start),
      props.ellipsis,
      props.totalPages
    ]
  } else if (props.modelValue - right >= (even ? 1 : 0)) {
    const rangeLength = props.totalVisible - 1
    const rangeStart = props.totalPages - rangeLength + props.start
    return [props.start, props.ellipsis, ...createRange(rangeLength, rangeStart)]
  } else {
    const rangeLength = Math.max(1, props.totalVisible - 3)
    const rangeStart =
      rangeLength === 1
        ? props.modelValue
        : props.modelValue - Math.ceil(rangeLength / 2) + props.start
    return [
      props.start,
      props.ellipsis,
      ...createRange(rangeLength, rangeStart),
      props.ellipsis,
      props.totalPages
    ]
  }
}
</script>

<template>
  <div class="d-flex justify-center gap-2">
    <button-ui :disabled="props.modelValue < 2" @click="$emit('update:modelValue', modelValue - 1)">
      <IconUi :icon="mdiChevronLeft" />
    </button-ui>
    <button-ui
      v-for="item in range()"
      :active="item === props.modelValue"
      :disabled="item === props.ellipsis"
      :key="item"
      @click="$emit('update:modelValue', item)"
    >
      {{ item }}
    </button-ui>
    <ButtonUi
      :disabled="props.totalPages < 2 || props.modelValue === props.totalPages"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      <IconUi :icon="mdiChevronRight" />
    </ButtonUi>
  </div>
</template>
