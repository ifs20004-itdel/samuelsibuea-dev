import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { About, Achievement, Experience, Home, Projects } from "./pages";
import Loader from "./components/Loader/Loader";
import FloatingButton from "./components/FAB/FloatingButton.jsx";


const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? (
    <Loader />
  ) : (
    <main className="bg-slate-300/20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <FloatingButton />
    </main>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
