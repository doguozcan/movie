export default function MovieCard({ movie }) {
  return (
    <div className="group relative">
      <div className="group-hover:opacity-30 duration-300">
        <img
          className="h-72 w-full object-cover"
          src={movie.Poster}
          alt={movie.Title}
        ></img>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center text-center text-white text-xl opacity-0 group-hover:opacity-100 duration-300">
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}
