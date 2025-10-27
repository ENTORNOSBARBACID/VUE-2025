<template>
  <h1>Padre</h1>
  <ul>
    <li v-for="sport in deportes" :key="sport">
        <HijoComponentVue :deporte="sport"></HijoComponentVue>
    </li>
  </ul>
</template>

<script>
import HijoComponentVue from './HijoComponent.vue'

export default {
    name:"PadreComponent",
    components: {
        HijoComponentVue
    },
    data(){
        return{
            deportes:["Karate", "Futbol", "Hockey", "Baloncesto", "Voleibol"]
        }
    }

}
</script>

<style>

</style>