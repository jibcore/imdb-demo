<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ApiService from '../services/ApiService'

import SpinnerUi from '../components/ui/SpinnerUi.vue'
import MovieForm from '../components/forms/MovieForm.vue'

const route = useRoute()
let movie = ref(null)
let loading = ref(false)
let saving = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    movie.value = await ApiService.getMovieById({ id: route.params.id })
    loading.value = false
  } catch (error) {
    console.error(error)
  }
})

const onSave = async (movie) => {
  try {
    saving.value = true
    movie.value = await ApiService.updateMovie({ movie })
    saving.value = false
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <SpinnerUi v-if="loading" />
  <MovieForm v-else-if="movie" :movie="movie" @on-save="onSave" :loading="saving" />
  <div v-else>No data</div>
</template>
