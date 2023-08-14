import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				heroImage: "url('/src/assets//Web_banners.jpg')",
			},

			colors: {
				primary: {
					100: 'rgba(254, 240, 243, 1)',
					500: 'rgba(146, 7, 31, 1)',
					700: 'rgba(233, 12, 49, 1)',
				},
			},
		},
	},
	plugins: [],
};
export default config;
