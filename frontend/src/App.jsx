import { useEffect, useState } from "react";

import MovieList from "./components/MovieList";
import { fetchMovies } from "./services/movieApi";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch {
        setError("Unable to load movies.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <main className="app">
      <header className="header">
        <h1>MovieHub</h1>
        <p>DevOps CI/CD Project</p>
      </header>

      <section className="content">
        <h2>Movies</h2>

        {loading && <p>Loading movies...</p>}

        {error && (
          <p role="alert">
            {error}
          </p>
        )}

        {!loading && !error && (
          <MovieList movies={movies} />
        )}
      </section>
    </main>
  );
}

export default App;