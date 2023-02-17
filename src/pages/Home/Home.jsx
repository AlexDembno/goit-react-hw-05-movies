import { searchFilmTrending } from 'shared/services/Film-Api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoader] = useState(false);
  const [response, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoader(true);
        const data = await searchFilmTrending();
        setMovies(data.data.results);
      } catch (response) {
        setError(response.message);
      } finally {
        setLoader(false);
      }
    };
    fetch();
  }, [response]);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.text}>Trending today</p>
        <ul>
          {loading && <Loader />}
          {!loading &&
            movies.map(({ id, title }) => (
              <li className={styles.list} key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
