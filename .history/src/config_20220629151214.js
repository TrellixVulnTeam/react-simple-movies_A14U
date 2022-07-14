export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "628e09f41a4b7a1f3b3c15de74faa337";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieCredits: () => `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`,
};
