

export const redirectToWhatsApp = (message) => {
    const phoneNumber = "212700700057"
    const baseUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`
    
    const url = message 
      ? `${baseUrl}&text=${encodeURIComponent(message)}`
      : baseUrl
  
    window.open(url, "_blank")
  }
  