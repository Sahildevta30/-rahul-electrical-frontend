import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((s) => {
          const idx = s.items.findIndex((i) => i.id === item.id);
          if (idx >= 0) {
            const items = [...s.items];
            items[idx] = { ...items[idx], quantity: Math.min(items[idx].quantity + 1, item.stock) };
            return { items };
          }
          return { items: [...s.items, { ...item, quantity: 1 }] };
        }),
      removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      updateQty: (id, qty) =>
        set((s) => {
          if (qty <= 0) return { items: s.items.filter((i) => i.id !== id) };
          return { items: s.items.map((i) => (i.id === id ? { ...i, quantity: qty } : i)) };
        }),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((a, i) => a + i.price * i.quantity, 0),
      count: () => get().items.reduce((a, i) => a + i.quantity, 0),
    }),
    { name: "rew-cart" }
  )
);
