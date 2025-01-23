import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      // Aliases for commonly used directories
      '~components': path.resolve(__dirname, 'src/components/'),
      '~lib': path.resolve(__dirname, 'src/lib/'),
      '~request': path.resolve(__dirname, 'src/lib/'),
      '~assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
  server: {
    port: parseInt(process.env.VITE_PORT || '3000'), // Default to 3000 if not set in .env
    open: true, // Automatically open the browser
  },
  envDir: '.env',

});
