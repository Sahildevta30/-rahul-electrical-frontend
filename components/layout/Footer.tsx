import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⚡</span>
            <p className="font-bold text-white">Rahul Electrical Works</p>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Electrical products, motor rewinding, transformer repair and house wiring services in Brajrajnagar, Odisha.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link href="/" className="block hover:text-white transition-colors">Home</Link>
            <Link href="/products" className="block hover:text-white transition-colors">Products</Link>
            <Link href="/services" className="block hover:text-white transition-colors">Services</Link>
            <Link href="/bookings" className="block hover:text-white transition-colors">Book Service</Link>
            <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>📍 Brajrajnagar, Jharsuguda, Odisha</p>
            <p>
              📞{" "}
              <a href="tel:9827708428" className="hover:text-white">9827708428</a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:rahulelecworks@gmail.com" className="hover:text-white">
                rahulelecworks@gmail.com
              </a>
            </p>
            <div className="flex gap-3 pt-2">
              <a href="tel:9827708428"
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded-lg">
                📞 Call
              </a>
              <a href="https://wa.me/919827708428" target="_blank" rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Rahul Electrical Works. All rights reserved.
      </div>
    </footer>
  );
}
