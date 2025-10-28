<template>
  <h3>Hijo Component: {{deporte}}</h3><button @click="seleccionarFavoritos">Favorito</button>
</template>

<script>
export default {
    name:"HijoCOmponent",
    props:["deporte"],
    methods:{
      seleccionarFavoritos(){
        console.log("Soy el hijo favorito "+this.deporte)
        this.$emit("seleccionarFavoritoParent", this.deporte);
      }
    }
}
</script>

<style>

</style>