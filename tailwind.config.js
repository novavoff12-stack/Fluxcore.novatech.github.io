/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  // "firefli" kept as alias for backwards-compat classnames.
		  fluxcore: "#5B5CFF",
		  firefli: "#5B5CFF",
		  primary: 'rgb(var(--group-theme) / <alpha-value>)',
		},
	  },
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  };
  
