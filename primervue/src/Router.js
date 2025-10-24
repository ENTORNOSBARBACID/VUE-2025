import CIneComponent from './components/CIneComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const myRouter=[
    {path: "/", component: HomeComponent},
    {path: "/musica", component: MusicaComponent},
    {path: "/cine", component: CIneComponent},
]
const router =createRouter({
    history: createWebHistory(),
    routes: myRouter
})

export default router