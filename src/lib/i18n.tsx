"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "@/messages/en.json";
import id from "@/messages/id.json";

const dictionaries = { en, id } as const;

export type Locale = keyof typeof dictionaries;
export type Translation = typeof en;

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "en";
const SUPPORTED_LOCALES: Locale[] = ["en", "id"];

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }

  const browserLang = navigator.language.split("-")[0];
  if (SUPPORTED_LOCALES.includes(browserLang as Locale)) {
    return browserLang as Locale;
  }

  return DEFAULT_LOCALE;
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: <T = Record<string, unknown>>(key: string) => T[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(dictionaries[locale], key);
      if (typeof value === "string") return value;
      return key;
    },
    [locale]
  );

  const tArray = useCallback(
    <T = Record<string, unknown>>(key: string): T[] => {
      const value = getNestedValue(dictionaries[locale], key);
      if (Array.isArray(value)) return value as T[];
      return [];
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, tArray }),
    [locale, setLocale, t, tArray]
  );

  if (!mounted) {
    const fallbackValue: I18nContextValue = {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (key: string) => {
        const value = getNestedValue(dictionaries[DEFAULT_LOCALE], key);
        return typeof value === "string" ? value : key;
      },
      tArray: <T = Record<string, unknown>>(key: string): T[] => {
        const value = getNestedValue(dictionaries[DEFAULT_LOCALE], key);
        if (Array.isArray(value)) return value as T[];
        return [];
      },
    };
    return <I18nContext.Provider value={fallbackValue}>{children}</I18nContext.Provider>;
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
