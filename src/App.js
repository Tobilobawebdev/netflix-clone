import { Route, Routes } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNav from './components/MobileNav';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './utils/AuthContext';
import SignIn from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './pages/Account';
import { useRef } from 'react';

function App() {
  const containerRef = useRef(null)
  return (
    <>
    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
  <AuthContextProvider>
        <Navbar />
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/account"
            element={(
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
        )}
          />
        </Routes>
      </AuthContextProvider>
  </main>
</LocomotiveScrollProvider>
      
    </>
  );
}

export default App;
