
import img3 from "../assets/aboutSection/abouSec3.webp";
import img4 from "../assets/aboutSection/abouSec4.jpg";

function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
      
          <div className="space-y-8">
            <div>
              <span className="text-[#F8C8D5] uppercase font-medium">À PROPOS</span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mt-2">Bienvenue chez Maison Nawel</h2>
            </div>

            <div className="relative h-80 md:h-96">
           
              <div
                className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden shadow-lg"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 85% 85%, 0% 100%)",
                }}
              >
                <img src={img3|| "/placeholder.svg"} alt="Manicure session" className="w-full h-full object-cover" />
              </div>

          
              <div
                className="absolute bottom-0 right-0 w-2/3 h-2/3 overflow-hidden shadow-lg"
                style={{
                  clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 85%)",
                }}
              >
                <img src={img4 || "/placeholder.svg"} alt="Colorful manicure" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

  
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-[#F8C8D5] text-[#000000] rounded-full text-sm font-medium">
                MAISON DE BEAUTÉ
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mt-4">Bienvenue chez Maison Nawel</h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Chez Maison Nawel, nous sommes fiers de proposer des prestations de beauté haut de gamme, alliant
              professionnalisme, hygiène impeccable et détente totale. Notre mission ? Vous offrir une expérience de
              luxe à des prix adaptés, pour que chaque visite soit une occasion de vous faire plaisir sans compromis sur
              la qualité.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-[#F8C8D5]">+12</p>
                <p className="text-gray-600">Experts en beauté et bien-être</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#F8C8D5]">+20</p>
                <p className="text-gray-600">Soins d'exception pour une mise en beauté parfaite</p>
              </div>
            </div>
            <a
              href="/about"
              className="px-6 py-2 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition duration-300"
            >
              À propos
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
