"use client";
import Link from "next/link";

const SERVICES = [
  {
    icon: "⚙️",
    name: "Motor Rewinding",
    desc: "Professional rewinding for single-phase and three-phase motors of all sizes. We use high-quality copper wire and insulation materials.",
    price: "Starting ₹500",
  },
  {
    icon: "🔌",
    name: "Transformer Repair",
    desc: "Expert diagnosis and repair of distribution transformers, step-up and step-down transformers for industrial and domestic use.",
    price: "Starting ₹1000",
  },
  {
    icon: "🏠",
    name: "House Wiring",
    desc: "Complete house wiring, rewiring, and electrical fitting services. Certified electricians ensuring safe and standard work.",
    price: "Starting ₹2000",
  },
  {
    icon: "💧",
    name: "Pump Installation",
    desc: "Installation, repair and maintenance of water pumps, submersible pumps and agricultural pumps.",
    price: "Starting ₹800",
  },
  {
    icon: "🌀",
    name: "Fan Repair",
    desc: "Ceiling fan, table fan and exhaust fan repair and winding services. Capacitor replacement and speed regulation.",
    price: "Starting ₹200",
  },
  {
    icon: "🏭",
    name: "Industrial Maintenance",
    desc: "Preventive and corrective maintenance of industrial electrical equipment, panels, motors and control systems.",
    price: "Contact for quote",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Professional electrical repair and installation services by experienced technicians in Brajrajnagar and surrounding areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {SERVICES.map((s) => (
          <div key={s.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-yellow-200 transition-all">
            <span className="text-4xl block mb-4">{s.icon}</span>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{s.name}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <p className="text-yellow-600 font-semibold text-sm mb-5">{s.price}</p>
            <Link
              href={`/bookings?service=${encodeURIComponent(s.name)}`}
              className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            >
              Book Service
            </Link>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Need a quick estimate?</h2>
        <p className="text-gray-400 mb-6">Call or WhatsApp us for same-day response</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9827708428"
            className="bg-white text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            📞 Call: 9827708428
          </a>
          <a href="https://wa.me/919827708428?text=Hello%2C%20I%20need%20a%20service%20estimate."
            target="_blank" rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
