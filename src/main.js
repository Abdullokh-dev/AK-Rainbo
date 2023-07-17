import { createApp } from 'vue'
import './style.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/bootstrap.css'
import App from './App.vue'
import router from './plugins/router.js'

const app = createApp(App)
app.use(router)
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

router.isReady().then(() => {
  app.mount('#app')
})
