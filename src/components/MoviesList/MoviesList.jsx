import { Link } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import { ListItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <TbMovie style={{ paddingRight: 8 }} />
          <Link
            to={`${movie.id}`}
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
