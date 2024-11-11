import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
  base: './',
  server: {
    port: process.env.PORT || 3000, // Ensure Vite binds to a port
  },
});

