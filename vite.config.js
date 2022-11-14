import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    proxy: {
      '/api': {
        // mock 代理
        // target: 'http://localhost:9999',
        // rewrite: (path) => path.replace(/^\/api/, ''),
        
        // 真实接口地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true,
      }
    }
  }
})
