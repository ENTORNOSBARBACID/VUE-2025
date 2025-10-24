<template>
    <MenuComponent></MenuComponent>
    <hr/>
    <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
// import CIneComponent from './components/CIneComponent.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import MusicaComponent from './components/MusicaComponent.vue'
//import HolaMundo from './components/HolaMundo.vue'
export default {
  name: 'App',
  components: {
  MenuComponent
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
  margin-top: 60px;
}
</style>
