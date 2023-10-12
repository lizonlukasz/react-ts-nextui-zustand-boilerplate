import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import dns from 'dns'
// @ts-ignore
import path from 'path';

// TODO: Temporary solution that allows open browser on 'localhost' instead of '127.0.0.1' and avoid CORS issue
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      { find: 'abis', replacement: path.resolve(__dirname, 'src/abis') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'store', replacement: path.resolve(__dirname, 'src/store') },
      { find: 'types', replacement: path.resolve(__dirname, 'src/types') },
      { find: 'views', replacement: path.resolve(__dirname, 'src/views') },
    ],
  },
  server: {
    open: true,
    host: 'localhost',
    port: 3010
  }
});
