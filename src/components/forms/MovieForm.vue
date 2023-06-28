<script setup>
import TextInputUi from '../ui/TextInputUi.vue'
import ButtonUi from '../ui/ButtonUi.vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['onSave'])

let movieForm = { ...props.movie }
</script>

<template>
  <div v-if="movie" class="d-flex flex-column align-center gap-5 w-100">
    <img width="100" height="100" :src="movie.image" />
    <form class="d-flex flex-column gap-1 w-100" @submit.prevent="$emit('onSave', movieForm)">
      <TextInputUi label="Title" v-model="movieForm.fullTitle" />
      <TextInputUi label="Crew" v-model="movieForm.crew" />
      <div class="d-flex justify-end">
        <ButtonUi :disabled="loading" type="submit">Save</ButtonUi>
      </div>
    </form>
  </div>
</template>
