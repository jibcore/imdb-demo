import { createRouter, createWebHistory } from 'vue-router'
import MoviesListView from '../views/MoviesListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Top 250 Movies',
      component: MoviesListView
    },
    {
      path: '/most-popular',
      name: 'Most Popular Movies',
      component: MoviesListView
    },
    {
      path: '/edited-movies',
      name: 'Edited Movies',
      component: MoviesListView
    },
    {
      path: '/search-movies',
      name: 'Search Movies',
      component: () => import('../views/SearchMoviesView.vue')
    },
    {
      path: '/movie/:id',
      name: 'Movie Details',
      component: () => import('../views/MovieDetailView.vue'),
      meta: {
        hideNav: true
      }
    }
  ]
})

export default router
