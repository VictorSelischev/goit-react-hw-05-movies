import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/fetchAPI';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieInfo(movieId)
      .then(data => {
        setMovieInfo(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (movieInfo === null) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  const urlMoviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  console.log(poster_path);

  return (
    <div style={{ display: 'flex', paddingTop: 32 }}>
      <img src={urlMoviePoster} alt={title} style={{ width: 300 }} />
      <div style={{ paddingLeft: 32 }}>
        <h3>{title}</h3>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h4>Overview</h4>
        <p style={{ lineHeight: 1.4 }}>{overview}</p>
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
