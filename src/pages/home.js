import React, { useEffect, useState } from "react";
import MovieDetails from "../components/movieDetails";

export default function Home() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();

      if (response.ok) {
        setMovies(data);
      } else {
        console.log(data);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="movies">
        <h1 className=" text-center">All Movies You Have</h1>
        {movies &&
          movies.map((movie) => <MovieDetails key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
}
