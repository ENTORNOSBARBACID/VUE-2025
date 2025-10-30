import { createWebHistory, createRouter } from "vue-router";
import PadreNumero from "./components/PadreNumero.vue";
import PadreComponent from "./components/PadreComponent.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import SeleccionMultipleReal from "./components/SeleccionMultipleReal.vue";
import CheckboxComponent from "./components/CheckboxComponent.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRouter=[
    {path:"/", component: PadreComponent},
    {path:"/numero", component: PadreNumero},
    {path:"/comics", component: ComicsComponent},
    {path:"/seleccion", component: SeleccionMultipleReal},
    {path:"/checkbox", component: CheckboxComponent},
    {path:"/numerodoble/:num?", component: NumeroDoble},
    {path:"/tabla/:num", component: TablaMultiplicar},
]

const router=createRouter({
    history: createWebHistory(),
    routes: myRouter
})
export default router;