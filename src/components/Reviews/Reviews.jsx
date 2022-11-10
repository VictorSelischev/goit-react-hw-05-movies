import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchAPI';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
        .then(data => {
            console.log(data)
            setReviews(data.results);
        })
      .catch(error => console.log(error));
  }, [movieId]);

  // return ();
};

export default Reviews;
