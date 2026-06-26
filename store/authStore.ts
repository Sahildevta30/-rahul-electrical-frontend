import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      setAuth: (user, token) => {
        localStorage.setItem("rew_token", token);
        set({ user, token });
      },
      logout: () => {
        localStorage.removeItem("rew_token");
        set({ user: null, token: null });
      },
      isLoggedIn: () => !!get().token,
      isAdmin: () => get().user?.role === "admin",
    }),
    { name: "rew-auth" }
  )
);
