import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  //preview: {
    //port: 5173,
    //strictPort: true,
  //},
  //server: {
    //host: true,
    //strictPort: true,
    //port: 5173,
    //origin: "http://179.6.164.151:5173",
  //}
})
