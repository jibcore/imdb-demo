<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  }
})
defineEmits(['click'])
</script>

<template>
  <button
    :class="{
      'button-ui': true,
      'button-ui--disabled': props.disabled,
      'button-ui--active': props.active
    }"
    @click="$emit('click', $event)"
  >
    <span class="buttom-ui-overlay" />
    <div class="button-ui-content">
      <slot />
    </div>
  </button>
</template>

<style lang="postcss" scoped>
.button-ui {
  background: transparent;
  color: rgb(var(--theme-on-surface));
  font-family: var(--theme-font-family) !important;
  position: relative;
  border: unset;
  border-radius: 4px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
}

.buttom-ui-overlay {
  visibility: hidden;
  background: currentColor;
  position: absolute;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.12;
  border-radius: inherit;
  width: 100%;
  height: 100%;
}

.button-ui:hover > .buttom-ui-overlay {
  visibility: visible;
}

.button-ui--disabled {
  visibility: visible;
  pointer-events: none;
  cursor: default;
  opacity: 0.26;
}

.button-ui--active > .buttom-ui-overlay {
  visibility: visible !important;
  opacity: calc(var(--activated-opacity) * var(--theme-overlay-multiplier)) !important;
}
</style>
