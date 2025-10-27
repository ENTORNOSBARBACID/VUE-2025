import SeriesComponent from "./components/SeriesComponent.vue"
import HomeComponent from "./components/HomeComponent.vue"
import CineComponent from "./components/CineComponent.vue"
import DirectivasComponent from "./components/DirectivasComponent.vue"
import ParImpar from "./components/ParImpar.vue"
import PropideadConmutada from "./components/PropiedadConmutada.vue"
import MetodosFilters from "./components/MetodosFilters.vue"
import { createRouter, createWebHistory } from "vue-router"

const myRouter=[
    { path :"/", component:HomeComponent},
    { path :"/series", component:SeriesComponent},
    { path :"/cine", component:CineComponent},
    { path :"/directivas", component:DirectivasComponent},
    { path :"/parimpar", component:ParImpar},
    { path :"/conmutada", component:PropideadConmutada},
    { path :"/filters", component:MetodosFilters}
    
]
const router=createRouter({
    history: createWebHistory(),
    routes:myRouter
})
export default router