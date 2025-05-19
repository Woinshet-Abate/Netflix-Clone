import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios/axios';
import requests from '../../Utils/request/request';
import styles from './Banner.module.css';

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length)]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className={styles.content}>
        <h1>{movie?.title || movie?.name}</h1>
        <p>{movie?.overview}</p>
      </div>
    </header>
  );
}
