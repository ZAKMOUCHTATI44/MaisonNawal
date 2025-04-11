import slide1 from "../../assets/hero/slide1.jpeg";

function AboutHero() {
    return (
      <div className="relative w-full h-[400px]">
        <img
          src={slide1}
          alt="Maison Nawel Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
            L'Excellence au Service de Votre Bien-Être
          </h1>
          <p className="text-white max-w-3xl text-center text-sm md:text-base">
            Chez Maison Nawel, nous répondons aux exigences des femmes recherchant l'excellence en offrant des services
            premium. Grâce à des produits d'exception et des techniques innovantes, chaque soin garantit des résultats
            durables et une expérience haut de gamme.
          </p>
        </div>
      </div>
    )
  }
  
  export default AboutHero
  