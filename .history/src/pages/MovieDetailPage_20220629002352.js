import React from "react";
import { useParams } from "react-router-dom";
const MovieDetailPage = () => {
  const { movieId } = useParams();
  return <div>Movie Details Page</div>;
};

export default MovieDetailPage;
