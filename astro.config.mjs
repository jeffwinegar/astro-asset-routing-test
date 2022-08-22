import { defineConfig } from 'astro/config';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'http://www.site.com/grandparent/parent/root/',
  integrations: [image()],
});
