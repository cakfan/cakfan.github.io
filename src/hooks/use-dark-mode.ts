"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

function resolveDark(theme: Theme): boolean {
  if (theme === "light") return false;
  if (theme === "dark") return true;
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useDarkMode() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with localStorage after mount
    setThemeState(stored);
    setIsDark(resolveDark(stored));
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => {
        const next = resolveDark("system");
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
      };
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    const next = theme === "dark";
    document.documentElement.classList.toggle("dark", next);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
    setIsDark(resolveDark(next));
    document.documentElement.classList.toggle("dark", resolveDark(next));
  }, []);

  const toggle = useCallback(() => {
    setTheme(resolveDark(theme) ? "light" : "dark");
  }, [setTheme, theme]);

  return { isDark, theme, setTheme, toggle };
}
