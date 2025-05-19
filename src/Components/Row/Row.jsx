import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios/axios';
import styles from './Row.module.css';
import MovieCard from '../MovieCard/MovieCard';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={styles.row}>
      <h2 className={styles.rowTitle}>{title}</h2>
      <div className={styles.rowPosters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={styles.rowPoster}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;