import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger'; // Verify this plugin's compatibility

export default defineConfig(({ mode }) => ({
  server: {
    host: '::', // IPv6 and IPv4 support
    port: 8080,
  },
  plugins: [
    react({
      // Explicitly configure SWC for React
      jsxImportSource: '@emotion/react',
      dev: mode === 'development',
    }),
    mode === 'development' && componentTagger(), // Conditional inclusion
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Ensure this matches your project structure
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic', // Ensure SWC handles JSX correctly
    },
  },
}));