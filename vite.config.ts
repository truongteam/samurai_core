import { defineConfig } from 'vite'
import rails from 'vite-plugin-rails'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteReact from '@vitejs/plugin-react'
import gzipPlugin from 'rollup-plugin-gzip'

export default defineConfig({
  clearScreen: false,
  plugins: [
      rails(), 
      ViteLegacy({
        targets: ['defaults', 'not IE 11'],
      }),
      ViteReact(),
      gzipPlugin()
  ],
})
