import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`
  );
  return <div>Movie Details Page</div>;
};

export default MovieDetailPage;
