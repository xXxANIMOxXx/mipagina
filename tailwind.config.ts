import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'instituto-main': '#1B3C73',      // Azul oscuro
                'instituto-secondary': '#FF7F3E', // Naranja
                'instituto-bg': '#F9FAFB',        // Gris claro fondo
            },
        },
    },
    plugins: [],
};
export default config;