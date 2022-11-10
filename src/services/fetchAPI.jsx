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

export const getMovieInfo = (id) => {
const urlMovieInfo = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    return fetch(urlMovieInfo).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}

export const getMovieCast = (id) => {
  const movieCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  return fetch(movieCast).then(response => {
    if (!response.ok) {
      throw new Error(response.status)
    }
    return response.json();
  })
}