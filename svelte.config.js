/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
//import vercel from '@sveltejs/adapter-vercel';

import adapter from '@sveltejs/adapter-static';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	/*kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [svg()]
		},
		adapter: vercel()
	}*/
	adapter: adapter({
		// default options are shown
		pages: 'build',
		assets: 'build',
		fallback: null
	})
};

export default config;
