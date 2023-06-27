<script setup>
import { onMounted } from 'vue'
import { useMoviesListStore } from '../stores/moviesList'
import SearchInput from '../components/SearchInput.vue'
import MoviesList from '../components/MoviesList.vue'

const store = useMoviesListStore()

onMounted(() => {
  store.clearList()
})
</script>

<template>
  <div class="d-flex flex-column w-100 align-center justify-center gap-3">
    <div class="w-100">
      <SearchInput
        :model-value="store.search"
        :debounce-delay="500"
        @update:model-value="($event) => store.searchMovies($event.target.value)"
      />
    </div>
    <MoviesList :hide-no-data="!store.search && store.movies.length < 1" />
  </div>
</template>
