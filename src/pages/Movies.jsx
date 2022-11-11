import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovieQuery } from 'services/fetchAPI';

const Movies = () => {
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query') ?? '';
  console.log(name);

  // useEffect(() => {
  //   getMovieQuery(name)
  //     .then(data => {
  //       setVisibleMovies(data.results);
  //     })
  //     .catch(error => console.log(error));
  // }, [name]);

  const handleSubmit = e => {
    e.preventDefault();
    getMovieQuery(name)
      .then(data => {
        setVisibleMovies(data.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <main>
      <form
        style={{ marginTop: 32, marginBottom: 32 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          style={{ outline: 'none' }}
          placeholder="Please enter movie"
          value={name}
          onChange={e =>
            setSearchParams({ query: e.target.value })
          }
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={visibleMovies} />
    </main>
  );
};

export default Movies;
