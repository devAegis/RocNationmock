// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ 
export default defineConfig({
  plugins: [
    react(),
    
  ],

  server: {
    host: '0.0.0.0', // Allow access from other devices on the network
    port: 2000,       // Ensure the port matches the one you're forwarding
  },
})
