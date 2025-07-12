import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-24 px-4">
      <h2 className="text-3xl font-bold text-primary mb-4">Sobre mí</h2>
      {/* Bio y experiencia */}
      <p className="max-w-2xl text-center text-dark mb-6">
        Soy Luisgr, Programador Full Stack. Apasionado por la tecnología y el desarrollo de soluciones modernas y eficientes. Tengo experiencia en proyectos de distintas industrias y disfruto aprender y compartir conocimiento.
      </p>
      {/* Galería de fotos */}
      <div className="flex gap-4 mb-6">
        {/* Aquí irán las fotos */}
        <div className="w-24 h-24 bg-accent rounded-lg animate-pulse" />
        <div className="w-24 h-24 bg-accent rounded-lg animate-pulse" />
      </div>
      {/* Botón para descargar CV */}
      <a href="/cv.pdf" download className="bg-primary text-light px-6 py-2 rounded-lg font-semibold shadow hover:bg-secondary transition-colors">Descargar CV</a>
    </section>
  );
};

export default About; 