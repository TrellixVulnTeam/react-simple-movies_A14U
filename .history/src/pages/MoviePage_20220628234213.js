import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import MovieList from "../components/movies/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/pupular?api_key=628e09f41a4b7a1f3b3c15de74faa337`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10">
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
