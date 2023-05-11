import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/dist/index.css'
import 'nprogress/nprogress.css'
import '@/styles/index.scss'
import './permission.js'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
