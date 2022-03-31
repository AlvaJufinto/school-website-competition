import { useContext, useState, useEffect } from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import Home from "./pages/Home";
import Gallery from './pages/Gallery';
import Jobs from "./pages/Jobs";

import { GlobalStyles } from "./globals";

function App() {
  return (
    <Router>
        <GlobalStyles />
        <div className="App">
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </ParallaxProvider>
        </div>
    </Router>
  );
}

export default App;
