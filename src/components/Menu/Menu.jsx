import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import NotFound from 'components/NotFound/NotFound';
import MovieDetails from 'components/MovieDetails/MovieDetails';

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
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Menu;
