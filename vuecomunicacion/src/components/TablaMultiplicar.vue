<template>
  <h1>Tabla del {{ numero }}</h1>
  <div id="content">
  <table class="results-table">
    <thead>
        <tr>
            <th>Operacion</th>
            <th>Resultado</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="i in 10" :key="i">
            <td>{{ numero }} * {{ i }} = </td>
            <td>{{(numero * i)}}</td>
        </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
    name: "TablaMutiplicar",
    data(){
        return{
            numero:0
        }
    },
    mounted(){
        this.numero=this.$route.params.num;
    },
    watch:{
        '$route.params.num'(next, old){
            if(next!=old){
                this.numero=this.$route.params.num;
            }
        }
    }
}
</script>

<style>
    #content{
        display: flex;
        justify-content: center;
        }

</style>