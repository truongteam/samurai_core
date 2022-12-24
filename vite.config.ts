import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import WindiCSS from 'vite-plugin-windicss'
import ViteReact from '@vitejs/plugin-react'
import gzipPlugin from 'rollup-plugin-gzip'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    ViteReact(),
    WindiCSS({ root: process.cwd() }),
    gzipPlugin()
  ],
})