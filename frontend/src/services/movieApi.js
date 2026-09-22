const API_URL =
  import.meta.env.REACT_APP_MOVIE_API_URL ||
  "http://localhost:3000";

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/api/movies`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  return data.movies;
};