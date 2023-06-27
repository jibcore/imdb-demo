<template>
  <div class="card-subtitle-ui">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card-subtitle-ui {
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(var(--theme-on-surface));
  opacity: var(--medium-emphasis-opacity);
}
</style>
