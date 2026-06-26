"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../components/product/ProductCard";
import { getProducts, getCategories } from "../lib/api";
import { useLangStore } from "../lib/langStore";

const SERVICES = [
  { icon: "⚙️", name: "Motor Rewinding", desc: "Professional motor rewinding for all types" },
  { icon: "🔌", name: "Transformer Repair", desc: "Expert transformer repair and maintenance" },
  { icon: "🏠", name: "House Wiring", desc: "Safe and certified house wiring services" },
  { icon: "💧", name: "Pump Installation", desc: "Water pump installation and repair" },
  { icon: "🌀", name: "Fan Repair", desc: "Ceiling and table fan repair service" },
  { icon: "🏭", name: "Industrial Maintenance", desc: "Industrial electrical maintenance" },
];

const WHY_US = [
  { icon: "✅", text: "Experienced Technicians" },
  { icon: "📦", text: "Genuine Products" },
  { icon: "⚡", text: "Fast Service" },
  { icon: "📍", text: "Local Support" },
  { icon: "💰", text: "Affordable Pricing" },
];

const CATEGORY_ICONS: Record<string, string> = {
  "led-bulbs": "💡",
  "tube-lights": "🔆",
  "flood-lights": "🔦",
  "electrical-wire": "🔌",
  "cables": "📡",
  "switches-panels": "⚡",
  "motors-pumps": "⚙️",
  "spare-parts": "🔩",
  "tools": "🛠️",
};

export default function HomePage() {
  const { t } = useLangStore();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getProducts({ limit: 8 }).then((r) => setProducts(r.data.products)).catch(console.error);
    getCategories().then((r) => setCategories(r.data)).catch(console.error);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-medium mb-3 tracking-widest uppercase">
            Brajrajnagar, Odisha
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{t("heroTitle")}</h1>
          <p className="text-xl text-gray-300 mb-2">{t("heroSubtitle")}</p>
          <p className="text-sm text-yellow-400 mb-8">{t("heroServices")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-xl transition-colors">
              🛒 {t("shopProducts")}
            </Link>
            <Link href="/bookings"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-xl transition-colors">
              🔧 {t("bookService")}
            </Link>
            <a href="https://wa.me/919827708428" target="_blank" rel="noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("categories")}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products?category=${cat.slug}`}
              className="flex flex-col items-center gap-2 bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all group">
              <span className="text-2xl">{CATEGORY_ICONS[cat.slug] || "📦"}</span>
              <p className="text-xs text-center text-gray-600 font-medium leading-tight group-hover:text-yellow-600">
                {cat.name}
              </p>
              {cat.product_count > 0 && (
                <span className="text-xs text-gray-400">{cat.product_count}</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
            View all →
          </Link>
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-3">📦</p>
            <p>Products will appear here once added from admin panel.</p>
          </div>
        )}
      </section>

      {/* ── Services ── */}
      <section className="bg-white py-12 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("services")}</h2>
          <p className="text-gray-500 mb-8">Professional electrical repair services at your doorstep</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.name} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-yellow-200 transition-all">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                <Link href="/bookings"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition-colors">
                  {t("bookService")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-yellow-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t("whyChooseUs")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {WHY_US.map((item) => (
              <div key={item.text} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-sm font-medium text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="bg-green-600 text-white py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Order via WhatsApp</h2>
          <p className="text-green-100 mb-6">Get quick response and easy ordering on WhatsApp</p>
          <a href="https://wa.me/919827708428?text=Hello%20Rahul%20Electrical%20Works%2C%20I%20want%20to%20place%20an%20order."
            target="_blank" rel="noreferrer"
            className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors">
            💬 Chat on WhatsApp: 9827708428
          </a>
        </div>
      </section>
    </>
  );
}
