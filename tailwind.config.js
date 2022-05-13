module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0 0px 80px -15px rgba(0, 0, 0, 0.15)',
			}
		}
	},
	plugins: [],
};
