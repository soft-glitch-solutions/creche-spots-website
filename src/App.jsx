import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Price from "./pages/Properties/Price";
import Property from "./pages/Property/Property";
import ContactPage from "./pages/Contact/ContactPage";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favourites/Favourites";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import UserDetailContext from "./context/UserDetailContext";

function App() {
  const queryClient = new QueryClient();
  const [showSplash, setShowSplash] = useState(true);
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Change the delay time as needed
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  {/* Add conditional redirect here */}
                  <Route path="/" element={<Website />} />
                  <Route path="/price">
                    <Route index element={<Price />} />
                  </Route>
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/favourites" element={<Favourites />} />
                  
                  {/* Example of redirecting based on condition */}
                  <Route
                    path="/login"
                    element={
                      userDetails.token ? (
                        <Navigate to="/dashboard" /> // Redirect if already logged in
                      ) : (
                        <div>Please log in</div>
                      )
                    }
                  />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        )}
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
