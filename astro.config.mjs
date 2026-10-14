// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://matteoballotta.github.io',
  base: "",
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'JetBrainsMono',
			cssVariable: '--font-jetbrains-mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/JetBrainsMono-Medium.woff2'],
						weight: 500,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
