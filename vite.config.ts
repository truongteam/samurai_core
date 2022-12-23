import { defineConfig } from 'vite'
import FullReload from "vite-plugin-full-reload"
import rails from 'vite-plugin-rails'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteReact from '@vitejs/plugin-react'
import StimulusHMR from 'vite-plugin-stimulus-hmr'
import gzipPlugin from 'rollup-plugin-gzip'

export default defineConfig({
  clearScreen: false,
  plugins: [
      rails(), 
      ViteLegacy({
        targets: ['defaults', 'not IE 11'],
      }),
      ViteReact(),
      StimulusHMR(), 
      FullReload(["config/routes.rb", "app/javascript/**/*"], {delay: 300}),
      gzipPlugin()
  ],
})
