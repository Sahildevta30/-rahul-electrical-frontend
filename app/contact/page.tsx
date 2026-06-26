export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-500">We're here to help. Reach out anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-4">Shop Information</h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-medium text-gray-900">Rahul Electrical Works</p>
                  <p className="text-gray-500">Brajrajnagar, Jharsuguda</p>
                  <p className="text-gray-500">Odisha — 768216</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:9827708428" className="text-yellow-600 hover:text-yellow-700">9827708428</a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:rahulelecworks@gmail.com" className="text-yellow-600 hover:text-yellow-700 break-all">
                    rahulelecworks@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="font-medium text-gray-900">Working Hours</p>
                  <p className="text-gray-500">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <a href="tel:9827708428"
              className="flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 text-center transition-colors">
              <span className="text-2xl">📞</span>
              <span className="text-xs font-medium">Call Now</span>
            </a>
            <a href="https://wa.me/919827708428" target="_blank" rel="noreferrer"
              className="flex flex-col items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-2xl py-4 text-center transition-colors">
              <span className="text-2xl">💬</span>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
            <a href="https://maps.google.com/?q=Brajrajnagar+Jharsuguda+Odisha" target="_blank" rel="noreferrer"
              className="flex flex-col items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-2xl py-4 text-center transition-colors">
              <span className="text-2xl">📌</span>
              <span className="text-xs font-medium">Directions</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Order Panel */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-4">Order via WhatsApp</h2>
          <p className="text-sm text-gray-500 mb-6">
            Send us a message on WhatsApp with your requirements and we'll get back to you quickly.
          </p>

          <div className="bg-green-50 rounded-xl p-4 mb-6 font-mono text-xs text-gray-700 whitespace-pre-line leading-relaxed">
{`Hello Rahul Electrical Works,

I want to order:

Product:
Quantity:

Name:
Phone:
Address:`}
          </div>

          <a
            href={`https://wa.me/919827708428?text=${encodeURIComponent("Hello Rahul Electrical Works,\n\nI want to order:\n\nProduct:\nQuantity:\n\nName:\nPhone:\nAddress:")}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-center transition-colors"
          >
            💬 Open WhatsApp Chat
          </a>

          <p className="text-xs text-gray-400 text-center mt-4">
            We typically respond within 30 minutes during working hours.
          </p>
        </div>
      </div>
    </div>
  );
}
