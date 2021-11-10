module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte', './src/**/*.ts'],
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
			placeholderColor: ['hover', 'focus']
		}
	},
	theme: {
		extend: {
			boxShadow: {
				underline: 'rgb(59, 130, 246) 0px 1px 0px 0px'
			},
			colors: {
				purple: {
					1000: '#11052C'
				},
				theme: {
					white: '#F5F5F5',
					purple: '#11052C',
					yellow: '#FFE459',
					pink: '#F43B86'
				}
			},

			cursor: {
				none: 'none'
			},
			fontFamily: {
				serif: ['Georama'],
				sans: ['Inter']
			},
			strokeWidth: {
				3: '3',
				4: '4',
				5: '5'
			},
			lineCap: {
				round: 'round',
				square: 'square'
			}
		}
	}
};
