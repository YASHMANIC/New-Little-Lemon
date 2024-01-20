import './App.css';
import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import pages from './utils/pages';
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import UnderConstruction from "./components/pages/UnderConstruction";
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import ScrollToTop from "./ScrollToTop"

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* Scroll To Top wrap all the things */}
        <ScrollToTop />
        <Routes>
          <Route 
            path={pages.get("home").path}
            element={
              <React.Suspense>
                <Layout />
              </React.Suspense>
            }
          >
            <Route 
              path={pages.get("home").path}
              element={
                <React.Suspense>
                  <Home />
                </React.Suspense>
              }
            />
            <Route 
              path={pages.get("about").path}
              element={
                <React.Suspense>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path={pages.get("bookings").path}
              element={
                <React.Suspense>
                  <Bookings />
                </React.Suspense>
              }
            />
            <Route
              path={pages.get("confirmedBooking").path}
              element={
                <React.Suspense>
                  <ConfirmedBooking />
                </React.Suspense>
              } 
            />
            <Route
              path={pages.get("orderOnline").path}
              element={
                <React.Suspense>
                  <UnderConstruction />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <React.Suspense>
                <NotFound />
              </React.Suspense>
            } 
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
