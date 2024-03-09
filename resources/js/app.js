import './bootstrap';

import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import axios  from "axios";
import VueAxios from 'vue-axios'
import App from './App.vue'
import Home from "./views/Home.vue";
import Todos from "./views/Todos.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/todos', name: 'Todos', component: Todos}
    ]
})



const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount("#app")
