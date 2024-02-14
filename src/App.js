import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import MovieList from './components/MovieList'

export default function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search || 'spider man'}&apikey=${
          process.env.REACT_APP_API_KEY
        }`
      )
      const data = await response.json()
      if (data.Search) setMovies(data.Search)
    }

    fetchMovies()
  }, [search])

  return (
    <div>
      <SearchInput search={search} setSearch={setSearch} />
      <MovieList movies={movies} />
    </div>
  )
}
