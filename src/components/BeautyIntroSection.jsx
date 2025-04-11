
import React from "react";
import imageBeauty from "../assets/BeautyIntro/BeautyIntro.jpeg"; 

function BeautyIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
       
        <div className="relative w-[320px] h-[320px] bg-pink-100 rounded-br-[120px] flex items-center justify-center shadow-md">
          <img
            src={imageBeauty}
            alt="Salon de beauté"
            className="w-[85%] h-[85%] object-cover rounded"
          />
        </div>

      
        <div className="max-w-xl text-center md:text-left">
          <hr className="w-24 border-gray-300 mb-4 mx-auto md:mx-0" />
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Chez <strong>Maison Nawel</strong>, nous croyons que la beauté de luxe peut être accessible à toutes. Nos tarifs sont pensés pour refléter la qualité et l'excellence des services que nous proposons.
            Chaque soin est une invitation à vivre une expérience haut de gamme dans un cadre raffiné, tout en restant à la portée de tous.
          </p>
          <a
              href="/catalogue"
             className="px-6 py-2 border border-black text-black font-medium rounded hover:bg-black hover:text-white transition duration-300"
            >
              Catalogue
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
        </div>
      </div>
    </section>
  );
}

export default BeautyIntroSection;
