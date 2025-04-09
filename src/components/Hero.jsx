

import { useState } from "react"

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(2)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1))
  }

  return (
    <div className="relative bg-[#f8f3ee] h-[600px] overflow-hidden">
  
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture1.PNG-pFGjOCyo9Mzud2NeXRz9VTbgb4KSt4.png"
          alt="Elegant nails with crystals"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-gray-900 leading-tight">
            <span className="block"></span>
            <span className="block"></span>
            <span className="block"></span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
       
          </p>

          {/* <button className="mt-8 border border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-10 py-3 uppercase text-sm font-medium transition-colors duration-300">
            Shop Now
          </button> */}
        </div>

       
        <div className="absolute bottom-10 left-4 sm:left-8 lg:left-8 flex items-center space-x-6">
          <button
            onClick={prevSlide}
            className="text-gray-800 hover:text-gray-600 transition-colors"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <span className="text-gray-800 font-medium">
            {String(currentSlide).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
          </span>

          <button
            onClick={nextSlide}
            className="text-gray-800 hover:text-gray-600 transition-colors"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
