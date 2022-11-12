import { getMovieCast } from 'services/fetchAPI';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Image, List, ListItem, SectionTitle } from './Casts.styled';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => {
        setCasts(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (casts === null) {
    return;
  }

  return (
    <section>
      <SectionTitle>Casts</SectionTitle>
      <List>
        {casts.map(cast => {
          const {
            profile_path,
            original_name,
            character,
            credit_id,
          } = cast;
          let urlCastImage = '';
          profile_path === null
            ? (urlCastImage = 
                require("images/art-poster-not-today-120x180.jpg"))
            : (urlCastImage = `https://image.tmdb.org/t/p/w500${profile_path}`);

          return (
            <ListItem key={credit_id}>
              <Image src={urlCastImage} alt={original_name} />
              <p style={{marginBottom: 12}}>{original_name}</p>
              <p>Character: {character}</p>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

export default Cast;
