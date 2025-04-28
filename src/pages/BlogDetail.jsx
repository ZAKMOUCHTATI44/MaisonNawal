"use client"
import { useParams } from "react-router-dom"
import blogsData from "../data/blogs.json"
import Navbar from "../components/Navbar"
import BlogHero from "../components/blog/blogHero"
import Footer from "../components/Footer"
import { CalendarIcon, ClockIcon, TagIcon, ChevronLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

function BlogDetail() {
  const { slug } = useParams()
  const blog = blogsData.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog non trouvé</h1>
          <Link to="/blog" className="text-rose-600 hover:text-rose-700 inline-flex items-center">
            <ChevronLeftIcon className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
        </div>
      </div>
    )
  }

 
  const relatedBlogs = blogsData
    .filter((b) => b.slug !== slug && b.categories.some((cat) => blog.categories.includes(cat)))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
       
        <Link to="/blog" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8 transition-colors">
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Retour aux articles
        </Link>

      
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.categories?.map((category, index) => (
              <span key={index} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">{blog.title}</h1>
          <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-6">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>
                {blog.date} {blog.month}
              </span>
            </div>
            {blog.readTime && (
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>{blog.readTime} min de lecture</span>
              </div>
            )}
          </div>
        </div>

     
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>

  
        <div className="prose prose-lg max-w-none mb-12">
          {typeof blog.content === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <div>{blog.content}</div>
          )}
        </div>

      
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-b border-gray-200 mb-12">
          {blog.tags && (
            <div className="flex items-center flex-wrap gap-2 mb-4 md:mb-0">
              <TagIcon className="w-4 h-4 text-gray-500 mr-2" />
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <span className="mr-3 text-gray-600">Partager:</span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

    
        {blog.author && (
          <div className="bg-gray-50 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center gap-6">
            {blog.author.avatar && (
              <img
                src={blog.author.avatar || "/placeholder.svg"}
                alt={blog.author.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            )}
            <div>
              <h3 className="text-xl font-bold mb-2">{blog.author.name || "Auteur"}</h3>
              <p className="text-gray-600 mb-4">{blog.author.bio || "Aucune biographie disponible."}</p>
              {blog.author.social && (
                <div className="flex space-x-3">
                  {Object.entries(blog.author.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-rose-600"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      
        {relatedBlogs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.slug} to={`/blog/${relatedBlog.slug}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedBlog.image || "/placeholder.svg"}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2 mb-2">
                        {relatedBlog.categories?.slice(0, 1).map((category, index) => (
                          <span
                            key={index}
                            className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-xs font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-rose-600 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {relatedBlog.date} {relatedBlog.month}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default BlogDetail
