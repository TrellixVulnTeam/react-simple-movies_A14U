import React from "react";

const MovieCard = ({ item }) => {
  const {} = item;
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/s/n/snwh_poster_bluemontage_4x5fb_1_.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-xl font-bold mb-3">Spiderman: No way home</h3>
      <div className="flex items-center justify-between opacity-50 mb-10">
        <span>2021</span>
        <span>8.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
