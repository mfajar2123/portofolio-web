export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "background-light": "#ffffff",
        "background-dark": "#0a0a0a",
        "surface-dark": "#121212",
        "surface-light": "#f5f5f5",
        "border-dark": "#2a2a2a",
        "text-secondary": "#888888",
        "slate-900": "#050505",
        "slate-100": "#f5f5f5"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
    },
  },
}
