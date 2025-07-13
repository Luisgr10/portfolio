import React, { useEffect, useState } from 'react';
import { fetchLinkPreview } from '../services/linkPreview';
import ArticleCard from './ArticleCard';
import type { Article } from './ArticleCard';
import { articleUrls } from '../data/articles';

const initialArticles: Article[] = articleUrls.map(url => ({ url }));

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);

  useEffect(() => {
    async function loadPreviews() {
      const updated = await Promise.all(
        articles.map(async (article) => ({
          ...article,
          preview: await fetchLinkPreview(article.url),
        }))
      );
      setArticles(updated);
    }
    loadPreviews();
    // eslint-disable-next-line
  }, []);

  return (
    <section id="articles" className="min-h-screen py-24 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Artículos</h2>
      
      {/* Sección introductoria */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-primary">Escribo desde mi experiencia personal</span>, 
            compartiendo lo que me ha ayudado a avanzar y adaptarme en el mundo IT.
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <span className="mx-4 text-primary font-medium">•</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Publico mis artículos en <span className="font-semibold text-blue-600">LinkedIn</span>, 
            donde reflexiono sobre los <span className="font-semibold text-primary">procesos</span>, 
            <span className="font-semibold text-primary"> cambios</span> y 
            <span className="font-semibold text-primary"> aprendizajes</span> que forman parte de este camino.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "No busco dar lecciones, sino <span className="font-semibold text-primary">acompañar</span> a quienes también están 
              construyendo su espacio en esta industria."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles; 