import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { searchFilmByID } from 'shared/services/Film-Api';

import styles from './MovieDetails.module.css';

function MovieDetails() {
  const [post, setPost] = useState([]);
  const [genres, setGenres] = useState([]);
  const [response, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        try {
          const data = await searchFilmByID(Number(id));
          setPost(data.data);
          setGenres(data.data.genres);
        } catch (response) {
          setError(response.message);
        }
      };
      fetch();
    }
  }, [id, response]);

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.btn} onClick={() => navigate(from)}>
          Go back
        </button>

        <div className={styles.wrapper_img}>
          {post.poster_path && (
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}
              alt={post.title}
              width="200"
            />
          )}

          <div className={styles.wrapper_text}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.text}>{post.overview}</p>
            <p className={styles.text}>{post.popularity}</p>
            <p className={styles.title}>Genres:</p>
            <ul>
              {genres.map(({ id, name }) => (
                <li className={styles.list} key={id}>
                  <p className={styles.text}>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <NavLink className={styles.link} state={{ from }} to="cast">
          Cast
        </NavLink>
        <NavLink className={styles.link} state={{ from }} to="reviews">
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}
export default MovieDetails;
