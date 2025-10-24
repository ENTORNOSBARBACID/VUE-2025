<template>
<CicloVidaVue></CicloVidaVue>
<p> </p>
<hr/>
  <h1>Home</h1>
  <h2>{{bienvenida}}</h2>
  <img src="../assets/images/Palacio-Canto-Pico_863923639_1157722_1020x574.jpg"><br>
  <h3>{{numero}}</h3>
</template>

<script>
import CicloVidaVue from './CicloVida.vue'

export default {

    components:{
         CicloVidaVue
    },
    data(){
        return{
            bienvenida:"Hola, bienvenidos a mi pagina en VUE",
            numero:0
    }
    }
}
</script>

<style>

</style>