import HomeComponent from "./components/HomeComponent.vue"
import CollatzComponent from "./components/CollatzComponent.vue"
import TablaMultiplicar from "./components/TablaMultiplicar.vue"
import { createRouter, createWebHistory } from "vue-router"

const myRouter=[
    { path :"/", component:HomeComponent},
    { path :"/collatz", component:CollatzComponent},
    { path :"/tabla", component:TablaMultiplicar},
    
]
const router=createRouter({
    history: createWebHistory(),
    routes:myRouter
})
export default router