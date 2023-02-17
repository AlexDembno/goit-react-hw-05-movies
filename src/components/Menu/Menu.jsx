import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

import styles from './Menu.module.css';

function Menu() {
  return (
    <div>
      <nav className={styles.wrapper}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Menu;
