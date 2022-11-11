import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'services/fetchAPI';
import { Outlet } from 'react-router-dom';
import {
  Button,
  Image,
  Wrapper,
  Description,
  FilmName,
  DescriptionText,
  DescriptionTitle,
} from './MovieDetails.styled';
import { IoArrowUndoSharp } from 'react-icons/io5';

const addInfos = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  // console.log(location);

  useEffect(() => {
    getMovieInfo(movieId)
      .then(data => {
        setMovieInfo(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieInfo) { return null };

  const { poster_path, title, vote_average, overview, genres } =
    movieInfo;

  const urlMoviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <Link to={backLinkHref} style={{textDecoration: 'none'}}><Button type="button" >
        <IoArrowUndoSharp size="16" style={{ marginRight: 4 }} />
        Go Back
      </Button></Link>
      <Wrapper>
        <Image src={urlMoviePoster} alt={title} />
        <Description>
          <FilmName>{title}</FilmName>
          <DescriptionText>
            User score: {Math.round(vote_average * 10)}%
          </DescriptionText>
          <DescriptionTitle>Overview</DescriptionTitle>
          <DescriptionText>{overview}</DescriptionText>
          <DescriptionTitle>Genres</DescriptionTitle>
          <DescriptionText>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </DescriptionText>
          <DescriptionTitle style={{ borderTop: '1px solid' }}>
            Additional information
          </DescriptionTitle>
          <ul>
            {addInfos.map(({ href, text }) => (
              <li key={href}>
                <Link to={href} state={{from: '/movies'}} style={{ lineHeight: 1.4 }}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </Description>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default MovieDetails;
