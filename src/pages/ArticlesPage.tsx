import React, { useEffect, useState, useMemo } from 'react';
import { fetchLinkPreview } from '../services/linkPreview';
import ArticleCard from '../components/ArticleCard';
import type { Article } from '../components/ArticleCard';
import { articleUrls } from '../data/articles';

const initialArticles: Article[] = articleUrls.map(url => ({ url }));

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4);

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

  // Filtrar artículos basado en búsqueda
  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return articles;
    
    return articles.filter(article => {
      const searchLower = searchTerm.toLowerCase();
      const title = article.preview?.title?.toLowerCase() || '';
      const description = article.preview?.description?.toLowerCase() || '';
      
      return title.includes(searchLower) || description.includes(searchLower);
    });
  }, [articles, searchTerm]);

  // Calcular artículos para la página actual
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Resetear a página 1 cuando cambia la búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <section id="articles" className="min-h-screen py-24 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Artículos</h2>
      
      {/* Sección introductoria minimalista */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="text-center">
          <p className="text-2xl font-light text-gray-600 mb-8 leading-relaxed">
            Escribo desde mi experiencia personal, compartiendo lo que me ha ayudado a 
            <span className="font-medium text-primary"> avanzar</span> y 
            <span className="font-medium text-primary"> adaptarme</span> en el mundo IT.
          </p>
          
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-6">
            Publico mis artículos en 
            <span className="font-semibold text-blue-600"> LinkedIn</span>, 
            donde reflexiono sobre los procesos, cambios y aprendizajes que forman parte de este camino.
          </p>
          
          <p className="text-xl italic text-gray-800 font-light">
            "No busco dar lecciones, sino acompañar a quienes también están construyendo su espacio en esta industria."
          </p>
        </div>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Búsqueda */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Información de resultados */}
          <div className="text-sm text-gray-600">
            {filteredArticles.length} de {articles.length} artículos
          </div>
        </div>
      </div>

      {/* Grid de artículos */}
      <div className="max-w-5xl mx-auto">
        {currentArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentArticles.map((article) => (
                <ArticleCard key={article.url} article={article} />
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Anterior
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === number
                        ? 'bg-primary text-white'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron artículos</h3>
            <p className="text-gray-500">Intenta con otros términos de búsqueda</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesPage; 