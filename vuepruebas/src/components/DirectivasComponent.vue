<template>
  <h1>Elemplo Directivas</h1>
  <h2>Numero: {{$data.numero}}</h2>
  <label>Cambiar numero</label>
  <input type="number" v-model="numero">
  <label>Cambiar texto</label>
  <input type="text" v-model="texto">

  <h3 v-if="numero > 0">POSITIVO </h3>
  <h3 v-else-if="numero < 0">NEGATIVO </h3>
  <h3 v-else>CERO</h3>
  <hr>
  <label>Añadir serie</label>
  <input type="text" v-model="newSerie">
  <button @click="añadirSerie()">Añadir</button>
  <div v-if="series.length>0">
    <h4 v-for="serie in series" :key="serie">
        {{serie}}
    </h4>
  </div>
</template>

<script>
export default {
    name:"DirectivasComponent",
    data(){
        return{
            numero:0,
            texto:"",
            series:["Breaking bad", "Rick y Morty", "Prision Break", "Game of Thrones", "One Piece"],
            newSerie:""
        }
    },
    methods:{
        añadirSerie(){
            this.series.push(this.newSerie)
        }
    }
}
</script>

<style>

</style>