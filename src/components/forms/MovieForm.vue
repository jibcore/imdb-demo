<script setup>
import { mdiPencil } from '@mdi/js'
import TextInputUi from '../ui/TextInputUi.vue'
import IconUi from '../ui/IconUi.vue'
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
  <div v-if="movie" class="movie-form">
    <img width="165" height="200" :src="movie.image" />
    <form class="d-flex flex-column gap-1 w-100" @submit.prevent="$emit('onSave', movieForm)">
      <TextInputUi label="Title" v-model="movieForm.fullTitle">
        <template v-slot:append-icon>
          <IconUi :size="15" class="h-100" :icon="mdiPencil" />
        </template>
      </TextInputUi>
      <TextInputUi label="Crew" v-model="movieForm.crew">
        <template v-slot:append-icon>
          <IconUi :size="15" class="h-100" :icon="mdiPencil" />
        </template>
      </TextInputUi>
      <div class="d-flex justify-end">
        <ButtonUi :disabled="loading" type="submit">Save</ButtonUi>
      </div>
    </form>
  </div>
</template>

<style lang="postcss" scoped>
.movie-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 650px;
  width: 100%;
}
</style>
