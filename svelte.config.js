/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
import vercel from '@sveltejs/adapter-vercel';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [svg()]
		},
		adapter: vercel()
	}
};

export default config;
