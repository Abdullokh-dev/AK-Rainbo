import { createApp } from 'vue'
import './style.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/bootstrap.css'
import App from './App.vue'
import router from './plugins/router.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(router).mount('#app')
