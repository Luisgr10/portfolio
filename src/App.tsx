import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <>
      {/* Fondo con desenfoque global */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white/80 to-indigo-50/20 backdrop-blur-sm"></div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* Esquina superior izquierda */}
          <rect x="-60" y="-40" width="180" height="180" rx="60" fill="#E63946" fillOpacity="0.18" />
          {/* Esquina superior derecha */}
          <circle cx="1550" cy="60" r="90" fill="#2A9D8F" fillOpacity="0.13" />
          {/* Centro izquierda */}
          <rect x="100" y="400" width="120" height="120" rx="20" fill="#264653" fillOpacity="0.13" transform="rotate(30 160 460)" />
          {/* Centro derecha */}
          <rect x="1400" y="500" width="100" height="100" rx="30" fill="#22223B" fillOpacity="0.10" />
          {/* Abajo izquierda */}
          <polygon points="80,850 200,750 320,850" fill="#2A9D8F" fillOpacity="0.12" />
          {/* Abajo derecha */}
          <rect x="1350" y="800" width="120" height="60" rx="30" fill="#F8F9FA" fillOpacity="0.18" />
          {/* Centro */}
          <circle cx="800" cy="450" r="110" fill="#E63946" fillOpacity="0.08" />
          {/* Figura extra */}
          <rect x="700" y="100" width="80" height="80" stroke="#22223B" strokeWidth="8" fill="none" opacity="0.12" />
        </svg>
      </div>
      <Router>
        <Navbar />
        <main className="pt-12 relative z-10">
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
    </>
  );
}

export default App;
