import React from 'react';
import reactLogo from '../assets/react.svg';
import linktreeClone from '../assets/LinktreeClone.png'
import careerIn from '../assets/careerIn.png'
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
    title: 'Beatbook',
    description: 'Agenda cultural personalizada, donde los usuarios generan el propio contenido, compartiendo eventos, lugares y grupos de música. Nos centramos en dar visibilidad a estos tres pilares, permitiendo a los usuarios descubrir planes atractivos según sus preferencias.',
    tech: ['React', 'Python', 'MySQL'],
    github: 'https://github.com/Luisgr10/BeatBooK',
    demo: '#',
    image: 'https://private-user-images.githubusercontent.com/147260322/332569004-6a16f7c2-0b19-434b-89ed-67c95e167762.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIzNTkzNzcsIm5iZiI6MTc1MjM1OTA3NywicGF0aCI6Ii8xNDcyNjAzMjIvMzMyNTY5MDA0LTZhMTZmN2MyLTBiMTktNDM0Yi04OWVkLTY3Yzk1ZTE2Nzc2Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxMlQyMjI0MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMjcxOWJiZmMyMDI0Yjk1NjU5MmMzY2I4NzUxNjViYmRjNGQ0MmNjNzkzMDM3ZDk1MWE0ZjVmMmQ5ZjkyZmQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dUNaCyzbsH6YIRtAgEeRf5yESJ11DPGxKAxjERolzqE',
  },
  {
    title: 'Linktree Clone',
    description: 'Este proyecto es un clon de Linktree, una plataforma que permite a los usuarios consolidar y compartir todos sus enlaces importantes en un solo lugar. Al crear una página de perfil personalizable, los usuarios pueden agregar enlaces a sus redes sociales, sitios web, blogs, y cualquier otra página en línea que deseen destacar.',
    tech: ['React', 'Bootstrap', 'Css'],
    github: 'https://github.com/Luisgr10/LinkTree-clone',
    demo: 'https://sample-service-name-pfud.onrender.com/',
    image: linktreeClone,
  },
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
          <div key={idx} className="bg-[#264653] rounded-xl shadow flex flex-col hover:scale-105 transition-transform duration-300 overflow-hidden">
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
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-secondary transition-colors">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-secondary transition-colors">Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 