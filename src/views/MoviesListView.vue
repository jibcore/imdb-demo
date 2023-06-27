<script setup>
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesListStore } from '../stores/moviesList'
import MoviesList from '../components/MoviesList.vue'

const store = useMoviesListStore()
const route = useRoute()

function fetchData() {
  if (route.path === '/') {
    store.fetchTop250Movies()
  } else if (route.path === '/most-popular') {
    store.fetchMostPopularMovies()
  }
}

onMounted(() => {
  fetchData()
})

onUpdated(() => {
  fetchData()
})
</script>

<template>
  <MoviesList />
</template>
