/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				round: [
					"Plus Jakarta Sans",
					...defaultTheme.fontFamily.sans
				],
				sans: [
					"Inter",
					...defaultTheme.fontFamily.sans
				]
			},
			colors: {
				"lor-bg-1": "var(--colour-bg)",
				"lor-bg-2": "var(--colour-bg-2)",
				"lor-bg-3": "var(--colour-bg-3)",
				"lor-bg-4": "var(--colour-bg-4)",
				"lor-bg-transparent": "var(--colour-bg-transparent)",
				"lor-border": "var(--colour-border)",
				"lor-text-1": "var(--colour-text)",
				"lor-text-2": "var(--colour-text-2)",
				"lor-red": "#f82c67ff",
				"lor-orange": "#f8752cff",
				"lor-yellow": "#f4b608ff",
				"lor-green": "#0ba84dff",
				"lor-blue": "#2c5df8ff",
				"lor-purple": "#842cf8ff",
				"lor-teal": "#009e8eff"
			}
		},
	},
	plugins: [],
}
