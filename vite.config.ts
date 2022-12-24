import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import WindiCSS from 'vite-plugin-windicss'
// import ViteReact from '@vitejs/plugin-react'
import gzipPlugin from 'rollup-plugin-gzip'
import { million } from 'million/vite-plugin-million';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    // ViteReact(),
    million({ react: true }),
    WindiCSS({ root: process.cwd() }),
    gzipPlugin()
  ],
})