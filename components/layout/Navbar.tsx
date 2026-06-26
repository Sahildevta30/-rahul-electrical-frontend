"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "../../lib/cartStore";
import { useAuthStore } from "../../lib/authStore";
import { useLangStore } from "../../lib/langStore";
import { useState } from "react";

export default function Navbar() {
  const { count } = useCartStore();
  const { user, logout } = useAuthStore();
  const { t, lang, setLang } = useLangStore();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { label: t("home"), href: "/" },
    { label: t("products"), href: "/products" },
    { label: t("services"), href: "/services" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">Rahul Electrical</p>
            <p className="text-xs text-gray-500 leading-tight">Works</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-yellow-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="text-xs border border-gray-300 rounded-full px-2 py-1 text-gray-600 hover:bg-gray-50"
          >
            {lang === "en" ? "हिं" : "EN"}
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <span className="text-xl">🛒</span>
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {count()}
              </span>
            )}
          </Link>

          {/* Account */}
          {user ? (
            <div className="relative group">
              <button className="text-sm text-gray-700 font-medium">{user.name?.split(" ")[0]}</button>
              <div className="absolute right-0 top-6 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-44 hidden group-hover:block">
                <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{t("myOrders")}</Link>
                <Link href="/account?tab=bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{t("myBookings")}</Link>
                <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">{t("logout")}</button>
              </div>
            </div>
          ) : (
            <Link href="/account" className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
              {t("login")}
            </Link>
          )}

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-gray-700 border-b border-gray-50 last:border-0">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
