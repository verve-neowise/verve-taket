import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $pages: path.resolve('./src/view/pages'),
      $components: path.resolve('./src/view/components'),
      $data: path.resolve('./src/data'),
      $store: path.resolve('./src/store'),
      $functions: path.resolve('./src/functions')
    }
  }
})