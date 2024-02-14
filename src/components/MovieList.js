import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0 sm:gap-1 md:gap-2">
      {movies.map((movie) => {
        return <MovieCard movie={movie} />
      })}
    </div>
  )
}
