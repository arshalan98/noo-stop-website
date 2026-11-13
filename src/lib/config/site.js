export const siteConfig = {
  // Brand Information
  BrandName: "Noo Stop",
  ProductName: "Noo Stop Zeera",
  Tagline: "A Refreshing Twist of Zeera.",
  Description:
    "Discover Noo Stop Zeera, a fizzy cumin-flavoured refreshing beverage crafted for everyday refreshment.",

  ShortDescription: "A fizzy, refreshing zeera-flavoured drink.",
  
  About:
    "Noo Stop is an emerging Indian beverage brand bringing a refreshing twist to traditional zeera flavour. Our goal is to deliver refreshing beverage experiences to customers.",

  Vision:
    "To build a trusted and recognizable beverage brand that brings refreshing experiences to people across India.",

  // Product Information
  Product: {
    Name: "Noo Stop Zeera",
    Category: "Carbonated Cumin-Flavoured Beverage",
    Flavor: "Zeera (Cumin)",
    IsCarbonated: true,
    ServingSize: "160 ml",
    ServingsPerPack: 1,
    ShelfLife: "3.5 months from manufacture",
    MRP: 10, 
    Currency: "INR",
    Ingredients: [], // TODO: Copy from actual bottle label
    Image: "/images/noo-stop-zeera.png",
    BackImage: "/images/noo-stop-zeera-back.png",
  },

  // Contact Information
  Contact: {
    Email: "noostop870@gmail.com",
    Phone: "917819928700", // TODO: Customer care number
    WhatsApp: "917819928700", // TODO: 91XXXXXXXXXX
    WhatsAppMessage:
      "Hello Noo Stop, I would like to know more about Noo Stop Zeera.",
    Address: "MOH. Bajar Khurd, G.T. Road,Purkazi,Muzaffarnagar,251327", // TODO: Approved public business address
    City: "Purqazi",
    District: "Muzaffarnagar",
    State: "Uttar Pradesh",
    Country: "India",
  },

  // Social Media
  Socials: {
    Instagram: "https://www.instagram.com/ardsuhail", // TODO
    Facebook: "https://www.instagram.com/ardsuhail", // TODO
    YouTube: "https://www.instagram.com/ardsuhail", // TODO
    LinkedIn: "https://www.instagram.com/ardsuhail",
  },

  // Business Information
  Business: {
    Name: "Noo Stop",
    Type: "Beverage Brand",
    Industry: "Food & Beverages",
    Manufacturer: "", // TODO: Third-party manufacturer name
    FSSAILicense: "", // TODO: Verify from packaging
    DistributorEmail: "noostop870@gmail.com",
    DistributorPhone: "", // TODO
  },
};

// WhatsApp URL helper
export const getWhatsAppURL = (message) => {
  const phone = siteConfig.Contact.WhatsApp.replace(/\D/g, "");

  if (!phone) return "#";

  const text = message || siteConfig.Contact.WhatsAppMessage;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
