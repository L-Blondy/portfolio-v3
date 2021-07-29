const plugin = require('tailwindcss/plugin');

const animationDelay = plugin(({ addUtilities }) => {
	addUtilities({
		'.await-75': {
			'animation-delay': '75ms',
		},
		'.await-100': {
			'animation-delay': '100ms',
		},
		'.await-150': {
			'animation-delay': '150ms',
		},
		'.await-200': {
			'animation-delay': '200ms',
		},
		'.await-250': {
			'animation-delay': '250ms',
		},
		'.await-300': {
			'animation-delay': '300ms',
		},
		'.await-400': {
			'animation-delay': '400ms',
		},
		'.await-500': {
			'animation-delay': '500ms',
		},
		'.await-600': {
			'animation-delay': '600ms',
		},
		'.await-700': {
			'animation-delay': '700ms',
		},
		'.await-1000': {
			'animation-delay': '1000ms',
		},
		'.await-1100': {
			'animation-delay': '1100ms',
		},
		'.await-1250': {
			'animation-delay': '1250ms',
		},
		'.await-1500': {
			'animation-delay': '1500ms',
		},
	}, [ 'responsive' ]);
});

const animationDuration = plugin(({ addUtilities }) => {
	addUtilities({
		'.speed-75': {
			'animation-duration': '75ms',
		},
		'.speed-100': {
			'animation-duration': '100ms',
		},
		'.speed-150': {
			'animation-duration': '150ms',
		},
		'.speed-200': {
			'animation-duration': '200ms',
		},
		'.speed-300': {
			'animation-duration': '300ms',
		},
		'.speed-400': {
			'animation-duration': '400ms',
		},
		'.speed-500': {
			'animation-duration': '500ms',
		},
		'.speed-600': {
			'animation-duration': '600ms',
		},
		'.speed-700': {
			'animation-duration': '700ms',
		},
		'.speed-1000': {
			'animation-duration': '1000ms',
		},
		'.speed-1500': {
			'animation-duration': '1500ms',
		},
		'.speed-2000': {
			'animation-duration': '2000ms',
		},
		'.speed-2500': {
			'animation-duration': '2500ms',
		},
		'.speed-3000': {
			'animation-duration': '3000ms',
		},
	}, [ 'responsive' ]);
});

module.exports = {
	utils: [
		animationDelay,
		animationDuration
	],
	variants: [

	]
};