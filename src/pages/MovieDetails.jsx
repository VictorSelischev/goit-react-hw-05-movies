import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from 'services/fetchAPI';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId)
      .then(data => {
        setMovieInfo(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (movieInfo === null) {
    return;
  }

    const { poster_path, title, vote_average, overview, genres } = movieInfo;
    
    console.log(poster_path);

  return (
    <div>
      <img src={poster_path} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>User score: {vote_average*10}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>
          {genres.map(genre => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
