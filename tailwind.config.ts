import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F03A00",
                lightText: "#817F7E",
                shade: "#EDEDED",
                lightBorder: "#E8E8E8"
            },
            fontFamily: {
                sans: "var(--font-geist-sans)",
            },
            fill: {
                primary: "#F03A00",
            },
            scale: {
                '102': '1.02',
                '101': '1.01',
            },
        },
    },
    plugins: [],
} satisfies Config;
