<template>
  <hr/>
  <h2>{{ comic.titulo }}</h2>
  <h1 :class="{
    rojo: comic.year<=2000,
    verde: comic.year>2000
  }">{{ comic.year }}</h1>
  <img :src="comic.imagen" />
  <h3>{{ comic.descripcion }}</h3>
  <button @click="seleccionarFavorito()">Favorito</button>
  <button @click="eliminarComic()">Eliminar</button>
  <hr/>
</template>

<script>
export default {
  name:"ComicComponent",
  props:["comic"],
  methods:{
    seleccionarFavorito(){
      console.log(this.comic);
        this.$emit("favorito", this.comic)
    },
    eliminarComic(){
      this.$emit("eliminar", this.comic)
    }
  }
}
</script>

<style>

</style>