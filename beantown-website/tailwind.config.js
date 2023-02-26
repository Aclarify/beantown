/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				'3xl': '2500px',
				'4xl': '3000px',
			},
			fontFamily: {
				neuePlak: ['var(--font-neue-plak)'],
			},
			fontSize: {
				//	text-
			},
			colors: {
				'primary-black': '#18181B',
				'primary-white-shade-1': '#FCFDFC',
				'primary-shade-1': '#15284C',
				'primary-shade-2': '#A0A9B7',
				'primary-shade-3': '#ECEEF1',
				'secondary-shade-1': '#7AADD3',
				'secondary-shade-2': '#CADEED',
				'secondary-shade-3': '#F4F8FB',
				'secondary-shade-4': '#D9D9D9',
				'home-hero-gradient-start': 'rgba(21, 40, 76, 0.4)',
				'home-hero-gradient-end': 'rgba(21, 40, 76, 0)',
				'gray-shade-1': '#47515F',
				'gray-shade-2': '#8B98AB',
				'gray-shade-3': '#E3E5EA',
				'gray-shade-4': '#0000000',
				'gray-shade-5': '#2C305829',
				'service-red': 'var(--services-red-color-hex)',
				'service-red-bg': '#FCF7F7',
				'service-yellow-bg': '#FEFCE6',
				'service-yellow': 'var(--services-yellow-color-hex)',
				'service-yellow-bg': '#FEFCE6',
				'service-green': 'var(--services-green-color-hex)',
				'service-green-bg': '#F0FAF5',
			},
			letterSpacing: {
				wide: '1px',
				wider: '1.5px',
			},
			backgroundSize: {
				'fit-to-parent': '100% 100%',
			},
			zIndex: {
				'-1': '-1',
				0: '0',
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5',
			},
		},
	},
	plugins: [],
};
