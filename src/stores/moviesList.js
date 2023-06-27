import { defineStore } from 'pinia'
import ApiService from '../services/ApiService'

export const useMoviesListStore = defineStore('moviesList', {
  state: () => ({
    movies: [],
    search: '',
    page: 1,
    showCount: 10,
    loading: false,
    loadingController: null
  }),
  getters: {
    getMovies(state) {
      return state.movies.slice((state.page - 1) * state.showCount, state.page * state.showCount)
    },
    getLoading(state) {
      return state.loading
    },
    getPage(state) {
      return state.page
    },
    getTotalPages(state) {
      return Math.ceil(state.movies.length / state.showCount)
    }
  },
  actions: {
    setPage(page) {
      this.page = page
    },
    clearList() {
      if (this.loading) {
        this.loadingController.abort()
      }

      this.movies = []
      this.page = 1
      this.search = ''
      this.loading = false
      this.loadingController = null
    },
    async fetchTop250Movies() {
      this.updateMovies(ApiService.getTop250Movies)
    },
    async fetchMostPopularMovies() {
      this.updateMovies(ApiService.getMostPopularMovies)
    },
    async searchMovies(search) {
      this.search = search
      if (search) {
        this.updateMovies(ApiService.searchMovies, { search })
      } else {
        this.clearList()
      }
    },
    async updateMovies(dataPromise, args) {
      try {
        if (this.loading) {
          this.loadingController.abort()
        }
        this.loadingController = new AbortController()
        this.loading = true
        this.movies = await dataPromise({ ...args, abortController: this.loadingController })
        this.page = 1
        this.loading = false
      } catch (error) {
        console.error(error)
      }
    }
  }
})
