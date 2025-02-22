import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Gallery,
  About,
  Inquiry,
  StoryList,
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
} from "./pages";
import { Header, Footer, ScrollTop } from "./components";
import Welcome from "./components/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowWelcome(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("hasVisited", "true");
    setShowWelcome(false);
  };

  const handleLogoClick = () => {
    localStorage.removeItem("hasVisited"); // Reset localStorage
    setShowWelcome(true); // Show welcome page
  };

  return (
    <div>
      {showWelcome ? (
        <Welcome action={handleEnter} />
      ) : (
        <div className="all_view">
          <BrowserRouter>
            <Header onLogoClick={handleLogoClick} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/stories" element={<StoryList />} />
              <Route
                path="/stories/2024-10-17-Bhagyesh&Khevana"
                element={<Page1 />}
              />
              <Route
                path="/stories/2024-11-05-Lancy&Pavan"
                element={<Page2 />}
              />
              <Route
                path="/stories/2024-09-22-Stephanie&Soumyadeep"
                element={<Page3 />}
              />
              <Route
                path="/stories/2024-12-12-Yash&Shraddha"
                element={<Page4 />}
              />
              <Route
                path="/stories/2024-10-13-Yasha&Bhargesh"
                element={<Page5 />}
              />
            </Routes>
            <Footer />
            <ScrollTop />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
