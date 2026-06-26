export const translations = {
  en: {
    home: "Home", products: "Products", services: "Services",
    cart: "Cart", account: "Account", contact: "Contact",
    addToCart: "Add to Cart", buyNow: "Buy Now", bookService: "Book Service",
    checkout: "Checkout", myOrders: "My Orders", myBookings: "My Bookings",
    login: "Login", logout: "Logout", register: "Register",
    search: "Search products...", categories: "Categories",
    inStock: "In Stock", outOfStock: "Out of Stock",
    total: "Total", proceedToCheckout: "Proceed to Checkout",
    orderPlaced: "Order Placed!", thankYou: "Thank you for your order.",
    whatsappInquiry: "WhatsApp Inquiry",
    heroTitle: "Rahul Electrical Works",
    heroSubtitle: "Electrical Products & Repair Services",
    heroServices: "Motor Rewinding • Transformer Repair • House Wiring",
    shopProducts: "Shop Products",
    whyChooseUs: "Why Choose Us",
  },
  hi: {
    home: "होम", products: "उत्पाद", services: "सेवाएं",
    cart: "कार्ट", account: "अकाउंट", contact: "संपर्क",
    addToCart: "कार्ट में डालें", buyNow: "अभी खरीदें", bookService: "सेवा बुक करें",
    checkout: "चेकआउट", myOrders: "मेरे ऑर्डर", myBookings: "मेरी बुकिंग",
    login: "लॉगिन", logout: "लॉगआउट", register: "रजिस्टर",
    search: "उत्पाद खोजें...", categories: "श्रेणियां",
    inStock: "स्टॉक में", outOfStock: "स्टॉक समाप्त",
    total: "कुल", proceedToCheckout: "चेकआउट पर जाएं",
    orderPlaced: "ऑर्डर हो गया!", thankYou: "आपके ऑर्डर के लिए धन्यवाद।",
    whatsappInquiry: "WhatsApp पर पूछें",
    heroTitle: "राहुल इलेक्ट्रिकल वर्क्स",
    heroSubtitle: "इलेक्ट्रिकल उत्पाद और मरम्मत सेवाएं",
    heroServices: "मोटर रिवाइंडिंग • ट्रांसफार्मर मरम्मत • हाउस वायरिंग",
    shopProducts: "उत्पाद देखें",
    whyChooseUs: "हमें क्यों चुनें",
  },
};

export type Lang = "en" | "hi";
export type TKey = keyof typeof translations.en;
