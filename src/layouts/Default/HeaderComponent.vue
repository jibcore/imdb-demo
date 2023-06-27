<script setup>
import { useRouter } from 'vue-router'
import ButtonUi from '../../components/ui/ButtonUi.vue'
import ImdbLogo from '../../assets/imdb-logo.svg'

const router = useRouter()
</script>

<template>
  <header class="header">
    <div class="header-content">
      <img width="35" :src="ImdbLogo" />
      <div class="d-flex gap-3">
        <template v-for="route in router.options.routes" :key="route.fullPath">
          <router-link :to="route.path" class="header-router-link">
            <ButtonUi v-if="!route.meta || !route.meta.hideNav"> {{ route.name }} </ButtonUi>
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  width: 100%;
  background: rgb(var(--theme-surface));
}

.header-content {
  max-width: var(--theme-header-max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15px 0 15px;
}
.header-router-link {
  text-decoration: none;
}
</style>
