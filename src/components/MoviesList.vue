<script setup>
import { useMoviesListStore } from '../stores/moviesList'
import SpinnerUi from './ui/SpinnerUi.vue'
import PaginationUi from './ui/PaginationUi.vue'
import MovieCard from './MovieCard.vue'

defineProps({
  hideNoData: {
    type: Boolean,
    default: false
  }
})

const store = useMoviesListStore()
</script>

<template>
  <div class="d-flex flex-column align-center w-100 gap-2">
    <SpinnerUi v-if="store.getLoading" />
    <template v-else>
      <template v-if="store.getMovies.length">
        <div class="d-flex flex-column w-100 gap-2">
          <MovieCard
            v-for="movie in store.getMovies"
            :movie="movie"
            :key="movie.id"
            @title-click="$router.push(`/movie/${movie.id}`)"
          />
        </div>
        <PaginationUi
          v-if="store.getTotalPages > 1"
          :model-value="store.getPage"
          :total-pages="store.getTotalPages"
          @update:model-value="store.setPage"
        />
      </template>
      <span v-else-if="!hideNoData">No data</span>
    </template>
  </div>
</template>
