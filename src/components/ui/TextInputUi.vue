<script setup>
import debounce from '../../helper/debounce'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  debounceDelay: {
    type: Number,
    default: 500
  }
})

const emit = defineEmits(['update:modelValue'])

const onInput = debounce((event) => {
  emit('update:modelValue', event.target.value)
}, props.debounceDelay)
</script>

<template>
  <div class="text-input-ui">
    <slot name="append-icon" />
    <label class="w-100">
      <div class="input-label">{{ label }}</div>
      <input class="w-100" type="text" :value="modelValue" @input="onInput" />
    </label>
  </div>
</template>

<style lang="postcss" scoped>
.text-input-ui {
  flex: 1 0;
  grid-area: field;
  position: relative;
  align-items: center;
  display: flex;
  border-radius: 4px;
  padding: 10px;
  gap: 10px;

  background: rgb(var(--theme-surface));
  border-color: transparent;
  color: rgba(var(--theme-on-surface), var(--high-emphasis-opacity));
  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 2px 2px 0 var(--shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 5px 0 var(--shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}

.input-label {
  --v-field-label-scale: 0.75em;
  font-size: var(--v-field-label-scale);
  max-width: 100%;
}
</style>
