import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=628e09f41a4b7a1f3b3c15de74faa337`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCurso="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path, id, genres } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div
        className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]
    rounded-lg"
      ></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>

        {genres.length > 0 && (
          <div className="flex items-center gap-x-3 mb-8">
            {genres.map((item) => (
              <span
                key={item.id}
                className="py-2 px-4 border border-white rounded-md"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}

        <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
      </div>
    </div>
  );
}

export default Banner;
