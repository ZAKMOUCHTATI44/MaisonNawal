import slide1 from "../../assets/hero/slide1.jpeg";
function CatalogueHero() {
    return (
      <div className="relative w-full h-[300px]">
        <img
           src={slide1}
          alt="Maison Nawel Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">Catalogue</h1>
          <div className="text-white text-sm md:text-base">
            <span>Home</span> <span className="mx-2">/</span> <span>Catalogue</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default CatalogueHero
  