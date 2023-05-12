// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // aquí definimos el alias para la carpeta de assets
      '@': '/assets',
    },
  },
  server: {
    host: '0.0.0.0'
  }
});
