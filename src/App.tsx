import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-12">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/articulos" element={<ArticlesPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
