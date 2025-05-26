"use client"

import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"
import img1 from "../assets/celebrity/celeb1.png"
import img2 from "../assets/celebrity/celeb2.png"
import img3 from "../assets/celebrity/celeb3.png"
import img4 from "../assets/celebrity/celeb4.png"
import img5 from "../assets/celebrity/celeb5.png"
import img6 from "../assets/celebrity/celeb6.jpg"
import img7 from "../assets/celebrity/celeb7.jpg"
import img8 from "../assets/celebrity/celeb8.jpg"
import img9 from "../assets/celebrity/celeb9.jpg"
import img10 from "../assets/celebrity/celeb10.jpg"
import img11 from "../assets/celebrity/celeb11.jpg"
import img12 from "../assets/celebrity/celeb12.jpg"
import img13 from "../assets/celebrity/celeb13.jpg"
import img14 from "../assets/celebrity/celeb14.jpg"
import img15 from "../assets/celebrity/celeb15.jpg"
import img16 from "../assets/celebrity/celeb16.jpg"

register()

const celebrities = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img13 },
  { image: img14 },
  { image: img15 },
  { image: img16 },
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
        slideShadows: false, 
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
                <div className="relative h-full rounded-lg overflow-hidden group">
                  <img
                    src={celebrity.image || "/placeholder.svg?height=400&width=300"}
                    alt={`Célébrité ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>

          <div className="swiper-button-prev !text-white !opacity-70 hover:!opacity-100 transition-opacity"></div>
          <div className="swiper-button-next !text-white !opacity-70 hover:!opacity-100 transition-opacity"></div>

         
        </div>
      </div>
    </section>
  )
}

export default CelebritySection
