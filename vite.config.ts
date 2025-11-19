import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Garante que o código que usa process.env.API_KEY continue funcionando
    'process.env': process.env
  }
});