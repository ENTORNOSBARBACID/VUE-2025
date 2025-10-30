<template>
  <MenuTabla></MenuTabla>
  <router-view></router-view>
</template>

<script>
// import PadreComponentVue from './components/PadreComponent.vue'
// import PadreNumero from './components/PadreNumero.vue';
// import Comics from './components/ComicsComponent.vue';
// import SeleccionMultiple from './components/SeleccionMultiple.vue';
// import CheckboxComponent from './components/CheckboxComponent.vue';
// import MenuComponent from './components/MenuComponent.vue';
import MenuTabla from './components/MenuTabla.vue';
export default {
  name: 'App',
  components: {
    MenuTabla
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
