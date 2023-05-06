const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				title: ["Sora", ...defaultTheme.fontFamily.serif],
			},
			backgroundImage: {
				'custom-bg': "url(images/download-background.png)",
			},
			backgroundColor:
			{
				'custom-btn-blue': "#01105F",
				'custom-btn': "#2D3282",
			},
		},
	},
	plugins: [],
}
