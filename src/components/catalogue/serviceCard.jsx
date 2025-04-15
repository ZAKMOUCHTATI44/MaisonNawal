import { useState } from "react"
import { X } from "lucide-react"

export default function ServiceCard({ title, image, services }) {
  const [isOpen, setIsOpen] = useState(false)

  const redirectToWhatsApp = () => {
    const phoneNumber = "212700700057"
    const message = `Bonjour, je suis intéressé(e) par le service : ${title}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-xl font-medium text-center px-4">{title}</h3>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-[#f8a4a4] text-white p-2 rounded-full hover:bg-[#f8a4a4]/80 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-serif text-gray-800 mb-6 text-center">{title}</h2>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{service.name}</h3>
                      {service.price && <span className="font-medium text-[#f8a4a4]">{service.price}</span>}
                    </div>
                    {service.description && <p className="text-gray-600 text-sm mt-1">{service.description}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={redirectToWhatsApp}
                  className="bg-[#f8a4a4] hover:bg-[#c38e5e] text-black px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Réserver sur WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
