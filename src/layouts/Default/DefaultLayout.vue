<script setup>
import { useRoute } from 'vue-router'
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'

const route = useRoute()
</script>

<template>
  <HeaderComponent />
  <main class="app-main">
    <div class="content">
      <h1 v-if="!route.meta || !route.meta.hideTitle">{{ route.name }}</h1>
      <slot />
    </div>
  </main>
  <FooterComponent />
</template>

<style lang="postcss">
#app {
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

#app > header {
  grid-area: header;
}

#app > main {
  display: flex;
  justify-content: center;
  grid-area: main;
  padding: 0 15px 0 15px;
}

#app > footer {
  grid-area: footer;
}
</style>

<style lang="postcss" scoped>
.content {
  max-width: var(--theme-main-content-max-width);
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
</style>
