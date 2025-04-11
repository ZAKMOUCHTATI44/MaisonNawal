
import { useState, useEffect } from "react"
import ServiceCard from "./serviceCard"

export default function CatalogueContent() {
  const [catalogueData, setCatalogueData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    import("../../data/services.json")
      .then((data) => {
        setCatalogueData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Failed to load services data:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p>Chargement des services...</p>
      </div>
    )
  }

  if (!catalogueData) {
    return (
      <div className="py-16 text-center">
        <p>Impossible de charger les services. Veuillez réessayer plus tard.</p>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Nos Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de beauté et de bien-être. Cliquez sur une catégorie pour voir
            les détails et les tarifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catalogueData.categories.map((category) => (
            <ServiceCard
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
              services={category.services}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
