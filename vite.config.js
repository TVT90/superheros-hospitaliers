import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/superheros-hospitaliers/',
  root: './',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  }
});
