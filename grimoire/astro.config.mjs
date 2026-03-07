
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://wct9667.github.io/william-tallarico.io/',
  base: isProd ? '/william-tallarico.io/' : '/',
  integrations: [mdx(), sitemap()],
})
