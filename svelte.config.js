import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { markdoc } from 'svelte-markdoc-preprocess';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        markdoc({
          layouts: {
            default: join(
                dirname(fileURLToPath(import.meta.url)),
                './src/layouts/Default.svelte'
            )
          },
          nodes: join(dirname(fileURLToPath(import.meta.url)), './src/components/nodes/index.svelte'),
          tags: join(dirname(fileURLToPath(import.meta.url)), './src/components/tags/index.svelte'),
          config: {
          variables: {
            toc: 'Table of contents',
          },
        }
      }),
    ],
    extensions: ['.mdoc', '.svelte'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
