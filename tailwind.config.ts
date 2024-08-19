import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

const Myclass = plugin(function ({ addUtilities }: PluginAPI) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [Myclass],  // Add your plugin here
  theme: {
    extend: {
      colors: {
        'primary-black-1': '#A0A0A0',
        'primary-black-2': '#222',
        'primary-black-3': '#191919',
        'primary-orange-1': '#FDD18E',
        'primary-orange-2': '#F5B75C',
        'primary-orange-3': '#DC9327',
        'primary-orange-4': '#A76706',
        'primary-orange-5': '#4B2D00',
        'button-primary': '#62A0BF',
        'button-greenp': '#4AC847',
        'header-text-bg': '#191919B3',
        'line-white': '#FFFFFF33',
        'error-red': '#C84747',
        'gym-brown': '#59504C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
};

export default config;
