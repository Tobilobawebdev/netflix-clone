import { Route, Routes } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { lazy, Suspense, useRef } from 'react';
import { AuthContextProvider } from './utils/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// components import using codeslitting to optimize the react app
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const MobileNav = lazy(() => import('./components/MobileNav'));
const Account = lazy(() => import('./pages/Account'));

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options
    }
  }
      watch={
    [
      // ..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <AuthContextProvider>
          <Suspense fallback={<div>loading......</div>}>
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
          </Suspense>
        </AuthContextProvider>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
