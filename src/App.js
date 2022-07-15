import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNav from './components/MobileNav';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
