import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log(data);
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailPage;
