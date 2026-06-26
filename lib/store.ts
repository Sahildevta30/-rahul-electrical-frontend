import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, User } from '@/types';

// ── CART STORE ──────────────────────────────────────────────
interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (product_id: string) => void;
  updateQty: (product_id: string, qty: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        set((state) => {
          const existing = state.items.find(i => i.product_id === newItem.product_id);
          if (existing) {
            return { items: state.items.map(i =>
              i.product_id === newItem.product_id
                ? { ...i, quantity: Math.min(i.quantity + 1, i.stock) }
                : i
            )};
          }
          return { items: [...state.items, { ...newItem, quantity: 1 }] };
        });
      },
      removeItem: (product_id) =>
        set((state) => ({ items: state.items.filter(i => i.product_id !== product_id) })),
      updateQty: (product_id, qty) =>
        set((state) => ({
          items: qty <= 0
            ? state.items.filter(i => i.product_id !== product_id)
            : state.items.map(i => i.product_id === product_id ? { ...i, quantity: Math.min(qty, i.stock) } : i)
        })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'rew_cart' }
  )
);

// ── AUTH STORE ──────────────────────────────────────────────
interface AuthStore {
  user: User | null;
  token: string | null;
  language: 'en' | 'hi';
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  setLanguage: (lang: 'en' | 'hi') => void;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      language: 'en',
      setAuth: (user, token) => {
        if (typeof window !== 'undefined') localStorage.setItem('rew_token', token);
        set({ user, token });
      },
      logout: () => {
        if (typeof window !== 'undefined') localStorage.removeItem('rew_token');
        set({ user: null, token: null });
      },
      setLanguage: (language) => set({ language }),
      isAdmin: () => get().user?.role === 'admin',
    }),
    { name: 'rew_auth', partialize: (s) => ({ user: s.user, token: s.token, language: s.language }) }
  )
);
