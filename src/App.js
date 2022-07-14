import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNav from './components/MobileNav';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Downloads from './pages/Downloads';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div>
      <Navbar />
      <MobileNav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
