/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
};
