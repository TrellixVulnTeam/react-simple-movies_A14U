import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "components/movies/MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "apiConfig/config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
// https://api.themoviedb.org/3/movie/now_playing?api_key=628e09f41a4b7a1f3b3c15de74faa337&language=en-US&page=1
const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      {!isLoading && <>
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
      </>}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.prototypes = {
  type: PropTypes.string.isRequired,
};
function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      Some thing went wrong with this component
    </p>
  );
}
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
