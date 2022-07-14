import React from "react";
import useSWR from "swr";
import MovieList from "../components/movies/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/pupular?api_key=628e09f41a4b7a1f3b3c15de74faa337`,
    fetcher
  );
  return (
    <div className="py-10">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
