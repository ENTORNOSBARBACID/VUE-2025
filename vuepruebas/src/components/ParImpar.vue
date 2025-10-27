<template>
  <h1>Par o Impar</h1>
  <h3>Introduce un numero</h3>
  <input type="number" v-model="numero">
  <button @click="generarNumeroRandom()">Generar un numero del 1 al 100</button>
  <div v-if="numero">
    <h1>Numero: {{numero}}</h1>
    <h2 v-if="numero%2==0" style="color:green">PAR</h2>
    <h2 v-else style="color:red">IMPAR</h2>
  </div>
  <div v-if="numeroRandom">
    <h1>Numero Random: {{numeroRandom}}</h1>
    <h2 v-if="numeroRandom%2==0" style="color:green">PAR</h2>
    <h2 v-else style="color:red">IMPAR</h2>
  </div>
</template>

<script>
export default {

    data(){
        return{
            numero:0,
            numeroRandom:0
        }
    },
    methods:{
        generarNumeroRandom(){
            var random=parseInt( Math.random()*100)+1
            this.numeroRandom=random
        }

    }
}   
</script>

<style>

</style>