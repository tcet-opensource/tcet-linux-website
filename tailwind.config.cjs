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
			borderColor:
			{
				'custom-border-color': "#53B1FD",
			},
			borderWidth:
			{
				'custom-w': "1px 0px 2px 0px",
			},
		},
	},
	plugins: [],
}
