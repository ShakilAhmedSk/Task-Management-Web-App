import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ✅ yes, this is now correct for v4.1
    svgr(),         // ✅ this enables SVG as React components
  ],
});
