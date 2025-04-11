import { useState, useEffect } from 'react';
import slide1 from "../assets/hero/slide1.jpeg";
import slide2 from "../assets/hero/slide2.jpg";
import slide3 from "../assets/hero/slide3.jpeg";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  

  const slides = [
    {
      image: slide1,
      title: "Révélez Votre Beauté Naturelle",
      paragraph: "Parce que chaque femme mérite de se sentir sublime, Maison Nawel vous offre des soins d'exception alliant expertise, innovation et raffinement. Entrez dans un univers où bien-être et élégance ne font qu'un."
    },
    {
      image: slide2,
      title: "Maison Nawel : L'Art de la Beauté",
      paragraph: "Notre salon est bien plus qu'un espace de soins, c'est une expérience sur-mesure où chaque détail est pensé pour magnifier votre beauté. Entre savoir-faire et produits d'exception, laissez-vous choyer par nos experts."
    },
    {
      image: slide3,
      title: "Sublimez Chaque Instant",
      paragraph: "Que ce soit pour un relooking, un soin du visage, une mise en beauté ou un moment de détente, Maison Nawel vous propose une parenthèse enchantée où votre bien-être est notre priorité."
    }
  ];

  
  const slidesCount = slides.length;

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slidesCount);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []); 
  
  return (
    <div className="relative h-screen overflow-hidden">
    
      <div className="relative h-full w-full">
   
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        
       
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
  
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
         
          {slides.map((slide, index) => (
            <div key={index} className={`${currentImage === index ? 'block' : 'hidden'}`}>
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 transform ${
                currentImage === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {slide.title}
              </h1>
              
              <p className={`text-lg md:text-xl text-white mb-8 transition-all duration-700 delay-200 transform ${
                currentImage === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {slide.paragraph}
              </p>
            </div>
          ))}
          
     
          <a
              href="/catalogue"
              className="bg-[#d4a373] hover:bg-[#c29365] text-white px-8 py-3 uppercase font-medium transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos collections
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#d4a373] group-hover:w-full transition-all duration-300"></span>
            </a>
        </div>
      </div>
      
    
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentImage(index)} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;