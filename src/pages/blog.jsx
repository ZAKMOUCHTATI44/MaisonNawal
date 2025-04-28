"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BlogHero from "../components/blog/blogHero"
import { BlogCard } from "../components/blog/blogCard"
import blogsData from "../data/blogs.json"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

function Blog() {
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [blogsPerPage] = useState(6) // Nombre d'articles par page

  useEffect(() => {
    setBlogs(blogsData)
  }, [])

  // Logique de pagination
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(blogs.length / blogsPerPage)

  // Changer de page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll vers le haut de la page quand on change de page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Aller à la page précédente
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
  }

  // Aller à la page suivante
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1)
    }
  }

  // Générer les numéros de page à afficher
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5 // Nombre maximum de pages à afficher

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = startPage + maxPagesToShow - 1

    if (endPage > totalPages) {
      endPage = totalPages
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BlogHero />

      <div className="container mx-auto p-6">
        {/* Affichage du nombre total d'articles */}
        <div className="mb-6 text-gray-600">
          Affichage de {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, blogs.length)} sur {blogs.length} articles
        </div>

        {/* Grille d'articles */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {currentBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              date={blog.date}
              month={blog.month}
              categories={blog.categories}
              title={blog.title}
              excerpt={blog.excerpt}
              slug={blog.slug}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center my-8">
            <nav className="flex items-center space-x-1" aria-label="Pagination">
              {/* Bouton précédent */}
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-rose-100 hover:text-rose-700"
                }`}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Précédent</span>
              </button>

              {/* Première page et ellipsis si nécessaire */}
              {getPageNumbers()[0] > 1 && (
                <>
                  <button
                    onClick={() => paginate(1)}
                    className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-rose-100 hover:text-rose-700"
                  >
                    1
                  </button>
                  {getPageNumbers()[0] > 2 && (
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                      ...
                    </span>
                  )}
                </>
              )}

              {/* Numéros de page */}
              {getPageNumbers().map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                    currentPage === number
                      ? "bg-rose-600 text-white"
                      : "text-gray-700 hover:bg-rose-100 hover:text-rose-700"
                  }`}
                >
                  {number}
                </button>
              ))}

              {/* Dernière page et ellipsis si nécessaire */}
              {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                <>
                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                      ...
                    </span>
                  )}
                  <button
                    onClick={() => paginate(totalPages)}
                    className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-rose-100 hover:text-rose-700"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {/* Bouton suivant */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-rose-100 hover:text-rose-700"
                }`}
              >
                <span className="sr-only">Suivant</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        )}

        {/* Message si aucun article */}
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">Aucun article disponible pour le moment</h3>
            <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos nouveaux contenus</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Blog
