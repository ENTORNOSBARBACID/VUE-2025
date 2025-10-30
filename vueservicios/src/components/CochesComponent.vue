<template>
  <h1>Coches</h1>
  <hr/>
  <div id="contenedor">
  <div id="content" v-for="c in coches" :key="c">
    <h2>{{ c.marca }}</h2>
    <h2>{{ c.modelo }}</h2>
    <img :src = "c.imagen" style="width:250px; height:300px" />
    <hr/>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global.js';
let url=Global.url;
export default {
    name: "CochesComponent",
    data(){
        return{
            coches:[]
        }
    },
    mounted(){
        let request="webresources/coches"

        axios.get(url+request).then(response=>{
            this.coches=response.data
        })
        
    }
}
</script>

<style>
#content{
    float:left;
    border: 2px solid black;
    margin:5px
    }
</style>