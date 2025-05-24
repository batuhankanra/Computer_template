import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:   '#2563EB', // Mavi (ana vurgu, butonlar)
        secondary: '#3B82F6', // Hover vurgusu
        third:     '#F9FAFB', // Sayfa arka planı
        fourth:    '#111827', // Yazı rengi (siyah-gri)
        fifth:     '#E5E7EB', // Kart, input, border arka planı
      },
    },
  },
  plugins: [],
} satisfies Config;
