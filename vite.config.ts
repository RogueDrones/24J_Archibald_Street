import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/24J_Archibald_Street/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
