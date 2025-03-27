import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Adiciona o plugin React
  build: {
    rollupOptions: {
      external: [
        'mock-aws-s3',
        'aws-sdk',
        'nock',
        '@mapbox/node-pre-gyp',
      ],
    },
  },
  server: {
    host: '0.0.0.0', // Permite acessos externos na rede
    port: 5173 // Define a porta do servidor
  }
});
// https://vite.dev/config/
