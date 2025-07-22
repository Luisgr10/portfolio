import React from 'react';
import reactLogo from '../assets/react.svg';
import linktreeClone from '../assets/LinktreeClone.png'
import careerIn from '../assets/careerIn.png'
import beatbook from '../assets/beatbook.png'
import { FaReact, FaPython, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiExpress, SiNextdotjs, SiPrisma, SiVite, SiBootstrap, SiCss3, SiTypescript, SiTailwindcss, SiFastapi, SiJavascript } from 'react-icons/si';

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="w-4 h-4 mr-1 inline-block" />,
  Python: <FaPython className="w-4 h-4 mr-1 inline-block" />,
  MySQL: <SiMysql className="w-4 h-4 mr-1 inline-block" />,
  'Node.js': <FaNodeJs className="w-4 h-4 mr-1 inline-block" />,
  Express: <SiExpress className="w-4 h-4 mr-1 inline-block" />,
  MongoDB: <SiMongodb className="w-4 h-4 mr-1 inline-block" />,
  'Next.js': <SiNextdotjs className="w-4 h-4 mr-1 inline-block" />,
  Prisma: <SiPrisma className="w-4 h-4 mr-1 inline-block" />,
  Vue: <FaVuejs className="w-4 h-4 mr-1 inline-block" />,
  Vite: <SiVite className="w-4 h-4 mr-1 inline-block" />,
  Bootstrap: <SiBootstrap className="w-4 h-4 mr-1 inline-block" />,
  Css: <SiCss3 className="w-4 h-4 mr-1 inline-block" />,
  TypeScript: <SiTypescript className="w-4 h-4 mr-1 inline-block" />,
  Tailwindcss: <SiTailwindcss className="w-4 h-4 mr-1 inline-block" />,
  FastAPI: <SiFastapi className="w-4 h-4 mr-1 inline-block" />,
  'Fuse.js': <SiJavascript className="w-4 h-4 mr-1 inline-block" />,
};

const projects = [
  {
    title: 'Career Insights',
    description: 'plataforma diseñada para apoyar a los orientadores escolares, ofreciendo a estudiantes y familias una guía moderna, ágil y basada en datos reales del mercado laboral.',
    tech: ['React', 'TypeScript', 'Tailwindcss', 'Python', 'FastAPI'],
    github: 'https://github.com/Luisgr10/Career-Insights',
    demo: 'https://candid-crepe-646fd9.netlify.app/',
    image: careerIn,
  },
  {
    title: 'Prework Guide',
    description: 'Aplicación web interactiva para estudiantes del Prework de una academia tipo bootcamp. Cuenta con un chatbot propio para responder a las consultas de los alumnos.',
    tech: ['React', 'TypeScript', 'Tailwindcss', 'Fuse.js'],
    github: 'https://github.com/Luisgr10/prework-guide',
    demo: '#',
    image: reactLogo,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 ">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#1E3F66] rounded-xl shadow flex flex-col hover:scale-105 transition-transform duration-300 overflow-hidden">
            {project.image && (
              <img src={project.image} alt={project.title + ' logo'} className="w-full h-40 object-cover object-top rounded-t-xl" />
            )}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-white/90">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-[#E63946] text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                    {techIcons[t]}
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 