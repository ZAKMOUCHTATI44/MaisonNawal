import img1 from "../assets/service/service1.jpeg";
import img2 from "../assets/service/service2.png";
import img3 from "../assets/service/service3.png";
import img4 from "../assets/service/service4.jpeg";
function ServicesSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-medium text-gray-500 tracking-wide">NOS SERVICES</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
           
          <div className="flex flex-col items-center">
  <div className="w-64 h-64 overflow-hidden mb-6 shadow-lg custom-mask">
    <img
      src={img3 || "/placeholder.svg?height=300&width=300"}
      alt="Massages et soins du corps"
      className="w-full h-full object-cover"
    />
  </div>
              <h3 className="text-xl font-serif text-gray-800 mb-2 text-center">Coiffure & Soins Capillaires</h3>
              <p className="text-gray-500 text-center text-sm max-w-xs">
                Brushing, coloration, lissage & rituels capillaires
              </p>
            </div>
  
         
            <div className="flex flex-col items-center">
  <div className="w-64 h-64 overflow-hidden mb-6 shadow-lg custom-mask">
    <img
      src={img1 || "/placeholder.svg?height=300&width=300"}
      alt="Massages et soins du corps"
      className="w-full h-full object-cover"
    />
  </div>
              <h3 className="text-xl font-serif text-gray-800 mb-2 text-center">Massages & Soins du Corps</h3>
              <p className="text-gray-500 text-center text-sm max-w-xs">Hammam, soins relaxants & rituels bien-être</p>
            </div>
  
          
            <div className="flex flex-col items-center">
  <div className="w-64 h-64 overflow-hidden mb-6 shadow-lg custom-mask">
    <img
      src={img2 || "/placeholder.svg?height=300&width=300"}
      alt="Massages et soins du corps"
      className="w-full h-full object-cover"
    />
  </div>
              <h3 className="text-xl font-serif text-gray-800 mb-2 text-center">Cils & Sourcils</h3>
              <p className="text-gray-500 text-center text-sm max-w-xs">Extensions, restructuration & teinture</p>
            </div>
  
           
            <div className="flex flex-col items-center">
  <div className="w-64 h-64 overflow-hidden mb-6 shadow-lg custom-mask">
    <img
      src={img4 || "/placeholder.svg?height=300&width=300"}
      alt="Massages et soins du corps"
      className="w-full h-full object-cover"
    />
  </div>
              <h3 className="text-xl font-serif text-gray-800 mb-2 text-center">Épilation & Beauté du Regard</h3>
              <p className="text-gray-500 text-center text-sm max-w-xs">
                Épilation au laser, microblading & rehaussement de cils
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ServicesSection
  