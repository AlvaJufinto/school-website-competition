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

import { GlobalStyles } from "./globals";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
