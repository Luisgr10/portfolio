import React, { useState } from 'react';
import Logo from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar navegación a secciones desde cualquier ruta
  const handleNav = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false); // Cierra el menú móvil al navegar
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cierra el menú móvil al navegar a artículos
  const handleArticles = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-light/10 border-b border-dark/10 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <Logo size={170} />
        </Link>
        {/* Botón hamburger solo en móvil */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          <span className={`block w-7 h-1 bg-dark rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-dark rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-dark rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Menú horizontal en desktop */}
        <ul className="hidden md:flex gap-6 text-dark font-medium">
          <li><a href="#about" onClick={handleNav('about')} className="hover:text-primary transition-colors">Sobre mí</a></li>
          <li><a href="#projects" onClick={handleNav('projects')} className="hover:text-primary transition-colors">Proyectos</a></li>
          <li><Link to="/articulos" onClick={handleArticles} className="hover:text-primary transition-colors">Artículos</Link></li>
          <li><a href="#contact" onClick={handleNav('contact')} className="hover:text-primary transition-colors">Contacto</a></li>
        </ul>
        {/* Menú móvil desplegable */}
        <ul
          className={`fixed top-0 left-0 w-full bg-light/95 shadow-lg flex flex-col items-center gap-8 pt-28 pb-10 text-xl font-semibold text-dark transition-all duration-300 md:hidden z-40
            ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-10 opacity-0 pointer-events-none'}`}
        >
          <li><a href="#about" onClick={handleNav('about')} className="hover:text-primary transition-colors">Sobre mí</a></li>
          <li><a href="#projects" onClick={handleNav('projects')} className="hover:text-primary transition-colors">Proyectos</a></li>
          <li><Link to="/articulos" onClick={handleArticles} className="hover:text-primary transition-colors">Artículos</Link></li>
          <li><a href="#contact" onClick={handleNav('contact')} className="hover:text-primary transition-colors">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 