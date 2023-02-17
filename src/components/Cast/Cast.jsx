import { searchFilmByCast } from 'shared/services/Film-Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import styles from './Cast.module.css';

function Cast() {
  const [cast, setCast] = useState([]);
  const [response, setError] = useState(null);
  const [loading, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        try {
          setLoader(true);
          const data = await searchFilmByCast(Number(id));
          setCast(data.data.cast);
        } catch (response) {
          setError(response.message);
        } finally {
          setLoader(false);
        }
      };
      fetch();
    }
  }, [id, response]);

  const element = cast.map(({ id, name, profile_path, character }) => (
    <li key={id}>
      {profile_path && (
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
          width="100"
        />
      )}
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.list}>
        {loading && <Loader />}
        {!loading && cast.length === 0 ? 'No cast' : element}
      </ul>
    </>
  );
}

export default Cast;
