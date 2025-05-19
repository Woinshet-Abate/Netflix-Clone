import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';
import requests from '../../Utils/request/request';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </>
  );
}
