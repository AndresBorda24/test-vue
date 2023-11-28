import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getRouter } from '@/lib/router'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use( getRouter() )
app.mount('#app')
