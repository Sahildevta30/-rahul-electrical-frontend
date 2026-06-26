const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919827708428";

export const whatsappOrderLink = (product: { name: string; price: number }) => {
  const msg = encodeURIComponent(
    `Hello Rahul Electrical Works,\n\nI want to order:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nQuantity: 1\n\nName:\nPhone:\nAddress:`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
};

export const whatsappInquiryLink = (product: { name: string }) => {
  const msg = encodeURIComponent(
    `Hello Rahul Electrical Works,\n\nI want details about: ${product.name}\n\nPlease share availability and price.`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
};

export const whatsappContactLink = (message?: string) => {
  const msg = encodeURIComponent(message || "Hello Rahul Electrical Works, I need help.");
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
};
