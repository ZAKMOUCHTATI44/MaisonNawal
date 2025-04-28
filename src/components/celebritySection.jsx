import img1 from "../assets/celebrity/celeb1.png"
import img2 from "../assets/celebrity/celeb2.png"
import img3 from "../assets/celebrity/celeb3.png"
import img4 from "../assets/celebrity/celeb4.png"
import img5 from "../assets/celebrity/celeb5.png"

function CelebritySection() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F8C8D5] uppercase tracking-wider font-medium">EXPLOREZ NOS PRESTATIONS</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800">
              Les célébrités qui nous ont fait confiance
            </h2>
          </div>
  
        
          <div className="grid grid-cols-12 gap-4">
       
            <div className="col-span-12 md:col-span-4 lg:col-span-3 row-span-1">
              <div className="aspect-[3/4] w-full h-full overflow-hidden">
                <img
                  src={img3||"/placeholder.svg?height=400&width=300"}
                  alt="Célébrité 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
  
          
            <div className="col-span-12 md:col-span-4 lg:col-span-6 row-span-2">
              <div className="aspect-[3/4] w-full h-full overflow-hidden">
                <img
                  src={img1 ||"/placeholder.svg?height=400&width=300"}
                  alt="Célébrité 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
  
            <div className="col-span-12 md:col-span-4 lg:col-span-3 row-span-1">
              <div className="aspect-[3/4] w-full h-full overflow-hidden">
                <img
                  src={img2||"/placeholder.svg?height=400&width=300"}
                  alt="Célébrité 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
  
         
            <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-1">
              <div className="aspect-[4/3] w-full h-full overflow-hidden">
                <img
                 src={img4||"/placeholder.svg?height=400&width=300"}
                  alt="Célébrité 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
  
          
            <div className="col-span-12 md:col-span-6 lg:col-span-3 row-span-1">
              <div className="aspect-[4/3] w-full h-full overflow-hidden">
                <img
                  src={img5||"/placeholder.svg?height=400&width=300"}
                  alt="Célébrité 5"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default CelebritySection
  