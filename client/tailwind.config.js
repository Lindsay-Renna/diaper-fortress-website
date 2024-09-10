/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["oswald", "sans-serif"],
				BenchNine: ["BenchNine", "sans-serif"],
				BungeeSpice: ['"Bungee Spice"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
