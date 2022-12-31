import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
// import WindiCSS from 'vite-plugin-windicss'
// import ViteReact from '@vitejs/plugin-react'
import ViteReact from "@vitejs/plugin-react-refresh";
import gzipPlugin from 'rollup-plugin-gzip'
// import { million } from 'million/vite-plugin-million';
import FullReload from "vite-plugin-full-reload";
import * as path from "path";
import StimulusHMR from 'vite-plugin-stimulus-hmr' 


export default defineConfig({
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'app/frontend') }],
  },
  plugins: [
    StimulusHMR(),
    ViteReact(),
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 250 }),
    // million({ react: true }),
    // WindiCSS({ root: process.cwd() }),
    gzipPlugin(),    
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})