import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/2rism/',
  server: {
    host: '127.0.0.1', // Явно говорим юзать локальный IP вместо слова localhost
    port: 5173,        // Фиксируем порт
    strictPort: true,  // Чтобы Vite не прыгал на другой порт, если этот занят
  }
})
