import { fileURLToPath, URL } from 'node:url'
import viteCompression from 'vite-plugin-compression'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd())
  console.log('打包', command, mode, ssrBuild, env)
  return {
    preview: {
      //预览打包后的项目
      port: 8080
    },
    server: {
      open: true,
      port: 1001,
      cors: true,
      proxy: {
        '^/dev-api/.*': {
          target: 'https://www.makeapie.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        }
      }
    },
    build: {
      outDir: 'dist', //输出目录名
      minify: 'terser', //压缩方式
      terserOptions: {
        compress: {
          drop_console: true, //剔除console,和debugger
          drop_debugger: true
        }
      },
      // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
      rollupOptions: {
        output: {
          //静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            //静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
      viteCompression({
        verbose: true, //是否在控制台输出压缩结果
        disable: false, //是否禁用,相当于开关在这里
        threshold: 10240, //体积大于 threshold 才会被压缩,单位 b，1b=8B, 1B=1024KB  那我们这里相当于 9kb多吧，就会压缩
        algorithm: 'gzip', //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: '.gz' //文件后缀
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
