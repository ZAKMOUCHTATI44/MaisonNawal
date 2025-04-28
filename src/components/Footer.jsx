import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F8C8D5] text-black py-10 px-4 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
      
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">MAISON NAWEL</h2>
          <p className="text-md mb-4">
            Maison Nawel, situé à Marrakech, vous offre des soins d’exception en coiffure, esthétique, onglerie et bien-être.
            Profitez d’un moment de détente dans un cadre raffiné, où expertise et élégance se rencontrent pour révéler votre beauté.
          </p>
          <h3 className="text-xl font-bold my-4">0700–700057</h3>

        
          <div className="flex gap-4 justify-center md:justify-start mt-4">
  <a
    href="https://www.facebook.com/maisonnawel"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-xl hover:bg-white hover:text-pink-500 transition"
  >
    <i className="fab fa-facebook-f"></i>
  </a>
  <a
    href="https://www.instagram.com/maison_nawel"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-xl hover:bg-white hover:text-pink-500 transition"
  >
    <i className="fab fa-instagram"></i>
  </a>
  <a
    href="https://www.tiktok.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-xl hover:bg-white hover:text-pink-500 transition"
  >
    <i className="fab fa-tiktok"></i>
  </a>
</div>

        </div>

     
        <div className="border-t md:border-t-0 md:border-l border-white pl-0 md:pl-10 pt-6 md:pt-0 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Contactez Nous</h3>
          <p className="mb-2">N°6 Bd Mohamed VI, Marrakech 40000</p>
          <p className="mb-2">Maisonnawel.2024@gmail.com</p>
          <p className="mb-6">0700–700057</p>

          <h4 className="text-lg font-semibold mb-2">Heure d'ouverture</h4>
          <p>Lundi – Dimanche: 10h – 22H</p>
        </div>
      </div>

     
      <div className="text-center mt-10 text-sm border-t border-pink-300 pt-4">
        &copy; {new Date().getFullYear()} Maison Nawel. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
