import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/hero/slide3.jpeg";
import img2 from "../../assets/aboutPage/imgTeam1.jpeg";

const WhyChooseUs = () => {
  const [isImg1Front, setIsImg1Front] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImg1Front((prev) => !prev);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[400px]">
        
          <motion.img
            src={isImg1Front ? img2 : img1}
            alt="Image arrière"
            initial={false}
            animate={{
              scale: 1,
              zIndex: 10,
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="rounded-lg shadow-lg w-full h-full object-cover absolute top-0 left-0"
          />

       
          <motion.img
            src={isImg1Front ? img1 : img2}
            alt="Image avant"
            initial={false}
            animate={{
              scale: 0.75,
              x: 50,
              y: 220,
              zIndex: 20,
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="rounded-lg shadow-xl w-3/4 absolute border-4 border-white"
          />
        </div>

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
