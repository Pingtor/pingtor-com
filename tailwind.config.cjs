module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
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
				serif: ['Georama']
			}
		}
	}
};
