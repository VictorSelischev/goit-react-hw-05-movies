const API_KEY = '1b8e17a420c442be5859016e939643f4';

export const getMoviesTrending = () => {
const urlMoviesTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    return fetch(urlMoviesTrending).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const getMovie = (id) => {
const urlMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    return fetch(urlMovie).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}