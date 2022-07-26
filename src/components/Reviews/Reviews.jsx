import Box from 'components/Box';
import { Author, Text } from 'components/Text/Text.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import { Review } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <Box py={4}>
      {reviews.length > 0 ? (
        <Box as="ul">
          {reviews.map(({ id, author, content }) => {
            return (
              <Review key={id}>
                <Author>Autor: {author}</Author>
                <Text>{content}</Text>
              </Review>
            );
          })}
        </Box>
      ) : (
        <Text>We don't have any reviews for this movie.</Text>
      )}
    </Box>
  );
};
export default Reviews;
