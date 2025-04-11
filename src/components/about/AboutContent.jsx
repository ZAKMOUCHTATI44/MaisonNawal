import imgAbout from "../../assets/aboutPage/aboutImg.jpg"
function AboutContent() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <div className="relative">
            <img
              src={imgAbout ||"/placeholder.svg?height=400&width=600"}
              alt="Consultation avec une patiente"
              className="w-full rounded-lg shadow-lg"
            />
         
          </div>
  
       
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center">
              L'Élégance et le Bien-Être à Votre Portée
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bienvenue à Maison Nawel, un véritable havre de beauté et de bien-être au cœur de Marrakech. Notre institut
              vous offre une expérience unique où chaque soin est pensé pour sublimer votre beauté naturelle. Coiffure,
              manucure, soins du visage, massages... nous mettons notre expertise à votre service pour vous offrir des
              prestations haut de gamme dans un cadre élégant et apaisant.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Maison Nawel, c'est bien plus qu'un salon de beauté, c'est un lieu où votre beauté est magnifiée à chaque
              visite.
            </p>
  
            <div className="text-center pt-6">
              <h3 className="text-2xl font-serif text-gray-800">Maison Nawel</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutContent
  