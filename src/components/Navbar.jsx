import { useState } from "react";
import { redirectToWhatsApp } from "../utils/whatsapp"; 
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F8C8D5] py-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center">
               <a href="/" className="flex items-center">
              <img
                src={logo || "/placeholder.svg"}
                alt="Maison Nawal Logo"
                className="h-12 w-auto hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 mx-10">
            <a
              href="/"
              className="text-gray-800 hover:text-[#d4a373] px-3 py-2 text-sm font-medium uppercase relative group"
            >
              Accueil
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-[#d4a373] px-3 py-2 text-sm font-medium uppercase relative group"
            >
              À propos
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/catalogue"
              className="text-gray-800 hover:text-[#d4a373] px-3 py-2 text-sm font-medium uppercase relative group"
            >
              Catalogue
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/blog"
              className="text-gray-800 hover:text-[#d4a373] px-3 py-2 text-sm font-medium uppercase relative group"
            >
              Blog
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-[#d4a373] px-3 py-2 text-sm font-medium uppercase relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => redirectToWhatsApp("Bonjour 🌸 Je suis intéressé(e) par vos prestations et j’aimerais en savoir davantage. Pourriez-vous me partager plus d’informations, s’il vous plaît ?")}
              className="border border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-6 py-2 flex items-center transition-colors duration-300 uppercase text-sm font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactez-nous
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#F8C8D5] shadow-lg z-20">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-pink-200 rounded-md"
            >
              Accueil
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-pink-200 rounded-md"
            >
              À propos
            </a>
            <a
              href="/catalogue"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-pink-200 rounded-md"
            >
              Catalogue
            </a>
            <a
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-pink-200 rounded-md"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-pink-200 rounded-md"
            >
              Contact
            </a>
            <div className="px-3 py-3">
              <button
                onClick={() => redirectToWhatsApp("Bonjour, je souhaite obtenir des informations sur vos services.")}
                className="w-full border border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-4 py-2 flex items-center justify-center transition-colors duration-300 uppercase text-sm font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
