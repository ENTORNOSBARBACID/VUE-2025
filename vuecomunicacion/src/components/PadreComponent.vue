<template>
  <h1>Padre</h1>
  <h2 style="color:red" v-if="favorito">Mi deporte favorito es: {{ favorito }}</h2>
  <ul>
    <li v-for="sport in deportes" :key="sport">
      <HijoComponentVue :deporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"></HijoComponentVue>
    </li>
  </ul>
</template>

<script>
import HijoComponentVue from "./HijoComponent.vue";

export default {
  name: "PadreComponent",
  components: {
    HijoComponentVue,
  },
  data() {
    return {
      deportes: ["Karate", "Futbol", "Hockey", "Baloncesto", "Voleibol"],
      favorito:null
    };
  },
  methods: {
    seleccionarFavoritoParent(deporte){
      console.log("Yo soy tu padre, "+deporte)
      this.favorito=deporte;
    }
  },
};
</script>

<style></style>
