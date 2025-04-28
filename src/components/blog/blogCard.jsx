import React from 'react';
import { Link } from 'react-router-dom'; 

export function BlogCard({
  image = "/placeholder.svg", 
  date = "01", 
  month = "Janvier", 
  categories = [], 
  title = "Titre par défaut", 
  excerpt = "Extrait par défaut", 
  slug = "slug-par-defaut"
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md">
      <Link to={`/blog/${slug}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 flex h-20 w-20 flex-col items-center justify-center bg-white p-3 text-center">
            <span className="text-3xl font-bold">{date}</span>
            <span className="text-sm text-gray-600">{month}</span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex gap-2">
          {categories.length > 0 ? categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.toLowerCase()}`}
              className="text-sm font-medium text-rose-600 hover:text-rose-700"
            >
              {category}
            </Link>
          )) : <span>Aucune catégorie disponible</span>}
        </div>

        <h2 className="mb-3 text-2xl font-serif font-bold text-gray-900 group-hover:text-rose-600">
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>

        <p className="mb-4 text-gray-600 line-clamp-3">
          {excerpt}
        </p>

        <Link
          to={`/blog/${slug}`}
          className="inline-block border-b-2 border-rose-600 pb-1 font-medium uppercase tracking-wider text-gray-900 hover:text-rose-600"
        >
          Lire la suite
        </Link>
      </div>
    </div>
  );
}
