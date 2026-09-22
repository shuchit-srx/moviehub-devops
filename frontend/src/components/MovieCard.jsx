const MovieCard = ({ movie }) => {
  return (
    <article className="movie-card">
      <h2>{movie.title}</h2>

      <p>
        <strong>Year:</strong> {movie.year}
      </p>

      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
    </article>
  );
};

export default MovieCard;