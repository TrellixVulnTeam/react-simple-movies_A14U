import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=628e09f41a4b7a1f3b3c15de74faa337&language=en-US&page=1
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=628e09f41a4b7a1f3b3c15de74faa337`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="movie-list">
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

export default MovieList;
<div className="movie-list">
  <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
    <SwiperSlide>
      <MovieCard></MovieCard>
    </SwiperSlide>
  </Swiper>
</div>;
