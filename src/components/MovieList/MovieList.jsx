import { Link } from 'react-router-dom';

function MovieList({ articles }) {
  const element = articles.map(({ id, title, poster_path }) => (
    <Link key={id} to={`/movies/${id}`}>
      <li>
        <p>{title}</p>
      </li>
    </Link>
  ));

  return <ul>{element}</ul>;
}

export default MovieList;
