export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "628e09f41a4b7a1f3b3c15de74faa337";
const tmdEndPoint = "https://api.themoviedb.org/3/movie";
export const tmdAPI = {
  getMovieList: (type) =>
    `  getMovieList: (type) =>
    /${type}?api_key=${apiKey},
};
