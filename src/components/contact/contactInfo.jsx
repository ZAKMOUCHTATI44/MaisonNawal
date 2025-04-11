import img1 from "../../assets/contacte/contactImg1.jpeg";
import img2 from "../../assets/BeautyIntro/BeautyIntro.jpeg";

import { MapPin, Phone, Mail } from "lucide-react"

function ContactInfo() {
  return (
    <section className="py-8 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img1|| "/placeholder.svg?height=500&width=400"}
                alt="Maison Nawel Business Card"
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img
                 src={img2 || "/placeholder.svg?height=500&width=400"}
                alt="Maison Nawel Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

      
          <div className="space-y-8 pt-12 md:pt-0">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Contactez Nous</h2>
            <p className="text-gray-600">
              Réjoignze nous <br />à travers les adresses <br />
              ci-dessous
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#fce1e4] p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-[#f8a4a4]" />
                </div>
                <div>
                  <span className="font-medium text-gray-800">Addresse:</span>
                  <p className="text-gray-600">N°6 Bd Mohamed VI, Marrakech 40000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#fce1e4] p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-[#f8a4a4]" />
                </div>
                <div>
                  <span className="font-medium text-gray-800">Appel:</span>
                  <p className="text-gray-600">0700-700057</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#fce1e4] p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-[#f8a4a4]" />
                </div>
                <div>
                  <span className="font-medium text-gray-800">Email:</span>
                  <p className="text-gray-600">hello@smalhomez.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
