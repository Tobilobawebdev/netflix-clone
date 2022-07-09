import React from 'react';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../utils/requests';

function Home() {
  return (
    <div>
      <Banner />
      <div className="px-3">
        <Row rowID="1" title="Trending" fetchURL={requests.fetchTrending} />
        <Row rowID="2" title="Only on Netflix" fetchURL={requests.fetchNetflixOriginals} />
        <Row rowID="3" title="Top Rated" fetchURL={requests.fetchTopRated} />
      </div>
      <div className="px-3">
        <Row rowID="4" title="Get in on the Action" fetchURL={requests.fetchActionMovies} />
        <Row rowID="5" title="Favourie Movies" fetchURL={requests.fetchComedyMovies} />
        <Row rowID="6" title="Horror Myths + Legends" fetchURL={requests.fetchHorrorMovies} />
        <Row rowID="7" title="Love all the Way" fetchURL={requests.fetchRomanceMovies} />
        <Row rowID="8" title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default Home;
