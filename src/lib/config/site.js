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

    Ingredients: [
      "Purified Water",
      "Sugar",
      "Acidity Regulator (INS 330)",
      "Salt",
      "Black Salt",
      "Cumin",
      "Black Pepper",
      "Dry Ginger Powder",
      "Preservative (INS 211)",
      "Permitted Natural Colour (INS 150a)",
      "Added Cumin Flavours (Natural and Nature Identical Flavouring Substances)",
    ],

    ContainsFruit: false,

    Nutrition: {
      ServingSize: "160 ml",
      Per100ml: {
        Energy: 47.2,
        Fat: 0,
        Carbohydrates: 11.8,
        TotalSugars: 11.8,
        AddedSugars: 11.8,
        Protein: 0.2,
        Sodium: 173.4,
      },
      PerServing: {
        Energy: 75.5,
        Fat: 0,
        Carbohydrates: 18.9,
        TotalSugars: 18.9,
        AddedSugars: 18.9,
        Protein: 0.32,
        Sodium: 277.4,
      },
    },

    Image: "/images/noo-stop-zeera.png",
    BackImage: "/images/noo-stop-zeera-back.png",
  },
Business: {
  Name: "Noo Stop",
  Type: "Beverage Brand",
  Industry: "Food & Beverages",

  Manufacturer: {
    Name: "MOTHER'S SWEAR BEVERAGES PVT. LTD.",
    Address:
      "Khasra No. 2894, Laltappar Majri Grant, Doiwala, Dehradun, Uttarakhand - 248140",
    Email: "sales@theogdrinks.in",
    Website: "https://www.theogdrinks.in",
    CustomerCare: "+91 7983929140",
    FSSAILicense: "12624005000482",
  },

  MarketedBy: {
    Name: "ARSH TRADERS",
    Address:
      "GT Road, Purquazi, Muzaffarnagar, Uttar Pradesh - 251327",
    Email: "arshlanfaridi84@gmail.com",
    Phone: "7819928700",
  },

  DistributorEmail: "noostop870@gmail.com",
  DistributorPhone: "",
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
    Instagram: "https://www.instagram.com/noo_stop_zeera/", // TODO
    Facebook: "https://www.facebook.com/share/19QSRjMXEi/", // TODO
    YouTube: "https://www.youtube.com/@Noostop8700", // TODO
   
  },

 
};

// WhatsApp URL helper
export const getWhatsAppURL = (message) => {
  const phone = siteConfig.Contact.WhatsApp.replace(/\D/g, "");

  if (!phone) return "#";

  const text = message || siteConfig.Contact.WhatsAppMessage;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
