/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			orange: '#FFA048',
			orangeLite: '#fff6ed',
			red: '#ECACAC',
			green: '#78D700',
			gray: '#8E8E90',
			grayLite: '#F2F2F2',
			dark: '#1C1D22',
			white: '#fff',
			errorColor: '#AC5151'
		},
		fontFamily: {
			exo: ['Exo 2', 'sans-serif']
		},
		borderRadius: {
			none: '0',
			sm: '12px',
			normal: '18px',
			DEFAULT: '22px',
			full: '100%'
		}
	},
	plugins: []
}
