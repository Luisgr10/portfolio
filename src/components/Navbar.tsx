import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-light/10 border-b border-dark/10 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/">
          <Logo size={170} />
        </Link>
        <ul className="flex gap-6 text-dark font-medium">
          <li><a href="#about" className="hover:text-primary transition-colors">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Proyectos</a></li>
          <li><Link to="/articulos" className="hover:text-primary transition-colors">Artículos</Link></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 