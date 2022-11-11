import { useState, useEffect } from 'react';
import { TbMovie } from 'react-icons/tb';
import { useLocation } from 'react-router-dom';
import { getMoviesTrending } from 'services/fetchAPI';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesTrending()
      .then(data => {
        setMovies([...data.results]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h1 style={{ paddingTop: 32 }}>Trending Today</h1>
      <ul style={{ paddingTop: 32, paddingLeft: 16 }}>
        {movies.map(({ id, title }) => (
          <li key={id} style={{ marginBottom: 8 }}>
            <Link
              to={`movies/${id}`}
              state={{from: location}}
              style={{
                textDecoration: 'none',
                color: '#08213d',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <TbMovie style={{ paddingRight: 8 }} />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
