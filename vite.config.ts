import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// Ensure TypeScript recognizes the defineConfig type
export default defineConfig(({ mode }) => ({
  server: {
    host: '::', // IPv6 and IPv4 support
    port: 8080,
  },
  plugins: [
    react(), // Always include react-swc plugin
    mode === 'development' && componentTagger(), // Conditionally include componentTagger
  ].filter(Boolean), // Remove undefined values
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Add SWC-specific options if needed
  optimizeDeps: {
    esbuildOptions: {
      // Ensure SWC handles JSX correctly
      jsx: 'automatic',
    },
  },
}));