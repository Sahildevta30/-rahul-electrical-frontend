const t: Record<string, { en: string; hi: string }> = {
  home:           { en: 'Home',           hi: 'होम' },
  products:       { en: 'Products',       hi: 'उत्पाद' },
  services:       { en: 'Services',       hi: 'सेवाएं' },
  cart:           { en: 'Cart',           hi: 'कार्ट' },
  account:        { en: 'Account',        hi: 'खाता' },
  contact:        { en: 'Contact',        hi: 'संपर्क' },
  bookService:    { en: 'Book Service',   hi: 'सेवा बुक करें' },
  addToCart:      { en: 'Add to Cart',    hi: 'कार्ट में जोड़ें' },
  buyNow:         { en: 'Buy Now',        hi: 'अभी खरीदें' },
  whatsappInquiry:{ en: 'WhatsApp Inquiry',hi: 'WhatsApp पूछताछ' },
  checkout:       { en: 'Checkout',       hi: 'चेकआउट' },
  placeOrder:     { en: 'Place Order',    hi: 'ऑर्डर दें' },
  myOrders:       { en: 'My Orders',      hi: 'मेरे ऑर्डर' },
  myBookings:     { en: 'My Bookings',    hi: 'मेरी बुकिंग' },
  inStock:        { en: 'In Stock',       hi: 'स्टॉक में है' },
  outOfStock:     { en: 'Out of Stock',   hi: 'स्टॉक में नहीं' },
  price:          { en: 'Price',          hi: 'मूल्य' },
  total:          { en: 'Total',          hi: 'कुल' },
  shopNow:        { en: 'Shop Now',       hi: 'अभी खरीदें' },
  searchProducts: { en: 'Search products...', hi: 'उत्पाद खोजें...' },
  submitBooking:  { en: 'Confirm Booking', hi: 'बुकिंग की पुष्टि करें' },
  login:          { en: 'Login',          hi: 'लॉग इन' },
  logout:         { en: 'Logout',         hi: 'लॉग आउट' },
  name:           { en: 'Name',           hi: 'नाम' },
  phone:          { en: 'Phone',          hi: 'फोन' },
  address:        { en: 'Address',        hi: 'पता' },
  deliveryCharge: { en: 'Delivery Charge',hi: 'डिलीवरी चार्ज' },
  free:           { en: 'FREE',           hi: 'मुफ्त' },
  orderPlaced:    { en: 'Order Placed!',  hi: 'ऑर्डर दे दिया!' },
  bookingConfirmed:{ en: 'Booking Confirmed!', hi: 'बुकिंग की पुष्टि हो गई!' },
};

export const translate = (key: string, lang: 'en' | 'hi' = 'en'): string =>
  t[key]?.[lang] || t[key]?.en || key;

export default t;
