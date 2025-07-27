// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'; // Correct plugin for React support

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(), // Enables React JSX and Fast Refresh
  ],
});