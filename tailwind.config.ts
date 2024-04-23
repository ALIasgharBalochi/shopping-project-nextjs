import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'headphon-bg': "url('/public/bg.png')",
      },
      colors: {
        primary: {
          25: '#E4EEFE',
          50: '#AECDFB',
          75: '#78ABF9',
          100: '#428AF6',
          200: '#2779F5',
          400: '#0951BE',
          500: '#063A88',
          600: '#052E6D',
          700: '#042352',
          900:'#021736'

        },
        secondary: {
          100: '#FDDBC6',
          200: '#FAB793',
          300: '#F68242',
          400: '#F45E0C',
          500: '#BE4909',
          600: '#883406'
        },
        gray: {
          50: '#F9F9F9',
          100: '#F6F6F6',
          200: '#EDEDED',
          300: '#CBCBCB',
          400: '#B4B4B4',
          500: '#9E9E9E',
          600: '#717171',
          700: '#505050',
          800: '#444444',
          900: '#2D2D2D'
        },
        statusEror: '#C91433',
        statusErrorLight: '#FAE7EB',
        statusSuccess: '#198754',
        statusSuccessLight: '#D1F7E5'
      }
    },
  },
  plugins: [],
};
export default config;
