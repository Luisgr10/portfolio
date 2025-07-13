import React from "react";
import profileImage from "../assets/Yellow and White Blob Organic Abstract Woman LinkedIn Profile Picture.png";
import cvPdf from "../assets/LuisGuilarteRodriguezResume.pdf";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-[70vh] flex items-center justify-center py-16 px-4 relative overflow-hidden"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full relative z-10">
        {/* Texto y botón */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Sobre mí</h1>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-dark/80 mb-8 leading-relaxed text-lg md:text-xl max-w-2xl">
            Soy <span className="font-semibold text-primary">Luijo</span>, programador Full Stack que hizo la transición desde la <span className="font-semibold text-secondary">odontología</span> hacia el desarrollo de software. Actualmente colaboro en la formación de estudiantes de programación, integrando habilidades técnicas y metodologías organizativas. Estoy en proceso de certificación como <span className="font-semibold text-secondary">Scrum Master</span>, con el objetivo de facilitar equipos de trabajo en entornos dinámicos. Experiencia en <span className="font-semibold text-primary">React</span>, <span className="font-semibold text-primary">Tailwind</span>, <span className="font-semibold text-primary">Python</span>, <span className="font-semibold text-primary">AWS</span> y rápida adaptación a nuevas tecnologías según los requerimientos del proyecto.
          </p>
          <a
            href={cvPdf}
            download
            className="bg-primary text-light px-8 py-3 rounded-lg font-semibold shadow hover:bg-secondary transition-colors text-lg mt-2"
          >
            Descargar CV
          </a>
        </div>
        {/* Foto de perfil con fondo decorativo y animación */}
        <div className="flex flex-col items-center flex-shrink-0 mb-8 md:mb-0">
          <div className="relative flex items-center justify-center">
            {/* Imagen de perfil sin fondo blanco, solo sombra */}
            <img
              src={profileImage}
              alt="Luijo - Programador Full Stack"
              className="w-64 h-64 md:w-96 md:h-96 rounded-lg object-cover shadow-xl z-10 animate-fade-in"
              style={{ animationDelay: '0.2s', background: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
