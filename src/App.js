import Navbar from './components/Navbar';
import Row from './components/Row';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import MobileNav from './components/MobileNav'

function App() {
  return (
    <div>
    <Navbar/>
    <MobileNav/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/movie/:movieId' element={<MovieDetails/>} >
            <Route path=':movieId' />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
