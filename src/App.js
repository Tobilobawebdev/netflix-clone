import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './utils/requests';

function App() {
  return (
    <div>
    <Navbar/>
      <Banner/>
      <div className="grid-cols-8 gap-2 p-6">
      <Row rowID="1" title="Trending" fetchURL={requests.fetchTrending}/>
      <Row rowID="1" title="Only on Netflix" fetchURL={requests.fetchNetflixOriginals}/>
      <Row rowID="1" title="Top Rated" fetchURL={requests.fetchTopRated}/>
      </div>
      <div className="grid-cols-8 gap-2 p-6">
      <Row rowID="1" title="Get in on the Action" fetchURL={requests.fetchActionMovies}/>
      <Row rowID="1" title="Favourite Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row rowID="1" title="Horror Myths + Legends" fetchURL={requests.fetchHorrorMovies}/>
      <Row rowID="1" title="Love all the Way" fetchURL={requests.fetchRomanceMovies}/>
      <Row rowID="1" title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      </div>
    </div>
  );
}

export default App;
