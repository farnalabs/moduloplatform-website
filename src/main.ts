import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App).use(router)
app.config.errorHandler = (err, _instance, info) => {
  console.error('[moduloplatform] render error:', err, info)
}
app.mount('#app')
