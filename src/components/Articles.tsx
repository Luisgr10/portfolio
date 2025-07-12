import React from 'react';

const articles = [
  {
    title: 'Artículo 1',
    date: '2024-06-01',
    summary: 'Resumen del artículo 1.',
    link: 'https://www.linkedin.com/pulse/un-commit-de-ideas-disfrutando-la-carrera-hacia-metas-luis-wpddf',
  },
  {
    title: 'Artículo 2',
    date: '2024-05-15',
    summary: 'Resumen del artículo 2.',
    link: '#',
  },
];

const Articles = () => {
  return (
    <section id="articles" className="min-h-screen py-24 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Artículos</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {articles.map((article, idx) => (
          <a key={idx} href={article.link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow p-6 hover:bg-accent/10 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-secondary">{article.title}</h3>
              <span className="text-xs text-dark/60">{article.date}</span>
            </div>
            <p className="text-dark/80">{article.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles; 