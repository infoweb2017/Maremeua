import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG', '**/*.GIF', '**/*.SVG',
    '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg',/\.(png|jpg|jpeg|gif|svg)$/],
})
