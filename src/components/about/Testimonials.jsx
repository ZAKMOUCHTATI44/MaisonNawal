import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "J'ai rarement été aussi bien reçue dans un institut. L'équipe est aux petits soins, on sent un vrai souci du détail. Après mon massage, j'étais complètement détendue. Une adresse incontournable !",
    name: "Inès L.",
    role: "Cliente fidèle",
  },
  {
    quote:
      "Une expérience unique ! Dès l'accueil, on se sent choyée. Mon soin du visage était un pur moment de détente et ma peau n'a jamais été aussi éclatante. Merci à toute l'équipe !",
    name: "Nadia R.",
    role: "Client fidèle",
  },
  {
    quote: "Le meilleur makeup que j'ai jamais eu ! Merci à toute l'équipe pour leur professionnalisme et leur écoute.",
    name: "Laila D.",
    role: "Cliente fidèle",
  },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#f9f8f6] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">CLIENTS SATISFAITS</h4>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">Ce que disent nos clients enchantés</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          Maison Nawel, c'est avant tout une histoire de confiance, racontée par celles qui vivent l'expérience au
          quotidien
        </p>

        <div className="flex justify-center mb-8">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-yellow-400 mx-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "{testimonials[index].quote}"
            </blockquote>
            <div className="font-semibold text-gray-900 text-lg">{testimonials[index].name}</div>
            <div className="text-gray-500">{testimonials[index].role}</div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === index ? "bg-[#d4a373]" : "bg-gray-300"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials