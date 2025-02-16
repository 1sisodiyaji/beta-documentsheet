import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Optional: remove console logs
        pure_getters: true, // Optional: clean up getters
      },
      mangle: true, // Optional: minify
      format: {
        comments: false, // Optional: remove comments in the final bundle
      },
    },
    outDir: 'build',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
  },
});
