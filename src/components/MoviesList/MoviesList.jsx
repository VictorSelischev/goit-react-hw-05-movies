import { Link } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import { ListItem } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, location }) => {

  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <TbMovie style={{ paddingRight: 8 }} />
          <Link
            to={`${movie.id}`}
            state={{from: location}}
            style={{
              textDecoration: 'none',
              color: '#08213d',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <p>{movie.original_title}</p>
          </Link>
        </ListItem>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
