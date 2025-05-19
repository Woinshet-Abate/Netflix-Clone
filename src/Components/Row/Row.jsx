import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios/axios';
import styles from './Row.module.css';
import MovieCard from '../MovieCard/MovieCard';

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.rowPosters}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
