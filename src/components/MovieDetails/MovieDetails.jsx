import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchFilmByID } from 'shared/services/Film-Api';
import MovieDetailsList from 'components/MovieDetailsList/MovieDetailsList';

function MovieDetails() {
  const [post, setPost] = useState();
  const [response, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        try {
          const data = await searchFilmByID(Number(id));
          setPost(data);
        } catch (response) {
          setError(response.message);
        }
      };
      fetch();
    }
  }, [id, response]);

  console.log(post);

  return (
    <>
      <MovieDetailsList post={post} />
    </>
  );
}
export default MovieDetails;
