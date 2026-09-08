/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Harvest Hill palette, sampled from the live template
        brand: {
          DEFAULT: "#035925", // rgb(3, 89, 37) — nav, buttons, quote panel
          dark: "#02481e",
          light: "#0a6e30",
        },
        ink: "#000000",
        muted: "#585858",
        paper: "#fafafa", // rgb(250,250,250) — alternating section bg
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "Instrument Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Exact scale measured off the template
        display: ["70px", { lineHeight: "77px", letterSpacing: "-1.4px", fontWeight: "500" }],
        h2: ["40px", { lineHeight: "48px", letterSpacing: "-0.8px", fontWeight: "500" }],
        h3: ["24px", { lineHeight: "32px", letterSpacing: "-0.4px", fontWeight: "500" }],
        lead: ["28px", { lineHeight: "36px", letterSpacing: "-0.5px", fontWeight: "500" }],
        stat: ["72px", { lineHeight: "1", letterSpacing: "-2px", fontWeight: "500" }],
      },
      borderRadius: {
        pill: "100px",
        card: "10px",
      },
      maxWidth: {
        shell: "1280px",
      },
      backgroundImage: {
        // linear-gradient(316deg, #EECBAA 0%, #FFFF7E 50.28%, #F5E197 100%)
        sun: "linear-gradient(316deg, #EECBAA 0%, #FFFF7E 50.28%, #F5E197 100%)",
        // card image scrim
        scrim: "linear-gradient(rgba(88,88,88,0.15) 0%, rgba(88,88,88,0.9) 40%, rgb(88,88,88) 100%)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.22,.61,.36,1) both",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
