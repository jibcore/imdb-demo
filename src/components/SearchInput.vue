<script setup>
import { mdiMagnify } from '@mdi/js'
import TextInputUi from './ui/TextInputUi.vue'
import IconUi from '../components/ui/IconUi.vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <TextInputUi
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-slot:append-icon>
      <IconUi class="h-100" :icon="mdiMagnify" />
    </template>
  </TextInputUi>
</template>
