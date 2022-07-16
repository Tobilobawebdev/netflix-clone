import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNav from './components/MobileNav';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './utils/AuthContext';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
