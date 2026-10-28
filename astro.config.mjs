import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://portafolio-tau-ruddy-65.vercel.app',
	integrations: [sitemap()]
});
