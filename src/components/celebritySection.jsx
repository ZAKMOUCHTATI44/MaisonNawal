"use client"

import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"
import img1 from "../assets/celebrity/celeb1.png"
import img2 from "../assets/celebrity/celeb2.png"
import img3 from "../assets/celebrity/celeb3.png"
import img4 from "../assets/celebrity/celeb4.png"
import img5 from "../assets/celebrity/celeb5.png"


register()

const celebrities = [
  {
    name: "Célébrité 1",
    image: img1,
    role: "Influenceuse & Créatrice de contenu",
  },
  {
    name: "Célébrité 2",
    image: img2,
    role: "Actrice & Ambassadrice",
  },
  {
    name: "Célébrité 3",
    image: img3,
    role: "Chanteuse & Personnalité TV",
  },
  {
    name: "Célébrité 4",
    image: img4,
    role: "Mannequin & Influenceuse",
  },
  {
    name: "Célébrité 5",
    image: img5,
    role: "Actrice & Créatrice de contenu",
  },
]

function CelebritySection() {
  const swiperRef = useRef(null)

  useEffect(() => {
  
    const swiperContainer = swiperRef.current

    const params = {
      effect: "coverflow",
      grabCursor: true,
      loopAdditionalSlides: 5, 
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      freeMode: true,
      freeModeMomentum: false,
      loop: true, 
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 3000,
      coverflowEffect: {
        rotate: 5,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
    

  
    Object.assign(swiperContainer, params)

    swiperContainer.initialize()
  }, [])

  return (
    <section className="py-16 bg-gray-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F8C8D5] uppercase tracking-wider font-medium">EXPLOREZ NOS PRESTATIONS</span>
          <h2 className="text-[#000000] mt-3 text-3xl md:text-4xl lg:text-5xl font-serif">
           Les célébrités qui nous ont fait confiance
          </h2>
          <p className="text-[#000000] mt-4 max-w-2xl mx-auto">
          Découvrez les personnalités qui ont choisi Maison Nawel pour leurs soins de beauté
          </p>

        </div>

        <div className="relative py-10">
          <swiper-container ref={swiperRef} init="false" class="w-full h-[500px]">
            {celebrities.map((celebrity, index) => (
              <swiper-slide key={index} style={{ width: "300px", height: "400px" }}>
                <div className="relative h-full rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={celebrity.image || "/placeholder.svg?height=400&width=300"}
                    alt={celebrity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-medium">{celebrity.name}</h3>
                    <p className="text-gray-300 text-sm">{celebrity.role}</p>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>

        
          <div className="swiper-button-prev !text-white !opacity-70 hover:!opacity-100 transition-opacity"></div>
          <div className="swiper-button-next !text-white !opacity-70 hover:!opacity-100 transition-opacity"></div>

         
          <div className="swiper-pagination !bottom-0 !text-white"></div>
        </div>
      </div>
    </section>
  )
}

export default CelebritySection
