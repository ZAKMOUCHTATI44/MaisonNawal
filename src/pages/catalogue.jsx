import Navbar from "../components/Navbar"
import CatalogueHero from "../components/catalogue/catalogueHero"
import CatalogueContent from "../components/catalogue/catalogueContent"
import Footer from "../components/Footer"

function CataloguePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CatalogueHero />
      <CatalogueContent />
      <Footer />
    </div>
  )
}

export default CataloguePage
