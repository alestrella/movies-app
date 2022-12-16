import Box from 'components/Box';
import { Author, Text } from 'components/Text/Text.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, IMG_URL } from 'services/moviesApi';
import noAvatar from '../../assets/noavatar.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (movieId) {
      fetchMovieCast(movieId)
        .then(setCast)
        .catch(error => console.log(error));
    }
  }, [movieId]);

  return (
    <Box py={4}>
      {cast && (
        <Box
          display="grid"
          gridGap={16}
          gridTemplateColumns="repeat(auto-fit, 180px)"
          as="ul"
        >
          {cast
            .slice(0, 20)
            .map(({ id, name, profile_path: profileImg, character }) => {
              return (
                <Box mb={4} width={150} textAlign="center" as="li" key={id}>
                  <img
                    src={profileImg ? `${IMG_URL + profileImg}` : noAvatar}
                    alt={name}
                  />
                  <Author>{name}</Author>
                  <Text>Character: {character}</Text>
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
};
export default Cast;
