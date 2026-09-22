const movies = require("../data/movies");

const getMovies = (req, res) => {
  res.status(200).json({
    success: true,
    count: movies.length,
    movies
  });
};

const getMovieById = (req, res) => {
  const movieId = Number(req.params.id);

  const movie = movies.find((item) => item.id === movieId);

  if (!movie) {
    return res.status(404).json({
      success: false,
      message: "Movie not found"
    });
  }

  return res.status(200).json({
    success: true,
    movie
  });
};

module.exports = {
  getMovies,
  getMovieById
};