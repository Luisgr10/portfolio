import React, { useEffect, useState } from 'react';
import { fetchLinkPreview } from '../services/linkPreview';
import ArticleCard from '../components/ArticleCard';
import type { Article } from '../components/ArticleCard';
import { articleUrls } from '../data/articles';

const initialArticles: Article[] = articleUrls.map(url => ({ url }));

const ArticlesPage: React.FC = () => {
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage; 