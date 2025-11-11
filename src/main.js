import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import router from './router'
import App from './App.vue'


const routes = [
    { path: "/", component: HelloWorld },
    { path: "/home", component: Home },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
//




