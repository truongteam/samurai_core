import { defineConfig } from 'vite'
import FullReload from "vite-plugin-full-reload"
import RubyPlugin from 'vite-plugin-ruby'
import StimulusHMR from 'vite-plugin-stimulus-hmr'
import gzipPlugin from 'rollup-plugin-gzip'

export default defineConfig({
  clearScreen: false,
  plugins: [
      RubyPlugin(), 
      StimulusHMR(), 
      FullReload(["config/routes.rb", "app/javascript/**/*"], {delay: 300}),
      gzipPlugin()
  ],
})
