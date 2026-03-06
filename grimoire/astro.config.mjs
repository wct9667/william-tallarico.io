// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/wct9667.githu.io/william-tallarico.io',
  	base: '/william-tallarico.io/',
  	integrations: [mdx(), sitemap()],
});
