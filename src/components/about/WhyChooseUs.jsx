// src/components/WhyChooseUs.jsx
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="relative">
          <img
            src="/images/soin-visage.jpg" // Remplace par le bon chemin
            alt="Soin du visage"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="/images/salon-interieur.jpg" // Remplace par le bon chemin
            alt="Salon de beauté"
            className="rounded-lg shadow-xl w-3/4 absolute -bottom-10 left-12 border-4 border-white"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Pourquoi choisir <span className="text-pink-600">Maison Nawel</span> ?
          </h2>
          <p className="text-gray-700 mb-4">
            Chez <span className="font-semibold">Maison Nawel</span>, profitez de
            <span className="font-semibold"> soins personnalisés</span> avec des
            <span className="font-semibold"> produits de qualité</span>, pour une mise en beauté sur-mesure.
          </p>
          <p className="text-gray-700">
            Dans un <span className="font-semibold">cadre élégant et relaxant</span>, notre
            <span className="font-semibold"> équipe experte</span> vous garantit un service d'exception avec une
            <span className="font-semibold"> hygiène irréprochable</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
