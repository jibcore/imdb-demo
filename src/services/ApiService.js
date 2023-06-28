// import axios from 'axios'
import top250MoviesMock from '../mocks/top-250-movies.json'
import mostPopularMoviesMock from '../mocks/most-popular-movies.json'
let editedMovies = []

// const url = import.meta.env.VITE_API_URL
// const apiKey = import.meta.env.VITE_API_KEY

class ApiService {
  static replaceByUpdatedMovies(movies) {
    return movies.map((movie) => {
      const editedMovie = editedMovies.find((x) => x.id === movie.id)
      return editedMovie ?? movie
    })
  }

  static getWithDelay({ abortController, data, delay = 5000 }) {
    if (abortController && abortController.signal.aborted) {
      return Promise.reject(new DOMException('Aborted', 'AbortError'))
    }

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => resolve(data), delay)

      if (abortController) {
        abortController.signal.addEventListener('abort', () => {
          window.clearTimeout(timeout)
          reject(new DOMException('Aborted', 'AbortError'))
        })
      }
    })
  }

  static async getTop250Movies({ abortController, delay = 5000 }) {
    const data = ApiService.replaceByUpdatedMovies(top250MoviesMock.items)
    return ApiService.getWithDelay({ abortController, data, delay })
  }

  static async getMostPopularMovies({ abortController, delay = 5000 }) {
    const data = ApiService.replaceByUpdatedMovies(mostPopularMoviesMock.items)
    return ApiService.getWithDelay({ abortController, data, delay })
  }

  static async getMovieById({ id, abortController, delay = 3000 }) {
    const data = ApiService.replaceByUpdatedMovies([
      ...top250MoviesMock.items,
      ...mostPopularMoviesMock.items
    ]).find((movie) => movie.id === id)
    return ApiService.getWithDelay({ abortController, data, delay })
  }

  static async getEditedMovies({ abortController, delay = 3000 }) {
    return ApiService.getWithDelay({ abortController, data: editedMovies, delay })
  }

  static async searchMovies({ search, abortController, delay = 3000 }) {
    const data = ApiService.replaceByUpdatedMovies([
      ...top250MoviesMock.items,
      ...mostPopularMoviesMock.items
    ]).filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    return ApiService.getWithDelay({ abortController, data, delay })
  }

  static async updateMovie({ movie, abortController, delay = 3000 }) {
    let movieIndex = editedMovies.findIndex((x) => x.id == movie.id)
    if (movieIndex > -1) {
      editedMovies[movieIndex] = movie
    } else {
      editedMovies.push(movie)
    }
    editedMovies = [...editedMovies]
    return ApiService.getWithDelay({ abortController, movie, delay })
  }
}

export default ApiService
