import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translations, Lang, TKey } from "./i18n";

interface LangStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TKey) => string;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
      t: (key) => translations[get().lang][key] || key,
    }),
    { name: "rahul-lang" }
  )
);
