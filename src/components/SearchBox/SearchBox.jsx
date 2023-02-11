import { useState } from 'react';

import styles from './SearchBox.module.css';

function SearchBox({ getSearch }) {
  const [search, setSearch] = useState('');

  const handlSubmit = e => {
    e.preventDefault();
    getSearch(search);
    setSearch('');
  };

  const handlSearch = e => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handlSubmit}>
        <input
          className={styles.input}
          name="search"
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          required
          onChange={handlSearch}
        />
        <button className={styles.button} type="submit">
          <span className={styles.span}>Search</span>
        </button>
      </form>
    </>
  );
}

export default SearchBox;
