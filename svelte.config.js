/** @type {import('@sveltejs/kit').Config} */

import preprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';

const config = {
    kit: {
		target: 'body',
        adapter: vercel()
	},

    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;
