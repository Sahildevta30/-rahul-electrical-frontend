"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, MessageCircle, Star } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { whatsappOrderLink } from "@/lib/whatsapp";
import type { Product } from "@/types";
import toast from "react-hot-toast";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    if (product.stock === 0) return;
    addItem({
      id: product.id, name: product.name, price: product.price,
      image_url: product.image_url, stock: product.stock,
    });
    toast.success(`${product.name} added to cart ⚡`);
  };

  const discount = product.mrp ? Math.round((1 - product.price / product.mrp) * 100) : 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative">
        <div className="h-44 bg-indigo-50 flex items-center justify-center">
          {product.image_url ? (
            <Image src={product.image_url} alt={product.name} fill className="object-contain p-4" />
          ) : (
            <span className="text-5xl">⚡</span>
          )}
        </div>
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
        {product.is_featured && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
            ★ Featured
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">{product.category_name}</div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 hover:text-blue-700 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        {product.brand && <div className="text-xs text-gray-400 mb-2">{product.brand}</div>}

        {Number(product.avg_rating) > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star size={12} fill="#f59e0b" className="text-yellow-500" />
            <span className="text-xs font-semibold">{product.avg_rating}</span>
            <span className="text-xs text-gray-400">({product.review_count})</span>
          </div>
        )}

        <div className="flex items-baseline gap-2 mb-3 mt-auto">
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          {product.mrp && product.mrp > product.price && (
            <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
          )}
        </div>

        <div className="flex gap-2">
          <button onClick={handleAdd} disabled={product.stock === 0}
            className="flex-1 flex items-center justify-center gap-1.5 bg-gray-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <ShoppingCart size={14} />
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
          <a href={whatsappOrderLink({ name: product.name, price: product.price })} target="_blank"
            className="flex items-center justify-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors" title="Order via WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
