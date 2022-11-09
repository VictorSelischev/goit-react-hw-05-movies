const API_KEY = '1b8e17a420c442be5859016e939643f4';
const urlMoviesTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export const getMoviesTrending = () => {
  return fetch(urlMoviesTrending).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
