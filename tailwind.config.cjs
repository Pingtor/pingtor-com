module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				purple: {
					1000: '#11052C'
				}
			},
			cursor: {
				none: 'none'
			}
		}
	}
};
