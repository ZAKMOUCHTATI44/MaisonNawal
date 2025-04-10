import img1 from "../assets/review/imgReview1.jpeg"
import img2 from "../assets/review/imgReview2.jpeg"
import img3 from "../assets/review/profile.webp"

function ReviewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <div className="space-y-8">
            <div>
              <span className="text-gray-500 uppercase font-medium">NOS CLIENTS SATISFAITS</span>
              <div className="mt-2">
                <h2 className="inline-block text-3xl md:text-4xl font-serif text-gray-800 py-2 px-4">
                  Ce que disent nos clientes
                </h2>
                <div className="h-2"></div>
                <h2 className="inline-block text-3xl md:text-4xl font-serif text-gray-800  py-2 px-4">
                  enchantées
                </h2>
              </div>
            </div>

            <div className="relative pl-8 pr-4 py-6">
              <div className="absolute top-0 left-0 text-6xl text-[#f8a4a4] font-serif">"</div>
              <p className="text-gray-600 italic relative z-10 text-lg">
                "Maison Nawel est mon endroit préféré pour prendre soin de moi. L'équipe est aux petits soins, et chaque
                visite est une véritable parenthèse de bien-être. Je ressors toujours détendue et sublimée !"
              </p>

              <div className="flex items-center mt-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#f8a4a4]">
                  <img
                    src={img3||"/placeholder.svg?height=100&width=100"}
                    alt="Sofia M."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-lg">— Sofia M.</p>
                </div>
              </div>
            </div>
          </div>

     
          <div className="relative h-[500px]">
          
            <div
              className="absolute right-0 top-0 w-[90%] h-[90%] rounded-full bg-[#fce1e4] z-0"
              style={{
                borderRadius: "70% 60% 70% 60%",
                transform: "scale(1.2)",
              }}
            ></div>

        
            <div
              className="absolute left-0 top-0 w-[55%] h-auto z-10 shadow-lg"
              style={{
                aspectRatio: "3/4",
              }}
            >
              <img
                src={
                  img1 ||
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture5.PNG-aLLCIeyZkvMy6GF2DArLG6xoajhR72.png"
                }
                alt="Child playing"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div
              className="absolute right-0 bottom-0 w-[60%] h-auto z-20 shadow-lg overflow-hidden"
              style={{
                aspectRatio: "4/5",
                borderRadius: "0 0 30% 0",
              }}
            >
              <img
                src={
                  img2 ||
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture5.PNG-aLLCIeyZkvMy6GF2DArLG6xoajhR72.png"
                }
                alt="Facial treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
