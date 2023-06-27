<template>
  <div class="card-ui">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card-ui {
  padding: 8px;
  display: block;
  overflow: hidden;
  overflow-wrap: break-word;
  position: relative;
  text-decoration: none;
  transition-duration: 0.28s;
  transition-property: box-shadow, opacity, background;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
  background: rgb(var(--theme-surface));
  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 1px 1px 0 var(--shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 3px 0 var(--shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
</style>
