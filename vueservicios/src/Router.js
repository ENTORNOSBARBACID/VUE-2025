import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CustomerComponent from "./components/CustomerComponent.vue";
import EmpleadoDetails from "./components/EmpleadoDetails.vue";

const myRoutes=[
    {path:"/", component: CochesComponent},
    {path:"/customer", component: CustomerComponent},
    {path:"/empleados", component: EmpleadoDetails},
]

const router=createRouter({
    history:createWebHistory(),
    routes: myRoutes
})

export default router;