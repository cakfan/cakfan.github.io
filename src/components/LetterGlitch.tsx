"use client";

import { useRef, useEffect, type CSSProperties } from "react";

interface LetterGlitchProps {
  glitchColors?: string[];
  className?: string;
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
  opacity?: number;
}

interface Letter {
  char: string;
  color: string;
  targetColor: string;
  colorProgress: number;
}

interface Grid {
  columns: number;
  rows: number;
}

const DEFAULT_COLORS_LIGHT = ["#c8c8c8", "#d8d8d8", "#e0e0e0"];
const DEFAULT_COLORS_DARK = ["#282828", "#383838", "#484848"];
const DEFAULT_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_#";

const FONT_SIZE = 16;
const CHAR_WIDTH = 10;
const CHAR_HEIGHT = 20;

function hexToRgb(hex: string) {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthand, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function interpolateColor(
  start: { r: number; g: number; b: number },
  end: { r: number; g: number; b: number },
  factor: number
) {
  const r = Math.round(start.r + (end.r - start.r) * factor);
  const g = Math.round(start.g + (end.g - start.g) * factor);
  const b = Math.round(start.b + (end.b - start.b) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function LetterGlitch({
  glitchColors,
  className = "",
  glitchSpeed = 80,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = DEFAULT_CHARACTERS,
  opacity = 0.15,
}: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const letters = useRef<Letter[]>([]);
  const grid = useRef<Grid>({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<string[]>(DEFAULT_COLORS_DARK);

  const lettersAndSymbols = Array.from(characters);

  const getRandomChar = () =>
    lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];

  const getRandomColor = () =>
    colorsRef.current[Math.floor(Math.random() * colorsRef.current.length)];

  const calculateGrid = (width: number, height: number) => ({
    columns: Math.ceil(width / CHAR_WIDTH),
    rows: Math.ceil(height / CHAR_HEIGHT),
  });

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const total = columns * rows;
    letters.current = Array.from({ length: total }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${FONT_SIZE}px monospace`;
    ctx.textBaseline = "top";

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * CHAR_WIDTH;
      const y = Math.floor(index / grid.current.columns) * CHAR_HEIGHT;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const updateLetters = () => {
    if (!letters.current.length) return;
    const count = Math.max(1, Math.floor(letters.current.length * 0.05));
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * letters.current.length);
      const letter = letters.current[idx];
      if (!letter) continue;
      letter.char = getRandomChar();
      letter.targetColor = getRandomColor();
      if (!smooth) {
        letter.color = letter.targetColor;
        letter.colorProgress = 1;
      } else {
        letter.colorProgress = 0;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(
            startRgb,
            endRgb,
            letter.colorProgress
          );
          needsRedraw = true;
        }
      }
    });
    if (needsRedraw) drawLetters();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext("2d");

    const updateTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      if (!glitchColors) {
        colorsRef.current = dark ? DEFAULT_COLORS_DARK : DEFAULT_COLORS_LIGHT;
        letters.current.forEach((letter) => {
          letter.color = getRandomColor();
          letter.targetColor = getRandomColor();
          letter.colorProgress = 0;
        });
        drawLetters();
      }
      if (containerRef.current) {
        const vc = dark ? "0,0,0" : "255,255,255";
        containerRef.current.style.setProperty("--vignette-color", vc);
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    resizeCanvas();
    lastGlitchTime.current = Date.now();

    const animateFrame = () => {
      const now = Date.now();
      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = now;
      }
      if (smooth) handleSmoothTransitions();
      animationRef.current = requestAnimationFrame(animateFrame);
    };

    animateFrame();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        lastGlitchTime.current = Date.now();
        animateFrame();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth]);

  const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  } as CSSProperties;

  const canvasStyle: CSSProperties = {
    display: "block",
    width: "100%",
    height: "100%",
  };

  const vignetteBaseStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    transition: "background 0.3s ease",
  };

  const outerVignetteStyle: CSSProperties = {
    ...vignetteBaseStyle,
    background:
      "radial-gradient(circle, rgba(var(--vignette-color),0) 60%, rgba(var(--vignette-color),1) 100%)",
  };

  const centerVignetteStyle: CSSProperties = {
    ...vignetteBaseStyle,
    background:
      "radial-gradient(circle, rgba(var(--vignette-color),0.8) 0%, rgba(var(--vignette-color),0) 60%)",
  };

  return (
    <div ref={containerRef} style={containerStyle} className={className} suppressHydrationWarning>
      <div style={{ ...canvasStyle, opacity, position: "absolute", inset: 0 }}>
        <canvas ref={canvasRef} style={canvasStyle} />
      </div>
      {outerVignette && (
        <div style={outerVignetteStyle} suppressHydrationWarning />
      )}
      {centerVignette && (
        <div style={centerVignetteStyle} suppressHydrationWarning />
      )}
    </div>
  );
}
