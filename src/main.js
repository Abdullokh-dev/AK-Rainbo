import { createApp } from 'vue'
import './style.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/bootstrap.css'
import App from './App.vue'
import router from './plugins/router.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)
app.use(router)

app.AOS = new AOS.init({duration: 500, once: true, mirror: false})
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

router.isReady().then(() => {
  app.mount('#app')
})
