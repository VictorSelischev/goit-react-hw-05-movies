import { useState, useEffect } from 'react';
import { TbMovie } from 'react-icons/tb';
import { getMoviesTrending } from 'services/fetchAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesTrending()
      .then(data => {
        console.log(data.results);
        setMovies([...data.results]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h1 style={{ paddingTop: 32 }}>Trending Today</h1>
      <ul style={{ paddingTop: 32, paddingLeft: 16, listStyle: 'none' }}>
        {movies.map(({ id, title }) => (
          <li
            key={id}
            style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}
          >
            <TbMovie style={{ paddingRight: 8 }} />
            {title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
