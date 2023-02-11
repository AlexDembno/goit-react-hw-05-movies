import { useState, useEffect } from 'react';
import { searchFilmApi } from 'shared/services/Film-Api';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieDetails from 'components/MovieList/MovieList';
// import styles from './Movies.module.css';

function Movies() {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [response, setError] = useState(null);

  const getSearch = search => {
    setSearch(search);
    setArticles([]);
  };

  useEffect(() => {
    if (search) {
      const fetch = async () => {
        try {
          const data = await searchFilmApi(search);
          setArticles(presState => [...presState, ...data.data.results]);
        } catch (response) {
          setError(response.message);
        }
      };
      fetch();
    }
  }, [response, search]);

  return (
    <>
      <SearchBox getSearch={getSearch} />
      <MovieDetails articles={articles} />
    </>
  );
}

export default Movies;
