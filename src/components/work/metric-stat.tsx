"use client";

import { useEffect, useReducer, useRef } from "react";

interface MetricStatProps {
  value: string;
  label: string;
  className?: string;
}

function displayReducer(state: number, action: { type: "set"; value: number }) {
  return action.value;
}

export default function MetricStat({ value, label, className = "" }: MetricStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);
  const [display, dispatch] = useReducer(displayReducer, 0);

  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const target = numericPart ? parseInt(numericPart, 10) : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0 || animatedRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      animatedRef.current = true;
      dispatch({ type: "set", value: target });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1200;
          const steps = 40;
          const increment = target / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            dispatch({ type: "set", value: Math.min(Math.round(increment * step), target) });
            if (step >= steps) clearInterval(timer);
          }, duration / steps);

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div
        className="text-4xl sm:text-5xl font-bold tracking-tight"
        style={{ color: "oklch(var(--teal))" }}
      >
        {target > 0 ? `${display}${suffix}` : value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
