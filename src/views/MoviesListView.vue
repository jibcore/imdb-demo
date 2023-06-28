<script setup>
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesListStore } from '../stores/moviesList'
import MoviesList from '../components/MoviesList.vue'

const store = useMoviesListStore()
const route = useRoute()

function fetchData() {
  switch (route.path) {
    case '/':
      store.fetchTop250Movies()
      break
    case '/most-popular':
      store.fetchMostPopularMovies()
      break
    case '/edited-movies':
      store.fetchEditedMovies()
      break
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
