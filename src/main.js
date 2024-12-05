// import './assets/main.css'

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router' // tdk perlu index.js 

// dgn use router sudah jalan
createApp(App).use(router).mount('#app')