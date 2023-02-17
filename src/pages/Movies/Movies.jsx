import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchFilmApi } from 'shared/services/Film-Api';
import Loader from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';

function Movies() {
  const [articles, setArticles] = useState([]);
  const [response, setError] = useState(null);
  const [loading, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const location = useLocation();

  const getSearch = search => {
    setSearchParams({ search });
    setArticles([]);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetch = async () => {
      try {
        setLoader(true);
        const data = await searchFilmApi(search);
        setArticles(data.data.results);
      } catch (response) {
        setError(response.message);
      } finally {
        setLoader(false);
      }
    };
    fetch();
  }, [response, search]);

  return (
    <>
      <SearchBox getSearch={getSearch} />
      <ul>
        {loading && <Loader />}
        {!loading &&
          articles.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Movies;
