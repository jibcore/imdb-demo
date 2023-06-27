<template>
  <div class="card-title-ui">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card-title-ui {
  font-size: 1.25rem;
  font-weight: 500;
  color: rgba(var(--theme-on-surface));
}
</style>
