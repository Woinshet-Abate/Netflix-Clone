import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';
import requests from '../../Utils/request/request';
import Footer from '../../Components/Footer/Footer';
import styles from './Home.module.css';
export default function Home() {
 return (
    <div className={styles.home}>
      <NavBar />
      <Banner />

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Trending Now</h2>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      </div>

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Top Rated</h2>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      </div>

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Action Movies</h2>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      </div>

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Comedy Movies</h2>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      </div>

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Horror Movies</h2>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </div>

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Romance Movies</h2>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      </div>

      <div className={styles.rowContainer}>
        <h2 className={styles.sectionTitle}>Documentaries</h2>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>

      <Footer />
    </div>
  );
}
