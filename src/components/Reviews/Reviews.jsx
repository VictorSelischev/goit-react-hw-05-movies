import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchAPI';
import { useEffect, useState } from 'react';
import { ListItem, Paragraph, SectionTitle } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        console.log(data);
        setReviews(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map(review => (
          <ListItem key={review.id}>
            <SectionTitle>Autor: {review.author}</SectionTitle>
            <Paragraph>{review.content}</Paragraph>
          </ListItem>
        ))
      )}
    </ul>
  );
};

export default Reviews;
