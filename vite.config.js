import { createVuePlugin } from "vite-plugin-vue2"
import { defineConfig } from "vite"
import WindiCSS from "vite-plugin-windicss"
import path from "path"
export default defineConfig({
  plugins: [createVuePlugin(), WindiCSS()],
  build: {
    // 将小于3kb的图片文件以base64打包到代码中
    assetsInlineLimit: 3 * 1024,
    reportCompressedSize: false,
    rollupOptions: {
      external: [],
      output: {
        globals: {
          // vue: "Vue",
          // "vue-router": "VueRouter",
          // "vuex": "Vuex",
          // "vue-i18n": "VueI18n",
          // 百度地图
          // BMap: "BMap"
        }
        //   manualChunks: (id) => {
        //     // 可以有效处理掉部分情况下，依赖长期不更改导致的协商缓存次请求服务器的问题
        //     if (id.includes("/node_modules/echarts/")) {
        //       return "echarts";
        //     }
        //     if (id.includes("/node_modules/lodash/")) {
        //       return "lodash";
        //     }
        //   },
      }
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      }
    ]
  }
})
