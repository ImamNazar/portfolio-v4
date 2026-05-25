import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0907",
          soft: "#100e0b",
          card: "#14110d",
          cardHi: "#1a1612",
        },
        ink: {
          DEFAULT: "#f4eee2",
          soft: "#cfc8b7",
          mid: "#948c7c",
          mute: "#5b554c",
          faint: "#322f29",
        },
        line: {
          DEFAULT: "rgba(244, 238, 226, 0.08)",
          mid: "rgba(244, 238, 226, 0.16)",
          hi: "rgba(244, 238, 226, 0.24)",
        },
        acc: {
          DEFAULT: "#d4ff3a",
          soft: "#e6ff7a",
          dim: "#6b8020",
        },
        signal: {
          DEFAULT: "#5fffea",
          dim: "#2a8a7c",
        },
        warning: "#ff3a5e",
        moss: {
          DEFAULT: "#2d3a1f",
          soft: "#4a5e35",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Times New Roman", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "SF Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(212, 255, 58, 0.4)",
        "glow-sm": "0 0 8px rgba(212, 255, 58, 0.5)",
        signal: "0 0 16px rgba(95, 255, 234, 0.35)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.2, .85, .25, 1)",
        smooth: "cubic-bezier(.16, 1, .3, 1)",
      },
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
        spin60: "spin 60s linear infinite",
        spin40r: "spin 40s linear infinite reverse",
        spin90: "spin 90s linear infinite",
      },
      keyframes: {
        pulse: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.35" } },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        blink: { "50%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
};

export default config;
