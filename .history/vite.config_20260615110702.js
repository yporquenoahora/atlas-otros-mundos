// ...existing code...
import { loadConfigFromFile } from 'vite';


import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const loaded = await loadConfigFromFile({ command: 'serve', mode: 'development' });
const resolvedConfig = loaded?.config;

export default defineConfig({
  plugins: [svelte()],
  base: '/atlas-otros-mundos/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  }
})