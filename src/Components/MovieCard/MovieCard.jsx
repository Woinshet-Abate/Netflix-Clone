import React from 'react';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <img
      className={styles.poster}
      src={`${base_url}${movie.poster_path}`}
      alt={movie.title}
    />
  );
}
