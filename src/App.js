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
      <Row rowID="1" title="Trending" fetchURL={requests.fetchNetflixOriginals}/>
      <Row rowID="1" title="Trending" fetchURL={requests.fetchTopRated}/>
      </div>
    </div>
  );
}

export default App;
