const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", ...defaultTheme.fontFamily.sans]
			},
			textColor: {
				'gray-light': '#666666'
			},
			backgroundColor: {
				'card-news': '#161616',
				'footer': '#F1F1F1'
				
			},
			borderColor: {
				cus_gray: '#C7C7C7',
				'gray-light': '#D2D2D2'
			}
		},
	},
	plugins: [],
}
