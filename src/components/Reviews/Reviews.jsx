import { searchFilmByReviews } from 'shared/services/Film-Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import styles from './Reviews.module.css';

function Reviews() {
  const [reviews, setCast] = useState([]);
  const [response, setError] = useState(null);
  const [loading, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        try {
          setLoader(true);
          const data = await searchFilmByReviews(Number(id));
          setCast(data.data.results);
        } catch (response) {
          setError(response.message);
        } finally {
          setLoader(false);
        }
      };
      fetch();
    }
  }, [id, response]);

  const element = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3 className={styles.title}>{author}</h3>
      <p className={styles.text}>{content}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.list}>
        {loading && <Loader />}
        {!loading && reviews.length === 0 ? 'No reviews' : element}
      </ul>
    </>
  );
}

export default Reviews;
