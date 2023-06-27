<script setup>
import { mdiStar } from '@mdi/js'
import CardUi from './ui/CardUi.vue'
import CardTitleUi from './ui/CardTitleUi.vue'
import CardSubtitleUi from './ui/CardSubtitleUi.vue'
import IconUi from './ui/IconUi.vue'

defineProps({
  movie: {
    type: Object,
    required: true
  }
})
defineEmits(['titleClick'])
</script>

<template>
  <CardUi class="movie-card">
    <div class="d-flex align-center gap-5">
      <img class="movie-image" :src="movie.image" />
      <span class="movie-rank">#{{ movie.rank }}</span>
      <div>
        <CardTitleUi>
          <div class="movie-title" @click="$emit('titleClick', $event)">
            {{ movie.fullTitle }}
          </div>
        </CardTitleUi>
        <CardSubtitleUi>{{ movie.crew }}</CardSubtitleUi>
      </div>
    </div>
    <div class="rating-container">
      <IconUi :size="15" :icon="mdiStar" fill="yellow" />
      <span>{{ movie.imDbRating }}</span>
    </div>
  </CardUi>
</template>

<style lang="postcss" scoped>
.movie-card {
  max-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 20px 0 0;
}

.movie-title {
  cursor: pointer;
}

.movie-title:hover {
  text-decoration: underline;
}

.movie-image {
  width: 70px;
  aspect-ratio: auto 70 / 176;
}

.movie-rank {
  font-size: 1rem;
  font-weight: 500;
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
