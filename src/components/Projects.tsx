import React from 'react';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    tech: ['Next.js', 'Prisma'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción breve del proyecto 4.',
    tech: ['Vue', 'Vite'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 ">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
            <p className="text-dark">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-accent text-dark px-2 py-1 rounded text-xs font-medium">{t}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 