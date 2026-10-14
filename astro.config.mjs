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
						src: ['./src/assets/fonts/JetBrainsMono-Regular.woff2'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
				],
			},
    },
    {
		provider: fontProviders.local(),
		name: 'PixelifySans',
		cssVariable: '--font-pixelify-sans',
		fallbacks: ['sans-serif'],
		options: {
			variants: [
				{
					src: ['./src/assets/fonts/PixelifySans-Regular.woff2'],
					weight: 400,
					style: 'normal',
					display: 'swap',
				},
			],
		},
	},
	],
});
