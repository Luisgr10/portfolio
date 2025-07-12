import React from 'react';
import type { LinkPreviewResponse } from '../services/linkPreview';

export interface Article {
  url: string;
  preview?: LinkPreviewResponse;
}

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block align-text-bottom mr-2">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
);

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  if (!article.preview) {
    return (
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center min-h-[192px]">
        <span className="text-dark/60">Cargando preview...</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-0 flex flex-col hover:bg-accent/10 transition-colors overflow-hidden">
      {article.preview.image && (
        <img
          src={article.preview.image}
          alt={article.preview.title}
          className="w-full h-48 object-cover"
          style={{ minHeight: 192 }}
        />
      )}
      <div className="flex-1 flex flex-col px-6 py-4">
        <h3 className="text-lg font-semibold text-secondary mb-2 line-clamp-2 min-h-[3.5rem]">{article.preview.title}</h3>
        <p className="text-dark/80 mb-4 line-clamp-4 min-h-[5.5rem]">{article.preview.description}</p>
        <div className="flex justify-center mt-auto">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-primary text-light px-4 py-2 rounded font-semibold shadow hover:bg-secondary transition-colors"
            style={{ width: 'fit-content' }}
          >
            <LinkedInIcon />
            Leer artículo en LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 