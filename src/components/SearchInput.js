export default function SearchInput({ search, setSearch }) {
  return (
    <div className="flex justify-end m-2">
      <input
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  )
}
