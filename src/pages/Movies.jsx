import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovieQuery } from 'services/fetchAPI';
import { SearchBox } from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!name) return;
    getMovieQuery(name)
      .then(data => {
        setVisibleMovies(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    getMovieQuery(name)
      .then(data => {
        setVisibleMovies(data.results);
      })
      .catch(error => console.log(error));
    // setSearchParams({});
  };

  const changeFilter = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchBox
        name={name}
        onChange={changeFilter}
        onSubmit={handleSubmit}
      />
      <MoviesList movies={visibleMovies} location={location} />
    </main>
  );
};

export default Movies;
