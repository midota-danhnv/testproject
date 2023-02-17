import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/bootstrap/css/bootstrap.min.css'

createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
