import imgTeam2 from "../../assets/hero/slide3.jpeg";
import imgTeam1 from "../../assets/aboutPage/imgTeam1.jpeg";
function TeamSection() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#d4a373] uppercase tracking-wider font-medium">NOTRE ÉQUIPE</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-serif text-gray-800 max-w-2xl">
              Une Équipe de Passionnés au Service de Votre Beauté
            </h2>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-start">
          
            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Chez Maison Nawel, chaque soin est entre les mains d'experts passionnés. Coiffeurs, maquilleurs,
                esthéticiennes et thérapeutes, tous sont sélectionnés pour leur talent et leur expertise. Formés aux
                dernières tendances, ils vous offrent un accompagnement personnalisé et des prestations haut de gamme,
                avec une attention minutieuse aux moindres détails.
              </p>
  
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={imgTeam2}
                  alt="L'équipe de Maison Nawel"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
  
          
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <img
                  src={imgTeam1}
                  alt="Expérience de bien-être à Maison Nawel"
                  className="w-full h-auto object-cover object-right"
                />
              </div>
  
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center">Notre Engagement</h3>
                <p className="text-gray-600 italic text-center">
                  "Notre succès repose sur la confiance de nos clients et notre engagement à offrir des services toujours
                  plus innovants et adaptés à leurs besoins."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default TeamSection
  