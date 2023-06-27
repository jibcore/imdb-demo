// import axios from 'axios'
import top250MoviesMock from '../mocks/top-250-movies.json'
import mostPopularMoviesMock from '../mocks/most-popular-movies.json'

// const url = import.meta.env.VITE_API_URL
// const apiKey = import.meta.env.VITE_API_KEY

class ApiService {
  static getWithDelay({ abortController, data, delay = 5000 }) {
    if (abortController.signal.aborted) {
      return Promise.reject(new DOMException('Aborted', 'AbortError'))
    }

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => resolve(data), delay)

      abortController.signal.addEventListener('abort', () => {
        window.clearTimeout(timeout)
        reject(new DOMException('Aborted', 'AbortError'))
      })
    })
  }

  static async getTop250Movies({ abortController, delay = 5000 }) {
    return ApiService.getWithDelay({ abortController, data: top250MoviesMock.items, delay })
  }

  static async getMostPopularMovies({ abortController, delay = 5000 }) {
    return ApiService.getWithDelay({ abortController, data: mostPopularMoviesMock.items, delay })
  }

  static async searchMovies({ search, abortController, delay = 3000 }) {
    const data = [...top250MoviesMock.items, ...mostPopularMoviesMock.items].filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    return ApiService.getWithDelay({ abortController, data, delay })
  }
}

export default ApiService
