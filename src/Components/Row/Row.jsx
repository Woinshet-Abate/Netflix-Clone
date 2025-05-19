import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from "react-youtube"; 
import axios from '../../Utils/axios/axios';
import styles from './Row.module.css';
import MovieCard from '../MovieCard/MovieCard';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close trailer if already opened
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.row}>
      <div className={styles.rowPosters}>
  {movies.map((movie) => (
    <div key={movie.id} className={styles.movieItem}>
      <img
        onClick={() => handleClick(movie)}
        className={styles.rowPoster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.name || movie.title}
      />
      <p className={styles.movieTitle}>{movie.title || movie.name}</p>
    </div>
  ))}
</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
